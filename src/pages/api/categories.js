import db from "@/lib/db";

export default function handler(req, res) {
    try {
      const stmt = db.prepare('SELECT * FROM category');
      const categories = stmt.all();
  
      res.status(200).json(categories);
    } catch (err) {
      console.error('Error fetching categories:', err);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  }