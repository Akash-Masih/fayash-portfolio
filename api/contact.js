// api/contact.js
import pool from '../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const query = `
      INSERT INTO contacts (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
    `;
    const values = [name, email, phone || '', message];

    await pool.query(query, values);

    return res.status(200).json({ success: true, message: 'Message sent successfully' });

  } catch (err) {
    console.error('❌ DB or Code Error:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
