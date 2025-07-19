import React from "react";
import { FaTooth, FaCompressArrowsAlt, FaSmileBeam } from "react-icons/fa";
import invisImg1 from "../../../assets/services/32.jpg";
import invisImg2 from "../../../assets/services/43.jpg";
import invisImg3 from "../../../assets/services/6.jpg";

const invisContent = [
  {
    title: "What Is Invisalign?",
    desc:
      "Invisalign is a comprehensive orthodontic system that uses 3D scanning and CAD/CAM technology to create aligners that tightly over your teeth. These aligners are changed around every 1–2 weeks, steadily guiding your teeth into genuine\nalignment.",
    icon: <FaTooth className="text-white text-xl" />,
    img: invisImg1,
    blob: true,
  },
  {
    title: "Exclusive brightTrack Material",
    desc:
      "What sets invisible braces  apart is its exclusive brightTrack material, which make sure greater comfort, improved control of tooth gesture, and faster, more expected results compared to common aligners.",
    icon: <FaCompressArrowsAlt className="text-white text-xl" />,
    img: invisImg2,
    blob: false,
  },
  {
    title: "Dental Issues Invisalign Can Fix",
    desc:
      `Iinvisible braces aligners can correct a variety of alignment issues, including:\n• packed teeth\n• Gaps and space constraints\n• buck teeth\n• Underbite\n• Crossbite\n• Open bite\n• Mild to moderate misalignments\n• setback after braces\nAt Chakra Dental, our certified Invisalign provider will value your dental condition and decide if Invisalign is suitable for your particular needs.`,
    icon: <FaSmileBeam className="text-white text-xl" />,
    img: invisImg3,
    blob: true,
  },
];

const WhatIsInvisalign = () => {
  return (
    <section className="w-full bg-[#FFFAFD] py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-20">
        {invisContent.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-10`}
          >
            {/* Image with blob */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              {item.blob && (
                <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-[#650E45] animated-blob z-0"></div>
              )}
              <img
                src={item.img}
                alt={item.title}
                className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover rounded-full border-[8px] border-white shadow-xl z-10"
              />
            </div>

            {/* Content */}
            <div
              className="w-full lg:w-1/2 space-y-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 rounded-full bg-[#650E45] flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#650E45]">{item.title}</h3>
              <p className="text-[16px] text-gray-700 whitespace-pre-line">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIsInvisalign;
