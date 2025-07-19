import React from "react";
import {
  MdOutlineGroups,
  MdOutlineMonitorHeart,
  MdOutlineEngineering,
  MdOutlineBuild,
  MdTrendingUp,
  MdOutlineFaceRetouchingNatural,
  MdOutlineThumbUp,
} from "react-icons/md";

import img1 from "../../../assets/services/46.jpg";
import img2 from "../../../assets/services/14.jpg";
import img3 from "../../../assets/services/51.jpg";
import img4 from "../../../assets/services/62.jpg";
import img5 from "../../../assets/services/49.jpg";
import img6 from "../../../assets/services/11.jpg";
import img7 from "../../../assets/services/59.jpg";

const chakraBenefits = [
  {
    icon: <MdOutlineGroups size={28} className="text-[#650E45]" />,
    img: img1,
    text: "Interdisciplinary under one roof",
  },
  {
    icon: <MdOutlineMonitorHeart size={28} className="text-[#650E45]" />,
    img: img2,
    text: "Ultra-modern digital smile design & treatment planning",
  },
  {
    icon: <MdOutlineEngineering size={28} className="text-[#650E45]" />,
    img: img3,
    text: "Access to in-house OT for surgeries",
  },
  {
    icon: <MdOutlineBuild size={28} className="text-[#650E45]" />,
    img: img4,
    text: "Custom crowns, bridges, and inculcate made for lasting results",
  },
  {
    icon: <MdTrendingUp size={28} className="text-[#650E45]" />,
    img: img5,
    text: "Progressive treatment for benefit and reasonableness",
  },
  {
    icon: (
      <MdOutlineFaceRetouchingNatural size={28} className="text-[#650E45]" />
    ),
    img: img6,
    text: "Focus on comfort, function, and facial beauty",
  },
  {
    icon: <MdOutlineThumbUp size={28} className="text-[#650E45]" />,
    img: img7,
    text: "Straightforward advice at every step",
  },
];

const ChakraDentalSupremacy = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-[#FFF0F7]">
      <div data-aos="fade-up" className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
          The Chakra Dental Supremacy
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Whether your case is straightforward or complex, we’re provision with
          the experience and technology to deliver permanent solutions — not
          just quick fix.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:gap-0">
        {chakraBenefits.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="min-w-[100px] w-[100px] h-[100px] rounded-full overflow-hidden shadow-xl">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 max-w-2xl w-full hover:bg-[#650E45] hover:text-white transition-all duration-300">
              <div>{item.icon}</div>
              <p className="text-lg font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChakraDentalSupremacy;
