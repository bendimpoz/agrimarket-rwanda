import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-lg shadow text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Order Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase.
        </p>

        <Link
          href="/"
          className="bg-green-700 text-white px-6 py-3 rounded"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}