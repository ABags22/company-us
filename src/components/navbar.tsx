import { useEffect, useState } from "react";
import { Home, User, Calendar, BookOpen, ClipboardList, Mail, HelpCircle, LogOut, X } from "lucide-react";

// Props untuk toggle dark mode
interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// Tombol Dark/Light mode
const DarkModeToggle = ({ darkMode, setDarkMode }: DarkModeToggleProps) => (
  <button
    onClick={() => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
    }}
    className="text-xl text-gray-800 dark:text-white transition"
    title="Toggle Theme"
  >
    {darkMode ? "🌞" : "🌙"}
  </button>
);

// Link navigasi umum (untuk versi desktop)
const NavLinks = () => (
  <>
    <a href="#home" className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      Home
    </a>
    <a href="#about" className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      About
    </a>
    <a href="#service" className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      Service
    </a>
    <a href="#contact" className="hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400">
      Contact
    </a>
  </>
);

// Menu versi desktop
const DesktopMenu = ({ darkMode, setDarkMode }: DarkModeToggleProps) => (
  <nav className="hidden md:flex justify-between items-center w-full max-w-xl font-medium">
    <div className="flex space-x-8">
      <NavLinks />
    </div>
    <div className="flex items-center space-x-4">
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium shadow-md transition">Register</button>
    </div>
  </nav>
);

// Pastikan sudah install lucide-react

// SidebarMenu
const SidebarMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-30`}>
    {/* Tombol X tutup */}
    <div className="flex justify-end p-4">
      <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-all duration-200" aria-label="Close menu">
        <X size={24} />
      </button>
    </div>

    {/* Kontainer isi sidebar */}
    <div className="flex flex-col h-[calc(100%-64px)] px-6 pb-6">
      {/* Header profile */}
      <div className="flex items-center space-x-4 mb-6">
        <img src="images/image1.png" alt="Profile" className="w-12 h-12 rounded-full object-cover" />
        <div>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">Bradon Lee</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">View profile</p>
        </div>
      </div>

      {/* Navigasi utama */}
      <div className="flex-1 overflow-y-auto">
        <nav className="flex flex-col gap-4 font-medium text-gray-800 dark:text-white">
          <MenuItem icon={<Home size={18} />} label="Track disease" />
          <MenuItem icon={<User size={18} />} label="Go doctors" />
          <MenuItem icon={<Calendar size={18} />} label="Appointment" />
          <MenuItem icon={<BookOpen size={18} />} label="Learning" />
          <MenuItem icon={<ClipboardList size={18} />} label="Quiz" />
          <MenuItem icon={<Mail size={18} />} label="Messages" />
          <MenuItem icon={<HelpCircle size={18} />} label="FAQ" />
        </nav>
      </div>

      {/* Log out tetap di bawah */}
      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white rounded-full font-medium shadow-md transition">
          <LogOut size={18} />
          Log out
        </button>
      </div>
    </div>
  </div>
);

// Komponen MenuItem agar lebih DRY
const MenuItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <a href="#" className="flex items-center gap-3 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
    {icon}
    <span>{label}</span>
  </a>
);

// Komponen utama Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <span className="text-lg font-bold text-gray-800 dark:text-white">YUWEB</span>
        </div>

        {/* Menu Desktop */}
        <DesktopMenu darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Icon Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button onClick={() => setIsOpen(true)}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-30 z-20" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navbar;
