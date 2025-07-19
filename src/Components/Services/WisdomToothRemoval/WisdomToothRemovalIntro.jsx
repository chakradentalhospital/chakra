import React from "react";
import img1 from "../../../assets/services/3.jpg"; // top-left image
import img2 from "../../../assets/services/7.jpg"; // bottom-right image

const WisdomToothRemovalIntro = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Left - Images */}
        <div
          className="relative md:w-1/2 w-full h-[220px]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Wisdom Tooth Issue"
            className="w-[55%] rounded-xl shadow-lg absolute top-0 left-0 z-20"
          />
          <img
            src={img2}
            alt="Tooth Extraction"
            className="w-[55%] rounded-xl shadow-lg absolute bottom-0 right-0 z-10"
          />
        </div>

        {/* Right - Text */}
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            When Wisdom is a Burden — We Help
          </h2>
          <p className="text-gray-700 text-lg">
            Wisdom teeth are the last set of back teeth that typically explode between the ages of 17 and 25. While they’re meant to deliver a functional purpose, in most cases, they become more of a strain than a benefit.
          </p>
          <p className="text-gray-600">
            At Chakra Dental, we particularise in safe, infertile, and painless wisdom tooth extractions, performed by our highly experienced maxillofacial surgeon. Whether your wisdom tooth is impacted, partially erupted, or causing pain and swelling, we’re here to offer precise surgical care with zero stress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WisdomToothRemovalIntro;
