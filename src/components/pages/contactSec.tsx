const ContactUsSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-mt-20 md:scroll-mt-[96px]">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kolom kiri: Judul + Info Kontak */}
          <div>
            <div className="mb-8">
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">| Contact GoodWays</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug text-gray-900 dark:text-white">
                Let’s Build Something <span className="text-orange-500">Amazing</span> Together
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 text-base leading-relaxed">
                Kami adalah <strong>GoodWays</strong>, studio digital yang siap membantu Anda membangun solusi web modern — dari desain UI/UX hingga pengembangan front-end profesional. Hubungi tim kami hari ini dan wujudkan ide Anda menjadi
                kenyataan digital.
              </p>
            </div>

            {/* Info Kontak */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-full text-lg">📞</div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone / WhatsApp</p>
                  <p className="font-medium">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-full text-lg">✉️</div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium">contact@goodways.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-orange-100 text-orange-600 p-2 rounded-full text-lg">📍</div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Based in</p>
                  <p className="font-medium">Yogyakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom kanan: Form */}
          <form className="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Nama Lengkap Anda"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                placeholder="Judul Pesan"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
