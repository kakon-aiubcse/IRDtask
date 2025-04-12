import db from "@/lib/db";

export default function handler(req, res) {
    try {
      const stmt = db.prepare('SELECT * FROM dua');
      const dua = stmt.all();
  
      res.status(200).json(dua);
    } catch (err) {
      console.error('Error fetching dua:', err);
      res.status(500).json({ error: 'Failed to fetch dua' });
    }
  }