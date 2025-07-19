import React from "react";
import kidDentalImg from "../../../assets/services/s1.jpg";

const KidsDentistryHero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center px-6 md:px-10 overflow-x-hidden"
      style={{
        backgroundImage: `url(${kidDentalImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="max-w-3xl p-6 md:p-10 text-center z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Kids Dentistry at Chakra Dental
        </h1>
      </div>
    </section>
  );
};

export default KidsDentistryHero;
