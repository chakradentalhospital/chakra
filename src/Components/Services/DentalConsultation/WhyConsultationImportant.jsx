import React from "react";
import consultBg from "../../../assets/services/14.jpg"; 
import { FaCheckCircle } from "react-icons/fa";

const importancePoints = [
  "Fix problems early (when they’re easier and cheaper to fix)",
  "Avoid conditions like gum disease and tooth loss",
  "Monitor active dental work (crowns, fillings, implants)",
  "Analyze orthodontic needs (specially for teens and young adults)",
  "Screen for major problems like oral cancer or bone loss",
];

const WhyConsultationImportant = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center overflow-x-hidden"
      style={{
        backgroundImage: `url(${consultBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div
        className="relative z-20 max-w-4xl bg-[#650E45]/80 backdrop-blur-2xl px-8 py-12 rounded-4xl shadow-2xl text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#ffffff] mb-6">
          Why Dental Consultations Are Important
        </h2>
        <p className="text-white mb-6 text-sm md:text-base max-w-2xl mx-auto">
          Omitting dental consultations or only visiting the dentist when there’s pain can lead to advanced oral issues that require expanded and expensive treatments. Regular consultations:
        </p>

        <div className="space-y-4 text-left max-w-xl mx-auto">
          {importancePoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 text-white text-sm">
              <span className="text-[#ffffff] mt-1">
                <FaCheckCircle size={16} />
              </span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyConsultationImportant;
