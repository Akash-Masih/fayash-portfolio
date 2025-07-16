// api/contact.js
const pool = require('../lib/db');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { name, phone, email, message } = req.body;

  try {
    await pool.query(
      'INSERT INTO contacts (name, phone, email, message) VALUES ($1, $2, $3, $4)',
      [name, phone, email, message]
    );
    res.status(200).json({ success: true, message: 'Message stored successfully!' });
  } catch (error) {
    console.error('DB Error:', error.message);
    res.status(500).json({ success: false, message: 'Database error' });
  }
}
