import React from "react";

type ProjectCardProps = {
  image: string;
  tag: string;
  title: string;
  description: string;
  href?: string;
};

const ProjectCard = ({ image, tag, title, description, href }: ProjectCardProps) => {
  const defaultImage = "/images/nop.svg"; // ← Gambar fallback (ikon web)

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Hindari infinite loop
    e.currentTarget.src = defaultImage;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <img src={image || defaultImage} alt={title} onError={handleImageError} className="w-full h-32 object-cover rounded-t-md" />

      <div className="p-4">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full mb-2">{tag}</span>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{description}</p>
        <a href={href ?? "#"} className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg">
          Lihat Proyek
        </a>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section id="project" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-red-500 uppercase">| Projects</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            We Provide The Best <br /> Web Projects for You
          </h2>
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
          <a href="/projects" className="inline-block px-6 py-3 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
