import React from "react";
import invisalignHeroImg from "../../../assets/services/41.jpg"; 
const InvisalignHeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center px-6 md:px-10 overflow-x-hidden"
      style={{
        backgroundImage: `url(${invisalignHeroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="max-w-3xl p-6 md:p-10 text-center z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Invisalign at Chakra Dental
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 font-medium">
          World's best Clear Aligner — Now at Chakra Dental
        </p>
      </div>
    </section>
  );
};

export default InvisalignHeroSection;
