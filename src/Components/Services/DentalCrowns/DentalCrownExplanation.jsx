import React from "react";
import {
  MdSettings,
  MdAutoFixHigh,
  MdViewInAr,
  MdVisibility,
} from "react-icons/md";
import { GiToothbrush, GiCrackedGlass } from "react-icons/gi";
import { FaTooth } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";


const DentalCrownExplanation = () => {
  return (
    <section className="bg-[#FFF8FB] px-6 md:px-16 py-20 overflow-hidden">
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
          What Is a Dental Crown?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          A dental crown is a custom-made, resembling a tooth cap that is
          suitable over a broken or decayed tooth. It brings back the tooth's:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          {
            icon: <MdSettings size={28} />,
            text: "Resistance (chewing and biting)",
          },
          { icon: <MdAutoFixHigh size={28} />, text: "Functionality" },
          { icon: <MdViewInAr size={28} />, text: "Shape and form" },
          { icon: <MdVisibility size={28} />, text: "Visual appeal" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="bg-[#F9D8EC] text-[#650E45] p-3 rounded-full">
              {item.icon}
            </div>
            <p className="text-gray-800 font-medium text-base">{item.text}</p>
          </div>
        ))}
      </div>

      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Crowns are normally indicated following:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <MdMedicalServices size={28} />, text: "Endodontic treatment" },
          {
            icon: <GiCrackedGlass size={28} />,
            text: "Extensively decayed or cracked tooth",
          },
          {
            icon: <MdSettings size={28} />,
            text: "Fillings too large that disable the tooth",
          },
          { icon: <FaTooth size={28} />, text: "Exhausted or cracked teeth" },
          {
            icon: <GiToothbrush size={28} />,
            text: "Bridges or artificial teeth",
          },
          {
            icon: <MdAutoFixHigh size={28} />,
            text: "Part of full mouth restoration practice",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="bg-[#F9D8EC] text-[#650E45] p-3 rounded-full">
              {item.icon}
            </div>
            <p className="text-gray-800 font-medium text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DentalCrownExplanation;
