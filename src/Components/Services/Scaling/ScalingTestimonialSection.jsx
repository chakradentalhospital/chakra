import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const scalingTestimonials = [
  {
    text: `"I used to bleed every time I brushed. After just one cleaning at Chakra Dental, the bleeding stopped, and my mouth felt so fresh."`,
    name: "Divya S.",
  },
  {
    text: `"I hadn’t visited the dentist in years. The staff was kind, and the cleaning was painless. Now I go every 6 months, like clockwork."`,
    name: "Ravi K.",
  },
];

const ScalingTestimonialSection = () => {
  return (
    <section className="relative px-5 md:px-10  pb-36 bg-[#fef6f9] text-center overflow-x-hidden">
      {/* Bottom Background */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[#650E45] z-0" />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <p className="text-[#650E45] text-sm font-semibold uppercase">Patient Experiences</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-12 text-[#2d2d2d]">
          Scaling Stories at Chakra Dental
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {scalingTestimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-up"
                className="max-w-[800px] mx-auto bg-white px-6 py-10 md:p-14 rounded-[40px] shadow-lg text-left relative"
              >
                <div className="absolute top-0 left-6 w-[60px] h-[60px] bg-white border border-[#650E45] rounded-full flex items-center justify-center shadow">
                  <FaQuoteLeft className="text-[#650E45] text-xl" />
                </div>

                <p className="text-gray-700 text-[17px] leading-relaxed mb-6 mt-6">
                  {item.text}
                </p>

                <div>
                  <h4 className="font-bold text-[#650E45]">{item.name}</h4>
                  <div className="flex gap-1 text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ScalingTestimonialSection;
