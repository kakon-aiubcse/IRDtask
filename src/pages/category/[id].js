import Link from 'next/link';

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/categories'); // fixed endpoint
  const categories = await res.json();

  const paths = categories.map((cat) => ({
    params: { id: String(cat.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`http://localhost:3000/api/subcategories?categoryId=${params.id}`);
    if (!res.ok) throw new Error('Failed to fetch subcategories');
    const subcategories = await res.json();

    return {
      props: {
        subcategories,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        subcategories: [],
      },
    };
  }
}

export default function SubcategoryPage({ subcategories }) {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4">Subcategories</h1>
      {subcategories.length === 0 ? (
        <p>No subcategories found.</p>
      ) : (
        <ul className="space-y-3">
          {subcategories.map((sub) => (
            <li key={sub.subcat_id}>
              <Link href={`/subcategory/${sub.subcat_id}`}>
                <div className="border p-4 rounded hover:bg-gray-100 transition cursor-pointer">
                  {sub.subcat_name_bn || sub.subcat_name_en}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
