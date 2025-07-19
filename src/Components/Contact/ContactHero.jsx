import React from "react";
import bgImg from "../../assets/Home/slide-2.jpg"; 

const ContactHero = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src={bgImg}
        alt="Contact Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Contact Us</h1>
      </div>
    </section>
  );
};

export default ContactHero;
