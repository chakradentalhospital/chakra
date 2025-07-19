import React from "react";
import consultHero from "../../../assets/services/6.jpg"; 

const DentalConsultationHero = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center overflow-x-hidden"
      style={{ backgroundImage: `url(${consultHero})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 px-6 md:px-10 text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Dental Consultations at Chakra Dental
        </h1>
        <p className="text-lg text-white mt-4 font-medium max-w-2xl mx-auto">
          Your First Step to a Healthy, Confident Smile
        </p>
      </div>
    </section>
  );
};

export default DentalConsultationHero;
