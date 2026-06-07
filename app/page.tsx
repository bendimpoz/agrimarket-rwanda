export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      {/* Navbar */}
      <nav className="bg-green-700 text-white p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Smart AgriMarket Rwanda
          </h1>

          <div className="space-x-6">
           <a href="/ " className="hover:text-green-200">
  Home
</a>

            <a href="/products" className="hover:text-green-200">
              Products
            </a>

            <a href="/cart" className="hover:text-green-200">
              Cart
            </a>

            <a href="/checkout" className="hover:text-green-200">
              Checkout
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-green-800 mb-6">
          Fresh Products Directly From Farmers
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Smart AgriMarket Rwanda connects farmers and customers.
          Buy fresh vegetables, fruits, grains and dairy products
          online and receive them at your doorstep.
        </p>

        <div className="mt-8">
          <a
            href="/products"
            className="bg-green-700 text-white px-8 py-4 rounded-lg text-lg hover:bg-green-800"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-3">
              Fresh Products
            </h4>
            <p>
              Directly sourced from trusted Rwandan farmers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-3">
              Fast Delivery
            </h4>
            <p>
              Get your products delivered quickly and safely.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-xl font-bold mb-3">
              Affordable Prices
            </h4>
            <p>
              Buy quality products at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4 mt-20">
        © 2026 Smart AgriMarket Rwanda. All Rights Reserved.
      </footer>
    </main>
  );
}