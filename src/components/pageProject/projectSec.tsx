import React from "react";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  image: string;
  tag: string;
  title: string;
  description: string;
  href?: string;
};

const ProjectCard = ({ image, tag, title, description, href }: ProjectCardProps) => {
  const defaultImage = "/images/logo/blackL.png";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = defaultImage;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Aspect ratio 16:9 image container */}
      <div className="aspect-w-16 aspect-h-9">
        <img src={image || defaultImage} alt={title} onError={handleImageError} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 space-y-2">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">{tag}</span>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{description}</p>
        <a href={href ?? "#"} className="inline-block mt-2 px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg">
          Lihat Proyek
        </a>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section id="project" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-mt-20 md:scroll-mt-[96px]">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">| Projects</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Explore Our <span className="text-orange-500">Featured Projects</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-base md:text-lg">Hasil terbaik dari tim kami untuk membantu Anda bersinar di dunia digital.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard image="/images/web1.png" tag="Next.js" title="Company Landing Page" description="Landing page modern untuk perusahaan startup dengan SSR dan animasi." />
          <ProjectCard image="/images/web2.png" tag="Tailwind CSS" title="Portfolio Developer" description="Website portfolio pribadi dengan desain responsif dan clean." />
          <ProjectCard image="/images/web3.png" tag="React" title="Dashboard Admin" description="Sistem dashboard lengkap untuk admin dan manajemen data." />
          <ProjectCard image="/images/web4.png" tag="E-commerce" title="Toko Online" description="Toko online fullstack dengan sistem keranjang, checkout, dan otentikasi." />
          <ProjectCard image="/images/web5.png" tag="Blog" title="Personal Blog" description="Blog pribadi dengan markdown support dan light/dark mode toggle." />
          <ProjectCard image="/images/web6.png" tag="Modern Design" title="Agency Website" description="Situs agensi kreatif dengan animasi scroll dan galeri project." />
        </div>

        <div className="text-center mt-10">
          <Link to="/projects" className="inline-block px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition duration-300">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
