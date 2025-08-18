import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, message } = req.body;

      // Send email via Resend
      const data = await resend.emails.send({
        from: "Fayash Portfolio <onboarding@resend.dev>", // ✅ Works without domain verification
        to: "your-email@example.com", // 🔴 replace with your own Gmail/outlook
        subject: "📩 New Message from Fayash Portfolio",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return res.status(200).json({ success: true, data });
    } catch (error) {
      console.error("❌ Email send error:", error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
