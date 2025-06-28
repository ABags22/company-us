import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black rounded-full"></div>
          <span className="text-lg font-bold">YUWEB</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-between items-center w-full max-w-xl font-medium">
          {/* Menu kiri (Home, About, dll) */}
          <div className="flex space-x-8">
            <a href="#" className="hover:text-green-600">
              Home
            </a>
            <a href="#" className="hover:text-green-600">
              About
            </a>
            <a href="#" className="hover:text-green-600">
              Package
            </a>
            <a href="#" className="hover:text-green-600">
              Contact
            </a>
          </div>

          {/* Tombol kanan */}
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">Book a Trip now</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white px-6 pb-4 space-y-2 font-medium">
          <a href="#" className="block hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block hover:text-green-600">
            About
          </a>
          <a href="#" className="block hover:text-green-600">
            Package
          </a>
          <a href="#" className="block hover:text-green-600">
            Contact
          </a>
          <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">Book a Trip now</button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
