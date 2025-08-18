import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, message } = req.body;

      // 1. Send email to YOU (admin notification)
      await resend.emails.send({
        from: "Fayash Portfolio <onboarding@resend.dev>",
        to: "fayash940@gmail.com",
        subject: "📩 New Message from Fayash Portfolio",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      // 2. Send confirmation auto-response to USER
      await resend.emails.send({
        from: "Fayash Portfolio <onboarding@resend.dev>",
        to: email, // user email
        subject: "✅ Thanks for contacting Fayash Hadayat",
        html: `
          <h2>Thank you, ${name}!</h2>
          <p>We’ve received your message and will get back to you soon.</p>
          <hr/>
          <p><strong>Your submitted details:</strong></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
          <br/>
          <p>Best Regards,<br/> Fayash Hadayat Team</p>
        `,
      });

      return res.status(200).json({ success: true, msg: "Emails sent successfully!" });
    } catch (error) {
      console.error("❌ Email send error:", error);
      return res.status(500).json({ error: "Failed to send emails" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
