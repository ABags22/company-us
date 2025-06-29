import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// Link navigasi umum
const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    <a href="#profile" onClick={onClick} className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      Profile
    </a>
    <a href="#tecnology" onClick={onClick} className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      Tecnology
    </a>
    <a href="#project" onClick={onClick} className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      Project
    </a>
    <a href="#contact" onClick={onClick} className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      Contact
    </a>
  </>
);

// Menu versi desktop
const DesktopMenu = () => (
  <nav className="hidden md:flex justify-end items-center w-full font-medium">
    <div className="flex space-x-12">
      <NavLinks />
    </div>
  </nav>
);

// Menu versi mobile (sidebar kiri)
interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggle }) => (
  <div className={`md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 ${isOpen ? "max-h-[300px] py-4 px-6" : "max-h-0 overflow-hidden"}`}>
    <div className="flex flex-col space-y-4 font-medium">
      <NavLinks onClick={toggle} />
    </div>
  </div>
);

// Komponen utama navbar
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <header className="h-[64px] bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50 transition-colors">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-4 flex justify-between items-center">
          {/* Hamburger (mobile) */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 dark:text-white focus:outline-none" aria-label="Toggle Menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo - center on mobile, left on desktop */}
          <div className="flex-1 flex justify-center md:justify-start items-center space-x-2">
            <div className="w-6 h-6 bg-black rounded-full" />
            <span className="text-lg font-bold text-gray-800 dark:text-white">YUWEB</span>
          </div>

          {/* Placeholder kanan (mobile), Desktop menu */}
          <div className="w-6 h-6 md:hidden" />
          <DesktopMenu />
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} toggle={toggleMobileMenu} />
    </>
  );
};

export default Navbar;
