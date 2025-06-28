import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const CompanyProfile = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] bg-white overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full px-6 md:px-20">
          <div className="relative w-full h-full rounded-b-3xl overflow-hidden">
            <img src="/images/lone-tree.jpg" alt="Background" className="min-w-[140%] h-full object-left-top object-cover rounded-b-3xl" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-20 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
              <div className="max-w-xl space-y-6 text-center md:text-left pl-4 md:pl-12">
                <p className="text-sm uppercase tracking-wide text-blue-200 font-semibold">Welcome to Our Company</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Empowering <br />
                  <span className="text-green-300">Sustainable Solutions</span>
                </h1>
                <button className="bg-green-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition">Contact Us</button>
              </div>
              <div className="hidden md:block w-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            We are committed to delivering high-quality, environmentally friendly products and services. Our mission is to create a sustainable future through innovation and collaboration with our clients.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Consulting</h3>
              <p className="text-gray-600">Strategic advice to drive your business forward.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Custom solutions built for performance and growth.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Dedicated assistance and maintenance for your systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
            <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-2" />
            <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2" />
            <textarea placeholder="Message" className="border border-gray-300 rounded px-4 py-2 h-32" />
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-white">Your Company</h2>
              <p className="text-sm">We are committed to delivering quality travel experiences and nature adventures that elevate your journey.</p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="text-sm space-y-2">
                <li>Email: hello@yourcompany.com</li>
                <li>Phone: +62 812 3456 7890</li>
                <li>Address: Jl. Raya Adventure, Indonesia</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4 text-2xl">
                <a href="#" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-blue-600">
                  <FaLinkedin />
                </a>
                <a href="mailto:your@email.com" className="hover:text-red-400">
                  <FaEnvelope />
                </a>
                <a href="https://wa.me/628123456789" className="hover:text-green-400">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Company. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
};

export default CompanyProfile;
