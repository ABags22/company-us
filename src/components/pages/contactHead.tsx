const ContactHeaderSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div
        className="relative w-full aspect-[3/1] md:aspect-[4/1] lg:aspect-[5/1] bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg transition-all duration-500"
        style={{
          backgroundImage: "url('/images/logo/blackL.png')",
          backgroundColor: "#111", // fallback color
        }}
      >
        {/* Overlay gradasi */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-transparent backdrop-blur-sm"></div>

        {/* Konten */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide animate-slideUp">Get in Touch</h1>
          <p className="mt-2 max-w-2xl text-sm md:text-base text-gray-300 animate-fadeInSlow">
            Kami di <strong>GoodWays</strong> siap mendengarkan ide Anda dan menciptakan solusi digital yang berdampak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeaderSection;
