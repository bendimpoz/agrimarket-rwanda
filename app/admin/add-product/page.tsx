export default function AddProductPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Add Product
      </h1>

      <form className="bg-white p-6 rounded-lg shadow max-w-xl">
        <div className="mb-4">
          <label className="block mb-2">Product Name</label>
          <input
            type="text"
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            rows={4}
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <input
            type="text"
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="number"
            className="w-full border p-3 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded"
        >
          Save Product
        </button>
      </form>
    </main>
  );
}