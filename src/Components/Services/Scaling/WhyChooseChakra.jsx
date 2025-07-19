import React from "react";
import {
  FaUserMd,
  FaTooth,
  FaShieldAlt,
  FaHandsHelping,
  FaMoneyCheckAlt,
  FaBookMedical,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserMd />,
    text: "Experienced dentists and gum specialists",
  },
  {
    icon: <FaTooth />,
    text: "Ultrasonic, pain-free technology",
  },
  {
    icon: <FaShieldAlt />,
    text: "Strict sterilization protocols",
  },
  {
    icon: <FaHandsHelping />,
    text: "Gentle care with patient comfort in mind",
  },
  {
    icon: <FaMoneyCheckAlt />,
    text: "Transparent pricing and treatment advice",
  },
  {
    icon: <FaBookMedical />,
    text: "Follow-up care and oral hygiene education",
  },
];

const WhyChooseChakra = () => {
  return (
    <section className="w-full bg-[#fef6fa] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto text-center space-y-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#650E45]"
          data-aos="fade-up"
        >
          Why Choose Chakra Dental?
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-lg  group relative transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 bg-[#650E45] text-white rounded-full flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:rotate-[10deg]">
                {item.icon}
              </div>
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-[#650E45] font-medium text-base md:text-lg max-w-2xl mx-auto pt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Whether you need a routine cleaning or advanced deep curettage for gum pockets, we have the skills and tools to restore your gum health.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseChakra;
