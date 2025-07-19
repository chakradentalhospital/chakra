import React from "react";
import dentalBg from "../../../assets/services/s1.jpg";

const KidsIntroSection = () => {
  return (
    <section className="w-full bg-[#FFF5F9] py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src={dentalBg}
            alt="Gentle Pediatric Dental Care"
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </div>

        <div className="md:w-1/2 space-y-6" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            Gentle Care for Little cheerful – Because Healthy Habits start Early
          </h2>

          <p className="text-gray-700 text-lg">
            At Chakra Dental, we accept that a child’s first dental experience should be positive, remarkable, and painless. That’s why we’ve created a hot, friendly, and light hearted that puts kids at ease from the occasion they step in. <br /> <br /> Our goal is simple — to build good hygiene, avoid dental problems, and make dental medicine a joyful part of every child’s adulting journey.
          </p>

          <p className="text-gray-600 text-lg">
            guided by a qualified and empathetic Pediatric Dental professional, our clinic is fully equipped to treat children of all age groups, from baby with teething troubles to young adults requiring orthodontic care. We’re not just treating little teeth — we’re adjusting a generation of children who are assurance about their oral health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KidsIntroSection;
