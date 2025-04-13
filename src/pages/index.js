import { useRouter } from "next/router";
import { fetchData } from "@/lib/fetchdata";
import Categorydua from "./category/cat";
import Alldua from "./dua/alldua";
import Subategorydua from "./subcategory/subcat";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Settings from "./component/settings";

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

export default function Home({ categories, subcategories, dua }) {
  return (
    <>
      <Header />
      <Sidebar />
      <Settings />
      <Categorydua categories={categories} subcategories={subcategories} />
      <div className="min-h-screen  px-4 sm:px-8 space-y-16">
        {/* <Subategorydua subcategories= {subcategories}/>
        <Alldua dua = {dua}/> */}
      </div>
    </>
  );
}
