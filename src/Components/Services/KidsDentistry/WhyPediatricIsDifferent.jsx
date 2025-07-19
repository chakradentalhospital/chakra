import React from "react";
import dentalKidCare from "../../../assets/services/21.jpg";

const WhyPediatricIsDifferent = () => {
  return (
    <section className="w-full bg-[#FEF7FB] py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            Why Pediatric Dentistry Is Different
          </h2>

          <p className="text-gray-700 text-lg">
            Children are not just little person — their dental needs, manner,
            and emotional rejoinder are completely eccentric. Pediatric
            dentistry focuses especially on the dental health of infants,
            children, and teenagers, including children with special needs. It
            requires both expertise and psychological understanding to manage
            everything from teething inconvenience to overwhelming and childhood
            dental fear.
          </p>

          <p className="text-gray-600">
            At Chakra Dental, we go apart from clinical treatment — we focus on
            speaking, education, and pity to ensure that children protected,
            appreciated, and interested in their own dental care.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative" data-aos="fade-left">
          <img
            src={dentalKidCare}
            alt="Why Pediatric Dentistry"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyPediatricIsDifferent;
