const CompanyProfile = () => {
  return (
    <>
      {/* PROFILE SECTION */}
      <section id="profile" className="pt-[64px] scroll-mt-20 md:scroll-mt-[96px] py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-screen-xl px-4 md:px-8 lg:px-16 xl:px-20 py-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Gambar Kiri */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img src="/images/image3.png" alt="Profil" className="w-full h-auto rounded-xl shadow-lg object-cover" />
              <div className="absolute bottom-[-20px] left-[-20px] bg-orange-500 p-4 rounded-full shadow-lg">
                {/* Icon kecil (misalnya ikon rumah atau profil) */}
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v6m0 0h6m-6 0H7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Konten Kanan */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-sm font-semibold text-red-500 uppercase">| Featured</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                Best Appartment <br /> & Sea View
              </h2>
            </div>

            {/* Box deskripsi */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
              <p className="text-sm text-red-500 font-semibold">Best useful links ?</p>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                Get the <strong>best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span className="text-blue-600 font-medium">best free CSS templates</span> in the world. Please
                tell your friends about it.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>How does this work ?</li>
                <li>Why is Villa Agency the best ?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyProfile;
