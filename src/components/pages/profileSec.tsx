const CompanyProfile = () => {
  return (
    <section id="profile" className="mt-10 pt-[64px] scroll-mt-20 md:scroll-mt-[96px] py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Gambar kiri */}
        <div className="lg:col-span-5">
          <div className="relative max-w-md w-full mx-auto transition duration-300 ease-in-out hover:scale-105">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-10 space-y-4">
              <img src="/images/logo/blackL.png" alt="GoodWays Logo" className="w-full h-auto max-h-[220px] mx-auto object-contain" />
              <p className="text-center text-3xl md:text-3xl font-extrabold text-orange-500">GoodWays</p>
            </div>
          </div>
        </div>

        {/* Konten kanan */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-sm font-semibold text-orange-500 uppercase">| Profile Us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-snug">
              Digital Solutions by <br />
              <span className="text-orange-500">GoodWays</span>
            </h2>
          </div>

          <div className="transition duration-300 ease-in-out hover:scale-105 bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md space-y-4">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>GoodWays</strong> adalah studio digital yang berfokus pada pengembangan website, UI/UX design, dan solusi front-end yang modern. Kami berkomitmen membantu individu dan bisnis kecil membangun kehadiran digital yang
              profesional dan menarik.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Dengan menggabungkan <span className="text-blue-600 font-medium">teknologi modern</span> dan desain berfokus pada pengguna, kami hadir untuk mewujudkan ide Anda menjadi kenyataan digital.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Berpengalaman dalam berbagai framework front-end</li>
              <li>Spesialisasi dalam desain UI/UX responsif</li>
              <li>Dukungan dan komunikasi profesional</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
