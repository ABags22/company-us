const ContactHeaderSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="relative h-60 md:h-72 bg-center bg-cover rounded-xl overflow-hidden" style={{ backgroundImage: "url('/images/alam.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <span className="bg-white text-black text-xs font-semibold px-4 py-1 rounded shadow mb-2">HOME / CONTACT US</span>
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase">Contact Us</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHeaderSection;
