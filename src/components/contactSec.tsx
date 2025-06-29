const ContactUsSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kolom kiri: Judul + Info Kontak */}
          <div>
            {/* Judul dan paragraf ikut grid */}
            <div className="mb-8">
              <span className="text-sm font-semibold text-red-500 uppercase">| Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Get In Touch With Our Team</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">Jika kamu memiliki pertanyaan atau ingin bekerja sama, jangan ragu untuk menghubungi kami melalui form atau kontak di bawah ini.</p>
            </div>

            {/* Info Kontak */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-full text-lg">📞</div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone Number</p>
                  <p className="font-medium">0800-123-456</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-full text-lg">✉️</div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email Address</p>
                  <p className="font-medium">info@yuweb.io</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom kanan: Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button type="submit" className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
