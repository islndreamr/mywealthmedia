// Netlify function: receives a lead from the site's forms and forwards it to GoHighLevel.
// The site posts JSON to /.netlify/functions/lead (same origin, so no cross-origin issues).
// To change where leads go, change WEBHOOK below. Nothing else on the site needs to change.
const WEBHOOK = "https://services.leadconnectorhq.com/hooks/f5bs0B1Xbu3amIUOEAys/webhook-trigger/41e3a853-e7a3-4b63-a2ca-34da4202cd6f";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method not allowed" };
  let lead;
  try { lead = JSON.parse(event.body || "{}"); } catch (e) { return { statusCode: 400, body: "Bad JSON" }; }

  const email = String(lead.email || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { statusCode: 400, body: "Bad email" };
  if (String(lead.company || "").trim()) return { statusCode: 200, body: "ok" }; // honeypot filled: drop quietly

  const payload = {
    kind: ["guide", "quiz", "diagnostic"].includes(lead.kind) ? lead.kind : "guide",
    guide: lead.guide || null,
    firstName: String(lead.firstName || "").trim().slice(0, 80),
    email: email.slice(0, 200),
    score: Number.isFinite(Number(lead.score)) && lead.score !== null && lead.score !== "" ? Number(lead.score) : null,
    page: String(lead.page || "").slice(0, 200),
    company: ""
  };

  try {
    const res = await fetch(WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!res.ok) return { statusCode: 502, body: "Upstream " + res.status };
    return { statusCode: 200, body: "ok" };
  } catch (e) {
    return { statusCode: 502, body: "Upstream error" };
  }
};
