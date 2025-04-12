import { useRouter } from "next/router";

const Alldua = ({ dua = [] }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-8 space-y-16">
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
          All Duas
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {dua.length === 0 ? (
            <p className="text-center gap-3 text-gray-600">No duas available.</p>
          ) : (
            dua.map((d) => (
              <div
                key={d.dua_id} // Unique key for each dua
                onClick={() => router.push(`/dua/${d.dua_id}`)} // Navigate to dua details page
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition cursor-pointer"
              >
                <h4 className="text-md font-medium text-gray-800">
                  {d.dua_name_bn || d.dua_name_en || "Dua Name"}
                </h4>

                <p className="text-gray-600">
                  <strong>Arabic Dua:</strong> {d.dua_arabic}
                </p>
                <p className="text-gray-600">
                  <strong>Translation (English):</strong> {d.translation_en}
                </p>
                <p className="text-gray-600">
                  <strong>Translation (Bengali):</strong> {d.translation_bn}
                </p>
                <p className="text-gray-600">
                  <strong>Reference (English):</strong> {d.refference_en}
                </p>
                <p className="text-gray-600">
                  <strong>Reference (Bengali):</strong> {d.refference_bn}
                </p>
                <p className="text-gray-600">
                  <strong>Transliteration (English):</strong> {d.transliteration_en}
                </p>
                <p className="text-gray-600">
                  <strong>Transliteration (Bengali):</strong> {d.transliteration_bn}
                </p>
                <p className="text-gray-600">
                  <strong>Clean Arabic:</strong> {d.clean_arabic}
                </p>
                <p className="text-gray-600">
                  <strong>Top (English):</strong> {d.top_en}
                </p>
                <p className="text-gray-600">
                  <strong>Top (Bengali):</strong> {d.top_bn}
                </p>
                <p className="text-gray-600">
                  <strong>Audio Link:</strong> <a href={d.audio} target="_blank" rel="noopener noreferrer">Listen</a>
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Alldua;
