import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRef, useEffect, useState } from "react";

const slides = [
  {
    image: "/images/lone-tree.jpg",
    headline: "Leading the Change",
    title: "Innovating",
    highlight: "Green Energy",
    button: "Learn More",
  },
  {
    image: "/images/image1.png",
    headline: "Welcome to Our Mission",
    title: "Empowering",
    highlight: "Sustainable Solutions",
    button: "Contact Us",
  },
  {
    image: "/images/image2.png",
    headline: "Leading the Change",
    title: "Innovating",
    highlight: "Green Energy",
    button: "Learn More",
  },
  {
    image: "/images/lone-tree.jpg",
    headline: "Leading the Change",
    title: "Innovating",
    highlight: "Green Energy",
    button: "Learn More",
  },
  {
    image: "/images/image3.png",
    headline: "Shaping Tomorrow",
    title: "Building",
    highlight: "A Better Future",
    button: "Join Now",
  },
];

export default function HeroSlider() {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    created: (s) => {
      timer.current = setInterval(() => s.next(), 4000);
    },
    slideChanged: (s) => setCurrentSlide(s.track.details.rel),
    destroyed: () => {
      if (timer.current) clearInterval(timer.current);
    },
  });

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Tombol kiri */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 -translate-y-1/2 left-1 md:left-4 z-10 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-black p-1 md:p-2.5 rounded-full shadow transition"
        aria-label="Previous Slide"
      >
        <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Slider */}
      <div className="rounded-xl overflow-hidden aspect-[16/9]">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide relative">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />

              {/* Overlay teks */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-3 md:px-12">
                <div className="text-white max-w-xs md:max-w-md space-y-2 md:space-y-4">
                  <p className="inline-block bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] md:text-sm font-medium text-orange-300 shadow">{slide.headline}</p>
                  <h2 className="text-lg md:text-4xl font-bold md:font-extrabold leading-snug md:leading-tight">
                    {slide.title} <span className="text-orange-400">{slide.highlight}</span>
                  </h2>
                  <button className="inline-block mt-1 md:mt-3 px-3 md:px-5 py-1.5 md:py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base rounded-full font-medium shadow-lg transition">{slide.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-1.5 z-10">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => instanceRef.current?.moveToIdx(idx)} className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition ${idx === currentSlide ? "bg-orange-500 scale-110 ring-2 ring-orange-300" : "bg-white/40"}`} />
          ))}
        </div>
      </div>

      {/* Tombol kanan */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 -translate-y-1/2 right-1 md:right-4 z-10 bg-white/30 backdrop-blur-sm hover:bg-white/50 text-black p-1 md:p-2.5 rounded-full shadow transition"
        aria-label="Next Slide"
      >
        <svg className="w-3.5 h-3.5 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
