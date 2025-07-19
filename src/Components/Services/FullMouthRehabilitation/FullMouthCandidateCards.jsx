import React from "react";
import { FaTooth, FaRegGrinBeam, FaTeethOpen } from "react-icons/fa";
import { GiBrokenSkull } from "react-icons/gi";
import { MdOutlineSick } from "react-icons/md";
import { BiSad, BiCheckShield } from "react-icons/bi";
import { MdOutlineVisibility, MdOutlinePsychology } from "react-icons/md";

const cardData = [
  {
    icon: <FaTooth size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Have several missing teeth",
  },
  {
    icon: <FaTeethOpen size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Experience severe tooth decay or damage",
  },
  {
    icon: <GiBrokenSkull size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Experience pain in the jaw or chewing difficulty",
  },
  {
    icon: <BiCheckShield size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Have ground-down teeth or acid wear due to grinding or acid erosion",
  },
  {
    icon: <FaRegGrinBeam size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Have a collapsing or uneven bite",
  },
  {
    icon: <BiSad size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Feel embarrassed about your smile",
  },
  {
    icon: <MdOutlineSick size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Desire a full transformation due to trauma or illness",
  },
  {
    icon: <MdOutlinePsychology size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Have emotional stress due to dental problems",
  },
  {
    icon: <MdOutlineVisibility size={30} className="text-[#650E45] group-hover:text-white transition-colors duration-300" />,
    text: "Wish to restore full smile confidence",
  },
];

const FullMouthCandidateCards = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <div data-aos="fade-up" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
          Who Requires Full Mouth Rehabilitation?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We start with a complete oral examination, X-rays, digital scans, bite analysis,
          and aesthetic evaluation, to design your own customized plan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="group bg-[#FFF0F7] hover:bg-[#650E45] hover:text-white transition-all duration-300 p-6 rounded-xl shadow-lg flex items-start gap-4"
          >
            <div>{item.icon}</div>
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FullMouthCandidateCards;
    