import React from "react";
import img1 from "../../../assets/services/53.jpg"; // use only one image now

const ScalingIntroSection = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-14">
        {/* Left - Single Image */}
        <div
          className="md:w-1/2 w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Scaling"
            className="rounded-xl shadow-xl w-full h-auto"
          />
        </div>

        {/* Right - Text */}
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            Deep Clean. Fresh Breath. Healthy Gums.
          </h2>
          <p className="text-gray-700 text-lg">
            When it comes to dental care, brushing and flossing at home are necessary, — but they can’t always reach every corner of your mouth. Over time, plaque and tartar build up in hard-to-reach areas, principally along the gum line. That’s where professional dental scaling at Chakra Dental appear in.
          </p>
          <p className="text-gray-600">
            Scaling is not just about cleaning your teeth — it’s preventive therapy that protects your gums, protect your smile, and boosts your overall oral health. If you’ve noticed bleeding gums, bad breath, or sensitivity, it may be time to schedule a thorough cleaning with our expert team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScalingIntroSection;
