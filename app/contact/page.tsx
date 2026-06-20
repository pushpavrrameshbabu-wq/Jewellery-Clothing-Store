export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-2">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-8">
          Have questions about our products? Send us an enquiry.
        </p>

        <div className="mb-6 p-4 bg-gray-100 rounded-lg">
          <p>
            <strong>Owner:</strong> DURGA PRASAD PJ
          </p>

          <p>
            <strong>Phone:</strong> 9490731606
          </p>

          <p>
            <strong>Email:</strong> durgapj.badri@gmail.com
          </p>
        </div>

        <form
          action="https://formsubmit.co/durgapj.badri@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input
            type="hidden"
            name="_subject"
            value="New Enquiry from Ultimate Collections"
          />

          <input
            type="hidden"
            name="_next"
            value="https://jewellery-clothing-store-828my80r0.vercel.app/contact"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address (Optional)"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows={5}
            required
            className="w-full border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}