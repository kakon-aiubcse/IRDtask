import { useRouter } from "next/router";

const Category = ({ categories }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 space-y-16">
      {/* Categories Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.length === 0 ? (
            <p className="text-center text-gray-600">No categories available.</p>
          ) : (
            categories.map((cat) => (
              <div
                key={cat.cat_id}
                onClick={() => router.push(`/categories/${cat.cat_id}`)}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <div className="mb-4 text-center">
                  {/* Displaying category icon */}
                  {cat.cat_icon && (
                    <img
                      src={`/icons/${cat.cat_icon}.png`}
                      alt={cat.cat_name_en}
                      className="mx-auto w-16 h-16 object-contain"
                    />
                  )}
                </div>
                <h2 className="text-xl font-bold text-center text-gray-800 mb-1">
                  {cat.cat_name_bn}
                </h2>
                <p className="text-center text-sm text-gray-600 mb-4">
                  {cat.cat_name_en}
                </p>

                {/* Additional Category Info */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700">Number of Duas</h3>
                  <p className="text-sm text-gray-600">{cat.no_of_dua}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700">Number of Subcategories</h3>
                  <p className="text-sm text-gray-600">{cat.no_of_subcat}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Category;
