import pool from '../lib/db.js';

export default async function handler(req, res) {
  console.log("📩 Handler invoked — method:", req.method);

  if (req.method !== 'POST') {
    console.log("⚠️ Wrong method:", req.method);
    return res.status(405).end('Method Not Allowed');
  }

  console.log("✅ POST method accepted. Body:", req.body);

  try {
    const { name, phone, email, message } = req.body;
    const result = await pool.query(
      'INSERT INTO contacts (name, phone, email, message) VALUES ($1, $2, $3, $4)',
      [name, phone, email, message]
    );
    console.log("✅ DB Insert Ok:", result);
    return res.status(200).json({ success: true, message: 'Message stored successfully!' });
  } catch (error) {
    console.error("❌ DB or Code Error:", error);
    return res.status(500).json({ success: false, message: 'Database error', error: error.message });
  }
}
