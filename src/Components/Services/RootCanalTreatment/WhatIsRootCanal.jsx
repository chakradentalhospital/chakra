import React from "react";
import rootImg from "../../../assets/services/60.jpg"; 
import { FaTooth, FaRegGrinBeam, FaBone, FaRadiation, FaSwatchbook } from "react-icons/fa";

const points = [
  { icon: <FaRegGrinBeam />, text: "Severe swelling or pain" },
  { icon: <FaRadiation />, text: "Furuncle formation" },
  { icon: <FaSwatchbook />, text: "Smudge of the tooth" },
  { icon: <FaBone />, text: "Loss of nearby bone around the root" },
  { icon: <FaTooth />, text: "Total loss of the tooth" },
];

const WhatIsRootCanal = () => {
  return (
    <section className="w-full bg-[#fff7fa] py-20 px-6 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-left">
          <img
            src={rootImg}
            alt="Root Canal Treatment"
            className="rounded-xl shadow-xl w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#4a0b32]">
            What Is a Root Canal?
          </h2>
          <p className="text-[#444] leading-relaxed">
            Root canal is a restorative dental treatment to treat an infected or inflamed pulp tissue — the soft inner layer of the tooth containing nerves and blood vessels.
          </p>
          <p className="text-[#444] font-semibold">If left crude, an infected mash may cause:</p>
          <ul className="space-y-3">
            {points.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 group transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <span className="text-[#650E45] text-xl group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-[#333] group-hover:text-[#650E45] font-medium transition-all">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[#444] leading-relaxed">
            Willingly than removal of the tooth, a root canal gets rid of the infected tissue, cleans the pulp canal, and fills it so as not to allow further infection. A crown is typically placed next to support and reinforce the tooth.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default WhatIsRootCanal;
