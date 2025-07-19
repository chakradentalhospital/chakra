import React, { useEffect } from "react";

import { FaTooth, FaUtensils, FaCrown, FaSmile } from "react-icons/fa";

const aftercarePoints = [
  {
    icon: <FaTooth className="text-3xl text-[#a6215a]" />,
    title: "Pain management (if needed)",
  },
  {
    icon: <FaUtensils className="text-3xl text-[#a6215a]" />,
    title: "Eating smooth foods for a temporary",
  },
  {
    icon: <FaCrown className="text-3xl text-[#a6215a]" />,
    title: "Placing the lasting crown within a week (if not done same-day)",
  },
];

const AftercareSection = () => {
  return (
    <section className="w-full bg-[#f8cee6] py-20 px-5 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#4a0b32] mb-6"
          data-aos="fade-up"
        >
          Aftercare & Recovery
        </h2>
        <p
          className="text-[#444] text-[17px] max-w-2xl mx-auto mb-12 leading-[1.8]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          You may feel mild tenderness for a day or two, but most patients
          return to normal activities the same day. Our dentist will guide you
          on:
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {aftercarePoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-[#f4e0ea] hover:shadow-xl transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{point.icon}</div>
              <p className="text-[#333] text-[16px]">{point.title}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <p className="text-[#444] text-[17px] leading-[1.8] flex items-center justify-center gap-2">
            Maintaining good oral hygiene and regular checkups will keep your
            treated tooth strong for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AftercareSection;
