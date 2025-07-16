// api/messages.js
import pool from '../lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('❌ DB Error:', error.message);
    res.status(500).json({ success: false, message: 'Failed to fetch messages' });
  }
}
