export function Contact() {
  return (
    <div className="w-full h-235 px-4 py-16 bg-gray-100" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-violet-700 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">
          Have questions, suggestions, or want to collaborate? We'd love to hear from you!
        </p>
        <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Type your message..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-violet-700 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
