import React from "react";
import img1 from "../../../assets/services/33.jpg"; 
import img2 from "../../../assets/services/47.jpg"; 

const WisdomToothExtractionTypes = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden space-y-20">
      {/* Simple Extraction */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Simple Extraction"
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        {/* Right - Text */}
        <div
          className="w-full md:w-1/2 space-y-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#650E45]">
            1. Simple Extraction
          </h3>
          <p className="text-gray-700 text-lg">
            If your wisdom tooth has fully erupted and is accessible, it can be removed like a regular tooth using forceps under local anesthesia.
          </p>
          <p className="text-gray-600">
            This is a quick, painless procedure with minimal downtime.
          </p>
        </div>
      </div>

      {/* Surgical Extraction */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Right - Image */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={img2}
            alt="Surgical Extraction"
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        {/* Left - Text */}
        <div
          className="w-full md:w-1/2 space-y-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#650E45]">
            2. Surgical Extraction
          </h3>
          <p className="text-gray-700 text-lg">
            If your wisdom tooth is impacted (partially or fully under the gum), the surgeon may need to make a small incision, remove surrounding bone, and divide the tooth into sections for safe removal.
          </p>
          <p className="text-gray-600">
            This is performed under local anesthesia, and conscious sedation or general anesthesia can be used for high-anxiety cases or multiple extractions.
          </p>
          <p className="text-gray-600">
            We also offer hospital-based surgical care for patients needing advanced sedation or general anesthesia, in collaboration with a multi-specialty facility and anesthetic team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WisdomToothExtractionTypes;
