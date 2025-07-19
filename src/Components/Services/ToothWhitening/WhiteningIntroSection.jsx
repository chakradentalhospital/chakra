import React from "react";
import whiteningImg from "../../../assets/services/56.jpg";

const WhiteningIntroSection = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            Achieve a Radiant Smile in One Appointment
          </h2>
          <p className="text-gray-700 text-lg">
            A gleaming and healthy smile is vital to having high self-esteem and improved confidence. Unfortunately, teeth lose their sheen with age, dietary habits, and lifestyle choices. For this reason, Chakra Dental offers professional tooth whitening services that are safe and effective, designed to change your smile dramatically in just one appointment.
          </p>
          <p className="text-gray-600">
            Whitening treatments that are clinically tested and approved by experts can help you safely bright back the smile you thought you lost because of yellow or stained teeth. Rediscover the confidence you thought you lost.
          </p>
        </div>

        {/* Image */}
        <div
          className="relative md:w-1/2 w-full h-[300px] md:h-[360px] rounded-xl overflow-hidden shadow-lg"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={whiteningImg}
            alt="Tooth Whitening"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhiteningIntroSection;
