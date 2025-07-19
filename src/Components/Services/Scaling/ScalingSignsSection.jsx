import React from "react";
import {
  FaTooth,
  FaTemperatureHigh,
  FaTeeth,
  FaSmileBeam,
  FaGrinBeamSweat,
  FaTint,
  FaExclamationTriangle,
  FaRadiation,
} from "react-icons/fa";

const signs = [
  { icon: <FaTint />, text: "Bleeding gums while brushing or eating" },
  { icon: <FaSmileBeam />, text: "Red, swollen, or tender gums" },
  { icon: <FaRadiation />, text: "Persistent bad breath" },
  { icon: <FaTooth />, text: "Yellow or brown buildup on teeth" },
  { icon: <FaGrinBeamSweat />, text: "Gum recession" },
  { icon: <FaTeeth />, text: "Loose teeth or shifting bite" },
  { icon: <FaExclamationTriangle />, text: "A fuzzy or rough feeling on your teeth" },
  { icon: <FaTemperatureHigh />, text: "Sensitivity to hot or cold" },
];

const ScalingSignsSection = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] text-center" data-aos="fade-up">
          Signs You May Need Scaling
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {signs.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-5 bg-[#fdf4f8] rounded-lg overflow-hidden shadow-sm border-l-4 border-[#650E45] transition-all"
            >
              {/* Animated BG fill */}
              <div className="absolute left-0 top-0 w-0 group-hover:w-full h-full bg-[#650E45] z-0 transition-all duration-500 ease-in-out"></div>

              <div className="relative z-10 flex items-start gap-4 transition-colors group-hover:text-white">
                <div className="text-[#650E45] group-hover:text-white text-xl">
                  {React.cloneElement(item.icon, { className: "text-xl" })}
                </div>
                <p className="text-gray-700 group-hover:text-white">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-lg text-[#650E45] font-medium max-w-3xl mx-auto pt-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          If you’re experiencing any of these manifestation, don’t wait until it worsens. Book a professional cleaning session at Chakra Dental and let your mouth breathe again.
        </p>
      </div>
    </section>
  );
};

export default ScalingSignsSection;
