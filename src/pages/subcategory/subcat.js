import { useRouter } from "next/router";

const SubcategoryDua = ({ subcategories }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 space-y-16">
      {/* Subcategories Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Sub Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {subcategories.length === 0 ? (
            <p className="text-center text-gray-600">No subcategories available.</p>
          ) : (
            subcategories.map((sub) => (
              <div
                key={sub.subcat_id}
                onClick={() => router.push(`/subcategories/${sub.subcat_id}`)}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                  {sub.subcat_name_bn}
                </h2>
                <p className="text-center text-sm text-gray-600 mb-4">
                  {sub.subcat_name_en}
                </p>
                
                {/* Additional Data */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700">Number of Duas</h3>
                  <p className="text-sm text-gray-600">{sub.no_of_dua}</p>
                </div>

                {/* Optional Field - Reference */}
                {sub.refference_bn && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700">Reference</h3>
                    <p className="text-sm text-gray-600">{sub.refference_bn} / {sub.refference_en}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default SubcategoryDua;
