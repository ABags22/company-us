const CompanyProfile = () => {
  return (
    <section id="profile" className="mt-10 pt-[64px] scroll-mt-20 md:scroll-mt-[96px] py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        {/* Gambar kiri */}
        <div className="lg:col-span-5">
          <div className="relative max-w-md w-full mx-auto transition duration-300 ease-in-out hover:scale-105">
            <img src="/images/image3.png" alt="Company Profile" className="w-full h-auto max-h-[500px] rounded-xl shadow-lg object-cover transition duration-300 ease-in-out" />
            <div className="absolute bottom-[-20px] left-[-20px] bg-orange-500 p-4 rounded-full shadow-xl">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h3m10-12h-4a2 2 0 00-2 2v12m6-14v16m0 0h-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Konten kanan */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-sm font-semibold text-orange-500 uppercase">| Profile Us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-snug">
              Digital Solutions by <br />
              <span className="text-orange-500">YUWEB Studio</span>
            </h2>
          </div>

          <div className="transition duration-300 ease-in-out hover:scale-105 bg-gray-100 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-md space-y-4">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>YUWEB</strong> adalah studio digital yang berfokus pada pengembangan website, UI/UX design, dan solusi front-end yang modern. Kami berkomitmen membantu individu dan bisnis kecil membangun kehadiran digital yang
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
