import React from "react";
import { FaTooth, FaSmileBeam, FaUserCheck, FaSearch, FaCogs, FaRupeeSign } from "react-icons/fa";

const features = [
  {
    icon: <FaTooth className="text-2xl text-white" />,
    text: "Certified transparent aligners provider",
  },
  {
    icon: <FaSearch className="text-2xl text-white" />,
    text: "High-tech digital 3D scanning",
  },
  {
    icon: <FaSmileBeam className="text-2xl text-white" />,
    text: "Customized smile mock-up",
  },
  {
    icon: <FaRupeeSign className="text-2xl text-white" />,
    text: "Transparent pricing and flexible plans",
  },
  {
    icon: <FaUserCheck className="text-2xl text-white" />,
    text: "Clinic with a impressive performance of successful Invisalign cases",
  },
  {
    icon: <FaCogs className="text-2xl text-white" />,
    text: "Personalized, patient-focused care from beginning to end",
  },
];

const WhyChooseChakraInvisalign = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Why Choose Chakra Dental for Invisalign?
          </h2>
          <p className="text-[16px] text-gray-700 leading-relaxed">
            Our experience with clear aligners, commitment to comfort, and commitment to precision ensure your Invisalign journey is smooth, effective, and satisfying.
          </p>
        </div>

        <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-6" data-aos="fade-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-[#650E45] text-white rounded-xl p-5 shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <div className="bg-black p-3 rounded-full shadow-md">
                {item.icon}
              </div>
              <p className="text-[15px] leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseChakraInvisalign;
