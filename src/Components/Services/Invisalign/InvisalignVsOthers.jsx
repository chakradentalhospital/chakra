import React from "react";
import img1 from "../../../assets/services/32.jpg";
import img2 from "../../../assets/services/37.jpg";

const InvisalignVsOthers = () => {
  return (
    <section className="w-full bg-[#FFF8FC] py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Invisalign vs. Other Aligners
          </h2>
          <p className="text-[16px] text-gray-700 leading-relaxed">
            While there are many clear aligner brands, Invisalign is the industry gold quality because of:
          </p>
          <ul className="list-disc list-inside text-[15px] text-gray-700 space-y-1">
            <li>20+ years of research and transformation</li>
            <li>Trademarked SmartTrack material</li>
            <li>Anticipated tooth movements with ClinCheck</li>
            <li>Well-fitting, comfort, and longevity</li>
            <li>Results supported by millions of successful cases worldwide</li>
          </ul>
          <p className="text-[16px] text-gray-700 leading-relaxed">
            At Chakra Dental, we also offer option like MSA and Illusion, but Invisalign remnants the premium option for patients look for the most purified experience and highest success rate.
          </p>
        </div>

        {/* Right - 2 Images with Headings */}
        <div className="grid grid-cols-2 gap-6 text-center" data-aos="fade-left">
          <div>
            <img
              src={img1}
              alt="Invisalign"
              className="rounded-3xl w-full h-[200px] object-cover shadow-lg hover:scale-105 transition duration-300"
            />
            <h4 className="mt-3 text-base font-semibold text-[#650E45]">Invisalign</h4>
          </div>
          <div>
            <img
              src={img2}
              alt="Other Aligners"
              className="rounded-3xl w-full h-[200px] object-cover shadow-lg hover:scale-105 transition duration-300"
            />
            <h4 className="mt-3 text-base font-semibold text-[#650E45]">Other Aligners</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvisalignVsOthers;
    