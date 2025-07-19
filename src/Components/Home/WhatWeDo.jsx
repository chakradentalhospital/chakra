import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTooth } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import img1 from "../../assets/services/15.jpg";
import img2 from "../../assets/services/2.jpg";
import img3 from "../../assets/services/3.jpg";
import img4 from "../../assets/Home/12.jpg";
import img5 from "../../assets/Home/10.jpg";
import img6 from "../../assets/services/6.jpg";
import img7 from "../../assets/services/7.jpg";
import img8 from "../../assets/Home/13.jpg";
import img9 from "../../assets/Home/15.jpg";
import img10 from "../../assets/services/10.jpg";
import img11 from "../../assets/services/11.jpg";
import img12 from "../../assets/Home/14.jpg";
import img13 from "../../assets/Home/9.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13,
];

const services = [
  {
    name: "Kids Dentistry",
    desc: "Gentle and fun dental care tailored to children’s unique needs.",
  },
  {
    name: "Dental Consultations",
    desc: "Clear and professional assessments for confident oral decisions.",
  },
  {
    name: "Pain Free Treatment",
    desc: "Modern, gentle techniques that ensure a comfortable experience.",
  },
  {
    name: "Aligners",
    desc: "Discreet aligner solutions to straighten your smile effortlessly.",
  },
  {
    name: "Invisalign",
    desc: "Virtually invisible orthodontic treatment with proven results.",
  },
  {
    name: "Wisdom Tooth Removal",
    desc: "Safe and efficient removal of problematic wisdom teeth.",
  },
  {
    name: "Scaling",
    desc: "Deep cleaning to keep your gums and teeth healthy and fresh.",
  },
  {
    name: "Tooth Whitening",
    desc: "Brighten your smile with safe, long-lasting whitening solutions.",
  },
  {
    name: "Dental Implants",
    desc: "Permanent, natural-looking replacements for missing teeth.",
  },
  {
    name: "Root Canal Treatment",
    desc: "Save infected teeth with expert, pain-free root canal therapy.",
  },
  {
    name: "Full Mouth Rehabilitation",
    desc: "Comprehensive smile makeover for function and confidence.",
  },
  {
    name: "Dental Crowns",
    desc: "Strong, beautiful crowns that protect and restore teeth.",
  },
  {
    name: "Zirconia Crowns",
    desc: "Premium all-ceramic crowns with durability and aesthetics.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] text-center mb-2">
        What We Do
      </h2>
      <p className="text-center text-gray-600 text-lg font-medium mb-10">
        Our Services
      </p>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {services.map((service, i) => (
          <SwiperSlide key={service.name}>
            <div
              className="relative group rounded-lg overflow-hidden shadow-lg h-[400px]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="800"
            >
              <img
                src={images[i]}
                alt={service.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              <div className="absolute bottom-[110px] left-1/2 transform -translate-x-1/2 z-20 transition-all duration-500 group-hover:-translate-y-10">
                <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center text-[#650E45] text-3xl shadow-lg">
                  <FaTooth />
                </div>
              </div>

              <h3 className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 text-white font-semibold z-20 transition-all duration-500 group-hover:-translate-y-12 whitespace-nowrap">
                {service.name}
              </h3>

              <div className="absolute bottom-0 left-0 right-0 px-6 text-center text-white translate-y-full group-hover:translate-y-[-50px] transition-transform duration-500 z-10 text-sm">
                <p>{service.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatWeDo;
