import React from "react";
import { FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import bgImg from "../../../assets/services/3.jpg";

const ConsultationCTA = () => {
  return (
    <section className="w-full px-6 py-10 overflow-x-hidden">
      <div
        className="max-w-[1100px] h-[350px] mx-auto bg-cover bg-center rounded-2xl shadow-xl relative overflow-hidden flex items-center justify-center px-6 md:px-12 text-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-2xl z-10"></div>

        <div
          className="relative z-20 flex flex-col items-center justify-center gap-4 text-white"
          data-aos="fade-up"
        >
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] font-extrabold">
            <FaPhoneAlt className="inline mr-2" />
            Call us today or <FaMobileAlt className="inline ml-2" />
           book your consultation online
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] max-w-[800px] leading-relaxed font-medium">
            let us help you achieve the smile you warrant with clarity, care, and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
