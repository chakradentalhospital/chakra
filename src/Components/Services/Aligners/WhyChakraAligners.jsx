import React from "react";
import whyImg from "../../../assets/services/23.jpg"; // use your custom image
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  "Specialist orthodontist with years of aligner experience",
  "Treatment using popular, trusted brands like MSA and ILLUSION",
  "Accurate-driven 3D smile design and simulation",
  "Transparent pricing and EMI options",
  "Minimal medical appointments — ideal for busy individuals",
  "Personalized care and flexible appointments",
  "We offer options for light, reasonable, and complex cases and even provide to patients who have had braces before and experienced reversion.",
];

const WhyChakraAligners = () => {
  return (
    <section className="w-full overflow-x-hidden bg-gradient-to-br from-[#FFF7FB] to-white py-20 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
        <div
          className="w-full lg:w-1/2 bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] mb-6">
            Why Chakra Dental?
          </h2>

          <ul className="space-y-4">
            {reasons.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-[#650E45] mt-1 min-w-[25px]" />
                <span className="text-gray-700 text-[16px] leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative w-full lg:w-1/2 flex justify-center items-center"
          data-aos="fade-left"
        >
          <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-[#650E45] animated-blob z-0"></div>
          <img
            src={whyImg}
            alt="Why Chakra Dental"
            className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover rounded-full border-[8px] border-white z-10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChakraAligners;
