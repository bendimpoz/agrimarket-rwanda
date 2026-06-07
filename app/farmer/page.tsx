export default function FarmerPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-8">
        Farmer Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold">
            My Products
          </h2>
          <p>Manage products.</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold">
            Orders Received
          </h2>
          <p>View customer orders.</p>
        </div>
      </div>
    </main>
  );
}