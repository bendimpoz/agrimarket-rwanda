export default function CategoriesPage() {
  const categories = [
    "Vegetables",
    "Fruits",
    "Grains",
    "Dairy",
  ];

  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Categories
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-white p-6 rounded shadow"
          >
            <h2 className="text-2xl font-bold">
              {category}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
}