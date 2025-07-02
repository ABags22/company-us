// Komponen Teknologi Item
type TechnologyItemProps = {
  icon: string;
  name: string;
  desc: string;
};

const TechnologyItem = ({ icon, name, desc }: TechnologyItemProps) => (
  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out">
    <div className="w-12 h-12 p-2 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
      <img src={icon} alt={name} className="w-full h-full object-contain" />
    </div>
    <div>
      <h4 className="font-semibold text-lg text-orange-600">{name}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  </div>
);

// Section Teknologi
const TechnologySection = () => {
  return (
    <section id="technology" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-mt-20 md:scroll-mt-[96px]">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Teknologi yang Digunakan</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Website ini dibangun menggunakan teknologi modern untuk performa, keamanan, dan kemudahan pengembangan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kolom 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6 hover:scale-105 transition duration-300 ease-in-out">
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React" desc="Library JavaScript untuk membangun UI interaktif." />
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" name="TypeScript" desc="Bahasa JavaScript dengan tipe statis." />
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" name="Tailwind CSS" desc="Framework CSS utility-first untuk desain cepat." />
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" name="HTML5" desc="Struktur dasar halaman web." />
          </div>

          {/* Kolom 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-6 hover:scale-105 transition duration-300 ease-in-out">
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" name="CSS3" desc="Gaya dan layout visual modern." />
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" name="JavaScript" desc="Bahasa inti untuk interaktivitas di web." />
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" name="Next.js" desc="Framework React untuk SSR dan SSG." />
            <TechnologyItem icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" name="Git & GitHub" desc="Kontrol versi dan kolaborasi proyek." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
