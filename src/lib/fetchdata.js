export const fetchData = async () => {
    try {
      const [ctres, sctres, duares] = await Promise.all([
        fetch("http://localhost:3000/api/categories"),
        fetch("http://localhost:3000/api/subcategories"),
        fetch("http://localhost:3000/api/duas"),
      ]);
  
      if (!ctres.ok || !sctres.ok || !duares.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const [categories, subcategories, dua] = await Promise.all([
        ctres.json(),
        sctres.json(),
        duares.json(),
      ]);
  
      return { categories, subcategories, dua };
    } catch (error) {
      console.error("Fetch error:", error);
      return {
        categories: [],
        subcategories: [],
        dua: [],
      };
    }
  };
  