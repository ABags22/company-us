import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const CompanyProfile = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden">
            <img src="/images/lone-tree.jpg" alt="Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 rounded-3xl" />

            <div className="absolute inset-0 z-10 flex items-center">
              <div className="w-full px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full">
                  <div className="max-w-xl space-y-6 text-center md:text-left">
                    <p className="text-sm uppercase tracking-wide text-blue-200 dark:text-blue-100 font-semibold">Welcome to Our Company</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white dark:text-white">
                      Empowering <br />
                      <span className="text-green-300 dark:text-green-400">Sustainable Solutions</span>
                    </h1>
                    <a href="#contact" className="mt-6 inline-block">
                      <button className="bg-green-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-medium transition">Contact Us</button>
                    </a>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="leading-relaxed">We are committed to delivering high-quality, environmentally friendly products and services. Our mission is to create a sustainable future through innovation and collaboration with our clients.</p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="service" className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Consulting",
                description: "Strategic advice to drive your business forward.",
              },
              {
                title: "Development",
                description: "Custom solutions built for performance and growth.",
              },
              {
                title: "Support",
                description: "Dedicated assistance and maintenance for your systems.",
              },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  name: "Jane Doe",
                  role: "Chief Executive Officer",
                  img: "/images/image1.png",
                },
                {
                  name: "John Smith",
                  role: "Lead Developer",
                  img: "/images/image2.png",
                },
                {
                  name: "Emily Johnson",
                  role: "Marketing Manager",
                  img: "/images/image3.png",
                },
              ].map((member, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-lg transition duration-300">
                  <div className="overflow-hidden w-32 h-32 mx-auto rounded-full mb-4">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover rounded-full transform hover:scale-110 transition duration-500 cursor-pointer" />
                  </div>
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <input type="text" placeholder="Name" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded px-4 py-2" required />
            <input type="email" placeholder="Email" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded px-4 py-2" required />
            <textarea placeholder="Message" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded px-4 py-2 h-32" required />
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-black rounded-full"></div>
                <h2 className="text-xl font-bold text-white">YUWEB</h2>
              </div>
              <p className="text-sm">We are committed to delivering quality travel experiences and nature adventures that elevate your journey.</p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="hover:text-green-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-green-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#service" className="hover:text-green-400 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="text-sm space-y-2">
                <li>
                  Email:{" "}
                  <a href="mailto:hello@yourcompany.com" className="hover:underline">
                    hello@yourcompany.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a href="tel:+6281234567890" className="hover:underline">
                    +62 812 3456 7890
                  </a>
                </li>
                <li>Address: Jl. Raya Adventure, Indonesia</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4 text-2xl">
                <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
                  <FaLinkedin />
                </a>
                <a href="mailto:your@email.com" aria-label="Email" className="hover:text-red-400">
                  <FaEnvelope />
                </a>
                <a href="https://wa.me/628123456789" aria-label="WhatsApp" className="hover:text-green-400">
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
