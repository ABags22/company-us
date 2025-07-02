import Footer from "../pages/footerSec";
import Sidebar from "../sidebar";

const Project = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-gray-100 dark:bg-gray-800 p-6 sticky top-0 h-max">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Project Navigation</h2>
          <nav className="space-y-2 text-sm">
            <a href="#overview" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              🧾 Overview
            </a>
            <a href="#featured" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              ⭐ Featured Project
            </a>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
              📖 Blog Project
            </a>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 px-4 md:px-8 lg:px-12 xl:px-20 py-12 space-y-24">
          {/* Section 1: Overview */}
          <section id="overview">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
              Ini adalah kumpulan project web yang dibangun menggunakan berbagai teknologi modern seperti React, Next.js, Tailwind CSS, dan lainnya. Halaman ini bertujuan memberikan gambaran menyeluruh mengenai kualitas desain dan
              implementasi dari berbagai jenis website yang telah kami buat.
            </p>
          </section>

          {/* Section 2: Featured Project */}
          <section id="featured">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Project</h2>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Dashboard Admin</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Dashboard interaktif yang memungkinkan pengelolaan data, user, dan analitik secara real-time. Dibangun dengan React, Chart.js, dan Firebase Auth.</p>
              <img src="/images/web3.png" alt="Dashboard Admin" className="rounded-lg w-full object-cover shadow" />
            </div>
          </section>

          {/* Section 3: Blog Project */}
          <section id="blog">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Blog Project</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Pelajari bagaimana membangun project frontend yang efisien dan menarik menggunakan teknologi modern.</p>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img src="/images/image.png" alt="Blog" className="w-full md:w-1/3 rounded-lg shadow-md object-cover" />

              <div className="flex-1">
                <div className="text-gray-500 text-sm mb-2">
                  <span>Mar 16, 2020</span>
                  <span className="ml-3 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">Frontend</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Membangun Landing Page yang Cepat dan Responsif</h3>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Project ini menggunakan Next.js dan Tailwind CSS untuk membangun landing page yang responsif dan ringan. Sangat cocok untuk startup atau perusahaan yang ingin tampil profesional di dunia digital.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src="/images/author.jpg" alt="Author" />
                    <div className="text-sm">
                      <p className="text-gray-900 dark:text-white font-medium leading-none">Michael Foster</p>
                      <p className="text-gray-600 dark:text-gray-400">Co-Founder / CTO</p>
                    </div>
                  </div>

                  <a href="#" className="inline-block px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded transition">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Project;
