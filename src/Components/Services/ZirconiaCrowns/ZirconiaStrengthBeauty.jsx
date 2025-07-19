import React from "react";
import img1 from "../../../assets/services/64.jpg";

const ZirconiaStrengthBeauty = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white flex flex-col md:flex-row items-center gap-10 overflow-hidden">
      <div className="md:w-1/2 space-y-6" data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45]">
          Beauty Meets Strength
        </h2>
        <p className="text-gray-700 text-lg">
          In the case of contemporary dental restorations, Zirconia crowns have
          raised the bar in terms of both strength and beauty. At Chakra Dental,
          we're happy to provide superior-quality Zirconia crowns as part of our
          cutting-edge restorative and cosmetic dentistry treatments — for
          patients who want long-term security and a natural-looking smile.
        </p>
        <p className="text-gray-700 text-lg">
          Whether you require restoration of a root canal-treated tooth,
          reinforcement of a cracked molar, or enhancement of your front-tooth
          aesthetics, Zirconia crowns are an elite option that offers the best
          of science and art.
        </p>
      </div>

      <div
        className="md:w-1/2 w-full"
        data-aos="fade-left"
      >
        <img
          src={img1}
          alt="Zirconia Crown"
          className="w-full h-full object-cover rounded-xl shadow-xl max-h-[500px] md:max-h-[100%]"
        />
      </div>
    </section>
  );
};

export default ZirconiaStrengthBeauty;
