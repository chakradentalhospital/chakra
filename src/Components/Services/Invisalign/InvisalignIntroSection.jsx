import React from "react";
import invisalignImg from "../../../assets/services/40.jpg"; // update path if needed

const InvisalignIntroSection = () => {
  return (
    <section className="w-full bg-[#FFFAFD] py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left - Content */}
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-snug">
            A Clearer, More Confident You — with Invisalign
          </h2>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            If you’ve been imagining of a perfectly aligned smile without the incommode and appearance of simply braces, Removable braces offers the solution you’ve been waiting for. At Chakra Dental, we are proud to offer Invisalign — the world’s most advanced clear aligner system, trusted by over 15 million patients worldwide.
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            Dissimilar traditional braces, Invisalign uses a chain of custom-made, practically invisible aligners to gently move your teeth into the target position — no brackets, no wires, and uninterrupted to your lifestyle.
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            Whether you're a teenager examine teeth uncurling options or an adult looking to correct your smile quietly, invisible braces is your smooth path to confidence.
          </p>
        </div>

        {/* Right - Image */}
        <div
          className="md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={invisalignImg}
            alt="Invisalign Intro"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InvisalignIntroSection;
