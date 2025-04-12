import db from "@/lib/db";

export default function handler(req, res) {
    try {
      const stmt = db.prepare('SELECT * FROM sub_category');
      const sub_categories = stmt.all();
  
      res.status(200).json(sub_categories);
    } catch (err) {
      console.error('Error fetching sub_categories:', err);
      res.status(500).json({ error: 'Failed to fetch dua' });
    }
  }