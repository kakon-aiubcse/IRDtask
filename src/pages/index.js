import { useRouter } from "next/router";
import { fetchData } from "@/lib/fetchdata";
import Categorydua from "./category/cat";
import Alldua from "./dua/alldua";
import Subategorydua from "./subcategory/subcat";

export async function getStaticProps() {
  const { categories } = await fetchData();
  const { subcategories } = await fetchData();
  const { dua } = await fetchData();
  

  console.log(categories);
  console.log(subcategories);

  console.log(dua);
  
  return {
    props: {
      categories: categories || [],
      subcategories: subcategories || [], 
      dua: dua || [], 
     
    },
  };
}

export default function Home({ categories,subcategories, dua }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 space-y-16">
        <Categorydua categories={categories} />
        <Alldua dua = {dua}/>
        <Subategorydua subcategories= {subcategories}/>
      </div>
    </>
  );
}

