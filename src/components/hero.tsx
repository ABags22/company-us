import { FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Code2, PenTool, GaugeCircle, LifeBuoy } from "lucide-react";

import HeroSlider from "../components/heroSlider";

const CompanyProfile = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <HeroSlider />
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* Judul Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              About <span className="text-orange-500">YUWEB</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">your partner in turning digital ideas into real, impactful web experiences.</p>
            <div className="mt-4 w-24 h-1 mx-auto bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {/* Gambar */}
            <div className="flex flex-col h-full">
              <img src="/images/image3.png" alt="About YUWEB" className="rounded-xl shadow-lg w-full h-auto object-cover flex-1" />
            </div>

            {/* Konten Tengah */}
            <div className="flex flex-col h-full space-y-6">
              <h3 className="text-2xl font-bold text-orange-600">Empowering Digital Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At YUWEB, we are passionate about building modern, fast, and user-friendly websites that help businesses thrive in the digital world. We bring your ideas to life with clean frontend code and intuitive design focused on
                performance and usability.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow p-5 space-y-2 mt-auto">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200">Frequently Asked Questions</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                  <li>What types of websites do you create?</li>
                  <li>How long does each project usually take?</li>
                  <li>What technologies do you specialize in?</li>
                </ul>
              </div>
            </div>

            {/* Layanan */}
            <div className="flex flex-col h-full space-y-6">
              {[
                {
                  icon: <Code2 className="w-6 h-6 text-orange-600" />,
                  title: "Frontend Development",
                  desc: "Clean, responsive, and scalable websites.",
                },
                {
                  icon: <PenTool className="w-6 h-6 text-orange-600" />,
                  title: "UI/UX Design",
                  desc: "Design that focuses on clarity and ease of use.",
                },
                {
                  icon: <GaugeCircle className="w-6 h-6 text-orange-600" />,
                  title: "Performance Optimization",
                  desc: "Fast-loading, SEO-friendly, and mobile-ready.",
                },
                {
                  icon: <LifeBuoy className="w-6 h-6 text-orange-600" />,
                  title: "Ongoing Support",
                  desc: "Regular updates and long-term maintenance.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow">
                  <div className="p-3 bg-orange-100 dark:bg-orange-600/20 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="service" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* Judul Section */}
          <div className="text-center mb-12" data-aos="fade-up">
            <p className="text-sm uppercase text-orange-500 tracking-widest font-semibold mb-2">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">We provide impactful digital solutions tailored to your business needs.</p>
            <div className="mt-4 w-24 h-1 mx-auto bg-orange-500 rounded-full"></div>
          </div>

          {/* Isi Services */}
          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
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
              <div key={index} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* Meet Our Team */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                Meet Our <span className="text-orange-500">Team</span>
              </h2>
              <div className="mt-4 w-24 h-1 mx-auto bg-orange-500 rounded-full"></div>
            </div>

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

          {/* Get in Touch */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                Get in <span className="text-orange-500">Touch</span>
              </h2>
              <div className="mt-4 w-24 h-1 mx-auto bg-orange-500 rounded-full"></div>
            </div>

            <form className="max-w-3xl mx-auto grid grid-cols-1 gap-6">
              <input type="text" placeholder="Your Name" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg px-5 py-3" required />
              <input type="email" placeholder="Your Email" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg px-5 py-3" required />
              <textarea placeholder="Your Message" className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg px-5 py-3 h-32 resize-none" required></textarea>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                Send Message
              </button>
            </form>
          </div>
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
