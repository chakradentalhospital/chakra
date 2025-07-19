import React from "react";
import alignerImg from "../../../assets/services/30.jpg";

const AlignersIntro = () => {
  return (
    <section className="w-full overflow-hidden bg-white px-6 md:px-10 py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div
          className="w-full lg:w-1/2 space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#650E45] leading-tight">
            Invisible Braces. Visible Results.
          </h2>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            If you've always wanted a a well-aligned smile but couldn't imagine wearing metal braces, then invisible braces might be your perfect solution. At Chakra Dental, we offer advanced, Unnoticeable orthodontic treatments using invisible aligners that deliver outstanding results — smoothly and without the world knowing you're being treated.
          </p>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            With trusted brands like MSA and ILLUSION, we bring the future of dental orthopaedics, to you — wire-free, pain-free, and relaxed.
          </p>
        </div>

        <div
          className="w-full lg:w-1/2 relative"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={alignerImg}
            alt="Invisible Aligners"
            className="w-full rounded-2xl object-cover shadow-xl lg:translate-x-6"
          />
        </div>
      </div>
    </section>
  );
};

export default AlignersIntro;
