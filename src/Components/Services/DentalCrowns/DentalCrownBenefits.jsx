import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { MdOutlineNoFood } from "react-icons/md";
import { TbDental, TbCalendarCheck } from "react-icons/tb";

const benefits = [
  "Rejuvenate chewing and speaking function",
  "Prevent more harm to the tooth",
  "Long-lasting — 10 to 15 years or longer with good care",
  "Visually pleasing and realistic",
  "Boost smile trust",
  "Save root canal therapy teeth from cracks",
  "Improve overall oral function and strength",
  "Supports proper teeth alignment and bite",
];

const careTips = [
  {
    title: "Brush and floss once a day",
    icon: <GiToothbrush className="text-[#650E45] text-3xl" />,
  },
  {
    title: "Don't chew hard things such as ice or pens",
    icon: <MdOutlineNoFood className="text-[#650E45] text-3xl" />,
  },
  {
    title: "Use a gumguard when you grind your teeth",
    icon: <TbDental className="text-[#650E45] text-3xl" />,
  },
  {
    title: "Return for periodic checkups",
    icon: <TbCalendarCheck className="text-[#650E45] text-3xl" />,
  },
];

const DentalCrownBenefits = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white overflow-hidden">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mb-12"
      >
        Advantages of Dental Crowns
      </h2>

      <ul className="grid gap-4 md:grid-cols-2 text-gray-800 text-lg font-medium max-w-5xl mx-auto mb-20">
        {benefits.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <FaCheckCircle className="text-[#650E45] mt-1 min-w-[25px]" />
            {point}
          </li>
        ))}
      </ul>

      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mb-10"
      >
        Take Care of Your Crown
      </h2>

      <div className="flex flex-col gap-8 max-w-[700px] mx-auto">
        {careTips.map((tip, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 && "md:flex-row-reverse"
            } items-center gap-4 md:gap-8`}
          >
            <div className="flex items-center justify-center bg-[#FFF0F7] p-5 rounded-full shadow-lg hover:scale-105 transition-all">
              {tip.icon}
            </div>
            <p className="text-lg text-gray-700 font-semibold text-center md:text-left">
              {tip.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DentalCrownBenefits;
