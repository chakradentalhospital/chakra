import React from "react";
import {
  FaXRay,
  FaTooth,
  FaBrain,
  FaBone,
  FaMapMarkedAlt,
  FaSmileBeam
} from "react-icons/fa";

const WisdomToothEvaluation = () => {
  return (
    <section className="w-full bg-[#fefefe] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div
        className="max-w-[1200px] mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] text-center leading-tight">
          Wisdom Tooth Evaluation at Chakra Dental
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
          At Chakra Dental, we begin with a conscientious clinical examination
          and digital X-rays or CBCT scans to determine:
        </p>

        {/* Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[#f9f9f9] shadow-sm">
            <FaMapMarkedAlt className="text-2xl text-[#650E45] mt-1" />
            <p className="text-gray-700">Position of the tooth</p>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[#f9f9f9] shadow-sm">
            <FaTooth className="text-2xl text-[#650E45] mt-1" />
            <p className="text-gray-700">Root length and orientation</p>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[#f9f9f9] shadow-sm">
            <FaBrain className="text-2xl text-[#650E45] mt-1" />
            <p className="text-gray-700">Proximity to nerves or sinus</p>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[#f9f9f9] shadow-sm">
            <FaXRay className="text-2xl text-[#650E45] mt-1" />
            <p className="text-gray-700">Degree of impaction</p>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[#f9f9f9] shadow-sm">
            <FaBone className="text-2xl text-[#650E45] mt-1" />
            <p className="text-gray-700">Surrounding bone and gum condition</p>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl bg-[#f9f9f9] shadow-sm">
            <FaSmileBeam className="text-2xl text-[#650E45] mt-1" />
            <p className="text-gray-700">
              Personalized post-extraction care guidance
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-600 text-base text-center max-w-3xl mx-auto">
          Based on your report, our Oral and Maxillofacial Surgeon will
          determine whether simple or surgical extrication is required. We’ll
          walk you through the procedure, answer your concerns, and create a
          tailored plan for safe and stress-free removal.
        </p>
      </div>
    </section>
  );
};

export default WisdomToothEvaluation;
