import { useRouter } from 'next/router';

export async function getStaticProps() {
  try {
    const ctres = await fetch('http://localhost:3000/api/categories');
    const sctres = await fetch('http://localhost:3000/api/subcategories');
    const duares = await fetch('http://localhost:3000/api/duas');

    if (!ctres.ok || !sctres.ok || !duares.ok) {
      throw new Error('Failed to fetch data from API');
    }

    const categories = await ctres.json();
    const subcategories = await sctres.json();
    const dua = await duares.json();

    return {
      props: {
        categories,
        subcategories,
        dua,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        categories: [],
        subcategories: [],
        dua: [],
      },
    };
  }
}

export default function Home({ categories, subcategories, dua }) {
  const router = useRouter();
  console.log(categories);
  console.log(subcategories);
  return (
    <>
    
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 space-y-16">
        {/* Categories Section */}
        <section>
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Dua Categories
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => router.push(`/category/${cat.id}`)}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="mb-4 text-center">
                  <img
                    src={`/icons/${cat.cat_icon}.png`}
                    alt={cat.cat_name_en}
                    className="mx-auto w-16 h-16 object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
                  {cat.cat_name_bn}
                </h2>
                <p className="text-center text-sm text-gray-600">
                  {cat.cat_name_en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Subcategories Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            Subcategories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subcategories.map((subcat) => (
              <div
                key={subcat.subcat_id}
                onClick={() => router.push(`/subcategory/${subcat.subcat_id}`)}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-1">
                  {subcat.subcat_name_bn}
                </h3>
                <p className="text-sm text-gray-600">{subcat.subcat_name_en}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Duas Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            All Duas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dua.map((d) => (
              <div
                key={d.dua_id}
                onClick={() => router.push(`/dua/${d.dua_id}`)}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <h4 className="text-md font-medium text-gray-800">
                  {d.dua_name_bn || d.dua_name_en || "Dua Name"}
                </h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
