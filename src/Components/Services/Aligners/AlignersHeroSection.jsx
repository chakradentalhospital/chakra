import React from "react";
import alignerHeroImg from "../../../assets/services/29.jpg";

const AlignersHeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center px-6 md:px-10 overflow-hidden"
      style={{
        backgroundImage: `url(${alignerHeroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="max-w-3xl p-6 md:p-10 text-center z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Aligners at Chakra Dental
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 font-medium">
          Invisible Braces. Visible Results.
        </p>
      </div>
    </section>
  );
};

export default AlignersHeroSection;
