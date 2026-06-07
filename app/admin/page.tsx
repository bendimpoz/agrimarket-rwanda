export default function AdminPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold">Products</h2>
          <p>6 Products</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold">Orders</h2>
          <p>15 Orders</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold">Customers</h2>
          <p>12 Customers</p>
        </div>
      </div>
    </main>
  );
}