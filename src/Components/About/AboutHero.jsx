import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import slide1 from "../../assets/About/slide1.jpg";
import slide2 from "../../assets/About/slide2.jpg";
import slide3 from "../../assets/About/slide3.jpg";

const slides = [slide1, slide2, slide3];

const AboutHero = () => {
  return (
    <section className="w-full h-screen relative">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="w-full h-full bg-black/60 flex items-center justify-center px-4">
                <div className="text-white max-w-4xl text-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    About Chakra Dental Clinic
                  </h1>
                  {/* <div className="flex flex-col items-center mt-10 animate-pulse cursor-pointer">
                    <div className="w-15 h-15 border-2 border-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <span className="mt-2 text-white text-sm tracking-wide">
                      Scroll Down
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutHero;
