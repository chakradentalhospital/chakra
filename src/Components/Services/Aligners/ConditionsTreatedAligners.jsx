import React from "react";
import alignerTreatImg from "../../../assets/services/32.jpg";
import {
  FaTeethOpen,
  FaTeeth,
  FaGripLinesVertical,
  FaArrowsAltH,
  FaAngleDoubleUp,
  FaCompressAlt,
} from "react-icons/fa";

const alignerIssues = [
  { icon: <FaTeethOpen />, text: "Crooked or crooked teeth" },
  { icon: <FaArrowsAltH />, text: "Gaps between teeth" },
  { icon: <FaAngleDoubleUp />, text: "Overbite or underbite" },
  { icon: <FaGripLinesVertical />, text: "Crossbite" },
  { icon: <FaTeeth />, text: "Open bite" },
  { icon: <FaCompressAlt />, text: "Mild to moderate crowding" },
];

const ConditionsTreatedAligners = () => {
  return (
    <section className="w-full bg-white overflow-hidden py-20 px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        <div
          className="w-full lg:w-1/2 space-y-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Conditions Treated with Clear Aligners
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-[16px]">
            {alignerIssues.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#650E45] text-xl mt-1">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 text-[15px] leading-relaxed">
            Not all cases are suitable for aligners, but our Orthodontic Specialist at Chakra Dental will perform a detailed appraise to make sure this is the right option for you.
          </p>
        </div>

        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={alignerTreatImg}
            alt="Aligner Conditions"
            className="w-full h-full rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ConditionsTreatedAligners;
