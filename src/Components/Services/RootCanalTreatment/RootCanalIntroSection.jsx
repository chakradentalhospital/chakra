import React from "react";
import rootCanalImg from "../../../assets/services/59.jpg"; 

const RootCanalIntroSection = () => {
  return (
    <section className="w-full bg-[#fdf4f8] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4a0b32]">
            Retain Your Tooth. Avoid the Pain.
          </h2>
          <p className="text-[#444] text-lg leading-relaxed">
            A severely infected or decayed tooth does not need to be removed. At Chakra Dental, we try to save your natural teeth whenever we can. For this purpose, we provide advanced, painless Root Canal Treatment (RCT) — a safe way to end infection, end pain, and regain your smile.
          </p>
          <p className="text-[#444] text-lg leading-relaxed">
            Under the guidance of our skilled Endodontist, each procedure is done with high-precision equipment, 3D obturation technology, and rigid Rubber Dam sterilization procedures for safety, comfort, and longevity.
          </p>
        </div>

        <div>
          <img
            src={rootCanalImg}
            alt="Root Canal Treatment"
            className="rounded-xl w-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default RootCanalIntroSection;
