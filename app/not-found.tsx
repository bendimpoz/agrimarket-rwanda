import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          404
        </h1>

        <p className="mt-4">
          Page Not Found
        </p>

        <Link href="/" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded">
          Go Home
        </Link>
      </div>
    </main>
  );
}