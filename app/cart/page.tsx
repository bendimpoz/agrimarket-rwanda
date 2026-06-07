export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Irish Potatoes",
      price: 1200,
      quantity: 2,
    },
    {
      id: 2,
      name: "Milk",
      price: 1000,
      quantity: 1,
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="bg-white rounded-lg shadow p-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b py-4"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
            </div>

            <p className="font-bold">
              {item.price * item.quantity} RWF
            </p>
          </div>
        ))}

        <div className="mt-6 flex justify-between text-2xl font-bold">
          <span>Total:</span>
          <span>{total} RWF</span>
        </div>

        <a
          href="/checkout"
          className="block mt-6 text-center bg-green-700 text-white py-3 rounded"
        >
          Proceed To Checkout
        </a>
      </div>
    </main>
  );
}