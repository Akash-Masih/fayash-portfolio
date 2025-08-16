// api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    try {
      // Send email
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'fayash940@gmail.com',  // <-- Replace with your email
        subject: `New Contact from ${name}`,
        html: `
          <h2>New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
