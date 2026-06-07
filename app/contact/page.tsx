export default function ContactPage() {
  return (
    <main className="min-h-screen bg-green-50 p-10">
      <h1 className="text-4xl font-bold mb-6">
        Contact Us
      </h1>

      <form className="bg-white p-6 rounded shadow max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <textarea
          placeholder="Message"
          rows={5}
          className="w-full border p-3 mb-4 rounded"
        />

        <button className="bg-green-700 text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </main>
  );
}