import React from "react";
import { FaSmileBeam, FaTooth, FaPhoneAlt } from "react-icons/fa";
import redefiningImg from "../../../assets/services/5.jpg";

const RedefineDentistrySection = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white py-20 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div
          className="w-full lg:w-1/2 bg-[#FFF5FA] rounded-3xl shadow-2xl p-8 md:p-12 space-y-6"
          data-aos="fade-right"
        >
          <div className="flex items-start gap-4">
            <FaSmileBeam className="text-[#650E45] text-3xl shrink-0" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
              Let’s Redefine Dentistry Together
            </h2>
          </div>

          <div className="flex items-start gap-4">
            <FaTooth className="text-[#650E45] text-xl shrink-0 mt-1" />
            <p className="text-gray-700 text-[16px] leading-relaxed">
              You don’t have to suffer in silence or fear the chair. Let us show you how dental care can be gentle, relaxing, and even enjoyable. At Chakra Dental, we bring together technology, technique, and compassion to help you achieve your oral health goals — pain-free.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-[#650E45] text-xl shrink-0 mt-1" />
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Call us today or book your consultation online. Your journey to a fearless, painless smile starts here.
            </p>
          </div>
        </div>

        {/* Right Side - Animated Blob Image */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center items-center"
          data-aos="fade-left"
        >
          <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-[#650E45] animated-blob z-0"></div>
          <img
            src={redefiningImg}
            alt="Redefine Dentistry"
            className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover rounded-full border-[8px] border-white z-10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default RedefineDentistrySection;
