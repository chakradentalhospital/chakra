import React from "react";
import scalingImg from "../../../assets/services/52.jpg"; // update path if needed

const ScalingHeroSection = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center px-6 md:px-10 overflow-hidden"
      style={{
        backgroundImage: `url(${scalingImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="max-w-3xl p-6 md:p-10 text-center z-10 space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Scaling at Chakra Dental
        </h1>
        <p className="text-white text-lg md:text-2xl font-medium">
          Gentle cleaning. Healthier gums. Brighter smiles.
        </p>
      </div>
    </section>
  );
};

export default ScalingHeroSection;
