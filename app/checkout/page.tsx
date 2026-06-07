export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <form className="bg-white p-6 rounded-lg shadow max-w-xl">
        <div className="mb-4">
          <label className="block mb-2">
            Full Name
          </label>

          <input
            type="text"
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Phone Number
          </label>

          <input
            type="text"
            className="w-full border p-3 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            Delivery Address
          </label>

          <textarea
            className="w-full border p-3 rounded"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-3 rounded"
        >
          Confirm Order
        </button>
      </form>
    </main>
  );
}