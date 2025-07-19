import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import slide1 from "../../assets/Home/slide-1.jpg";
import slide2 from "../../assets/Home/slide-2.jpg";
import slide3 from "../../assets/Home/slide-3.jpg";

const slides = [
  {
    img: slide1,
    title: "Expert Dental Care",
    desc: "Smile brighter with expert,gentle & painless dentistry.",
  },
  {
    img: slide2,
    title: "Kids to Adults, We Care",
    desc: "From tiny teeth to full smiles,we’ve got your family covered.",
  },
  {
    img: slide3,
    title: "Advanced Treatments, Trusted Hands",
    desc: "Experience modern dentistry  with a personal, caring touch.",
  },
];


const HeroSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full h-screen relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 text-center text-white px-4 mt-20 lg:mt-0">
                <h4 className="text-xl md:text-xl font-medium mb-3 tracking-wide">
                  {slide.title.toUpperCase()}
                </h4>
                <p className="max-w-4xl mx-auto text-2xl md:text-5xl font-bold leading-relaxed whitespace-pre-line mb-6 px-5">
                  {slide.desc}
                </p>
                <button className="bg-[#650E45] px-5 py-2 md:px-6 md:py-3 rounded-sm text-white text-lg md:text-base font-medium hover:opacity-90 transition">
                  Make Appointment
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          ref={prevRef}
          className="swiper-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center backdrop-blur-sm bg-white/10 text-white rounded-full cursor-pointer"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div
          ref={nextRef}
          className="swiper-next absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center backdrop-blur-sm bg-white/10 text-white rounded-full cursor-pointer"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
