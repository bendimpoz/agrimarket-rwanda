import { prisma } from "../lib/prisma";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-bold">
                {product.name}
              </h2>

              <p className="text-gray-500">
                {product.category}
              </p>

              <p className="mt-2">
                {product.description}
              </p>

              <p className="text-green-700 font-bold text-lg mt-2">
                {product.price} RWF
              </p>

              <button className="w-full mt-4 bg-green-700 text-white py-2 rounded">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}