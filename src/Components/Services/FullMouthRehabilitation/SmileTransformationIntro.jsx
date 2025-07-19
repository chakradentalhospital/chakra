import React from "react";
import smileImg from "../../../assets/services/54.jpg"; 

const SmileTransformationIntro = () => {
  return (
    <section className="w-full bg-[#fffafc] py-20 px-5 md:px-10 lg:px-[64px]">
      <div
        className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a0b32] hover:text-[#730f54] transition-all duration-300">
            Complete Smile Transformation
          </h2>
          <p className="text-[#444] text-[17px] leading-[1.8]">
            If you're living with several misplaced, run-down, or cracked tooth, you don't have to endure, self-doubt, or eating and speaking problem. At Chakra Dental, our Full Mouth transformation program is designed to replace your dental health, function, and smile aesthetics entirely — all through an extensive, individualized treatment plan.
          </p>
          <p className="text-[#444] text-[17px] leading-[1.8]">
            This life-altering process is a mix of restorative and aesthetic dentistry treatments, precisely designed to fit your face, bite, lifestyle, and future aspirations. Regardless of whether the damage is caused by decay, trauma, aging, or neglect — we restore your smile to vitality, functionally and aesthetically.
          </p>
        </div>

        <div className="w-full" data-aos="zoom-in" data-aos-delay="200">
          <img
            src={smileImg}
            alt="Smile Transformation"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SmileTransformationIntro;
