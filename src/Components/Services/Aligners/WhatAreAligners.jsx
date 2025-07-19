import React from "react";
import alignerVisual from "../../../assets/services/31.jpg";

const WhatAreAligners = () => {
  return (
    <section className="w-full overflow-hidden bg-[#FFF8FC] py-20 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* <div
          className="lg:w-[8px] w-full h-20 lg:h-auto bg-[#650E45] rounded-full lg:rounded-none"
          data-aos="fade-right"
        ></div> */}

        <div
          className="w-full lg:w-[55%] space-y-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            What Are Dental Aligners?
          </h2>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            Dental aligners are a modern option to traditional braces. They are clear, separable trays made of medical-grade thermosoftening plastics. These trays are personalized to fit comfortably over your teeth and adjust softly them into their optimal position over time.
          </p>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            Each set of aligners is threadbare for about 10–14 days, and then you move on to the next set — step-by-step development your General Arrangement, wires, or visible metal parts.
          </p>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            They are incredibly popular among teenagers, polish, brides-to-be, and anyone who wants a beautiful smile without the “braced” look.
          </p>
        </div>

        <div
          className="w-full lg:w-[35%]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={alignerVisual}
            alt="Aligner Explanation"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatAreAligners;
