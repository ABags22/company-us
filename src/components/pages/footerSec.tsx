const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-10">
        {/* Atas: Logo + Navigasi */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Brand / Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo/blackL.png " alt="GoodWays Logo" className="w-6 h-6 object-contain" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">GoodWays</span>
          </div>

          {/* Navigasi */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-300">
            <a href="#profile" className="hover:text-orange-500">
              Profile
            </a>
            <a href="#about" className="hover:text-orange-500">
              Technology
            </a>
            <a href="#project" className="hover:text-orange-500">
              Project
            </a>
            <a href="#contact" className="hover:text-orange-500">
              Contact
            </a>
          </div>
        </div>

        {/* Bawah: Garis + copyright */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} GoodWays. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
