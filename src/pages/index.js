import { fetchData } from "@/lib/fetchdata";
import Categorydua from "./category/cat";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Settings from "./component/settings";

export async function getStaticProps() {
  const { categories } = await fetchData();
  const { subcategories } = await fetchData();
  const { dua } = await fetchData();

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
      <Categorydua
        categories={categories}
        subcategories={subcategories}
        dua={dua}
      />
    </>
  );
}
