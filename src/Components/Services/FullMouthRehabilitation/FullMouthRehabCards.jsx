import React from "react";
import { FaTooth, FaTeethOpen, FaSmile, FaXRay } from "react-icons/fa";
import { GiToothbrush, GiTooth } from "react-icons/gi";
import { TbDental } from "react-icons/tb";
import {  MdOutlineCleaningServices } from "react-icons/md";
import img from "../../../assets/services/16.jpg"; // change image path

const cardItems = [
  {
    icon: <FaTooth size={30} />,
    title: "Tooth Caps",
    desc: "Repair worn-out teeth with durable dental caps.",
  },
  {
    icon: <FaTeethOpen size={30} />,
    title: "Dental Bridges",
    desc: "Fill gaps caused by missing teeth for seamless function.",
  },
  {
    icon: <FaXRay size={30} />,
    title: "Dental Implants",
    desc: "Permanent solutions for adult teeth replacement.",
  },
  {
    icon: <GiToothbrush size={30} />,
    title: "Root Canal",
    desc: "Treat infected teeth and preserve your natural tooth.",
  },
  {
    icon: <GiTooth size={30} />,
    title: "Gum Treatment",
    desc: "Restore gum health for long-term tooth support.",
  },
  {
    icon: <TbDental size={30} />,
    title: "Orthodontics",
    desc: "Fix bite alignment with braces or aligners.",
  },
  {
    icon: <FaSmile size={30} />,
    title: "Smile Design",
    desc: "Enhance smile aesthetics with precision planning.",
  },
  {
    icon: <MdOutlineCleaningServices size={30} />,
    title: "Smile Mask",
    desc: "Cosmetic enhancements to elevate facial harmony.",
  },
];

const FullMouthRehabCards = () => {
  return (
    <section className="w-full bg-[#fffafc] py-20 px-5 md:px-10 lg:px-[64px]">
      {/* Intro */}
      <div className="max-w-[1200px] mx-auto text-center mb-14" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4a0b32]">
          What Is Full Mouth Rehabilitation?
        </h2>
        <p className="mt-4 text-[#444] text-lg max-w-2xl mx-auto">
          Full Mouth Rehabilitation blends restorative dentistry with cosmetic precision to restore all or most of your teeth in both jaws. It’s personalized, multi-specialist, and life-transforming.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cardItems.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="text-[#650E45] mb-4 group-hover:scale-95 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#4a0b32] mb-2">
              {item.title}
            </h3>
            <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* BG Image Section */}
      <div
        className="mt-20 h-[300px] md:h-[400px] w-full rounded-xl bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img})` }}
        data-aos="zoom-in"
      >
        <div className="absolute inset-0 bg-[#000]/40 flex items-center justify-center px-6 text-white text-center">
          <p className="text-xl md:text-2xl font-medium max-w-3xl leading-relaxed">
            Our Prosthodontists, Surgeons, Endodontists, Periodontists, and Orthodontists work together to restore your smile — functionally and aesthetically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FullMouthRehabCards;
