import React from "react";
import img1 from "../../../assets/services/49.jpg"; // update with your actual images
import img2 from "../../../assets/services/46.jpg";

const WisdomAftercareSection = () => {
  return (
    <section className="w-full bg-[#fff7fa] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
        {/* Left - Text Content */}
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            Aftercare & Recovery
          </h2>
          <p className="text-gray-700 text-lg">
            Following your extraction, we provide detailed post-operative instructions for a smooth recovery:
          </p>
          <ul className="list-disc list-inside text-base text-gray-600 space-y-2 pt-2">
            <li>Bite on gauze to control bleeding</li>
            <li>Use prescribed medications to reduce swelling and prevent infection</li>
            <li>Apply cold compresses for the first 24 hours</li>
            <li>Avoid hot, spicy, or hard foods for a few days</li>
            <li>Rinse gently with warm salt water after 24 hours</li>
            <li>Avoid smoking, alcohol, and strenuous activity for a few days</li>
            <li>Keep the area clean but avoid aggressive brushing at the site</li>
          </ul>
          <p className="text-[#650E45] font-medium pt-4">
            Most patients recover comfortably within 3–7 days, with complete healing in 2–3 weeks.
          </p>
        </div>

        {/* Right - Images */}
        <div
          className="md:w-1/2 relative h-[280px] w-full"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Aftercare Step 1"
            className="absolute top-0 left-0 w-[60%] rounded-xl shadow-lg z-20"
          />
          <img
            src={img2}
            alt="Aftercare Step 2"
            className="absolute bottom-0 right-0 w-[60%] rounded-xl shadow-md z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default WisdomAftercareSection;
