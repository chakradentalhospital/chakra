import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import t1 from "../../assets/Home/testi1.png";
import t2 from "../../assets/Home/testi2.png";
import t3 from "../../assets/Home/testi3.png";

const testimonials = [
  {
    img: t1,
    text: "Chakra hospital Dentist did wonderful job in teeth set fixing on my aged mother lower jaw. She got full satisfaction of the new set of teeth. They take more care on her dental problems. We are happy to say thank you Doctor in Chakra dental hospital, Ondipudur.",
    name: "Lawrence Thambusamy",
    role: "Customer",
  },
  {
    img: t2,
    text: "I had a smile makeover at Chakra Dental Hospital, R.S. Puram. The results are beyond my expectations! The doctors are very skilled, and the entire process was comfortable. Highly recommend!",
    name: "kalavathy bioinfo",
    role: "Customer",
  },
  {
    img: t3,
    text: "We have received a wonderful experience at Chakra Dental Hospital.Last week I had a root canel treatment. The result was stunning.Overall the experience is Very Good.Highly recommended.",
    name: "dhivya dhiya",
    role: "Customer",
  },
];

const TestimonialSection = () => {
  return (
    <div className="relative px-5 md:px-10 pt-20 pb-40 bg-[#f9f9f9] text-center overflow-x-hidden">
      {/* Bottom Background */}
      <div className="absolute bottom-0 left-0 w-full h-[350px] bg-[#650E45] z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <p className="text-[#650E45] text-sm font-semibold uppercase">Client Says</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-12 text-[#2d2d2d]">
          What Our Customers Say About Us
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                className="relative z-10 max-w-[900px] w-full bg-white mx-auto flex flex-col md:flex-row items-center p-6 rounded-[30px] md:rounded-[50px] gap-6 shadow-lg overflow-hidden h-auto md:h-[400px]"
              >
                <div className="w-full md:w-[40%] h-[250px] md:h-full flex items-center justify-center">
                  <div className="w-[200px] h-[200px] md:w-full md:h-full flex items-center justify-center">
                    <img
                      src={item.img}
                      alt="Client"
                      className="w-full h-full rounded-[30px] md:rounded-[50px] object-cover border-[2px] border-dotted border-[#650E45] p-[10px]"
                    />
                  </div>
                </div>

                <div className="w-full md:w-[60%] text-left flex flex-col justify-center gap-y-2 h-full">
                  <div className="mb-3">
                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full flex items-center justify-center shadow border border-[#650E45]">
                      <FaQuoteLeft className="text-xl md:text-2xl text-[#650E45]" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                    {item.text}
                  </p>
                  <h4 className="font-bold text-[#650E45]">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
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
    </div>
  );
};

export default TestimonialSection;
