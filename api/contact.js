// api/contact.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || (!email && !phone)) {
      return res
        .status(400)
        .json({ error: "Name and at least email or phone are required." });
    }

    // For now, just log the submission
    console.log("📩 New contact form submission:", { name, email, phone, message });

    // Respond back to frontend
    return res
      .status(200)
      .json({ success: true, message: "✅ Message received successfully." });
  }

  // Only allow POST
  return res.status(405).json({ error: "Method not allowed" });
}
