import React from "react";
import { GiCrystalBars, GiHealthNormal, GiStoneCrafting, GiTooth } from "react-icons/gi";


const zirconiaFeatures = [
  {
    icon: <GiCrystalBars className="text-[#650E45] text-4xl animate-bounce" />,
    title: "Highly Long-Lasting",
    desc: "Built for durability, zirconia crowns can withstand years of use without wearing down.",
  },
  {
    icon: <GiHealthNormal className="text-[#650E45] text-4xl animate-pulse" />,
    title: "Metal-Free & Tissue-Friendly",
    desc: "They’re biocompatible and safe for patients with metal allergies or sensitivities.",
  },
  {
    icon: <GiStoneCrafting className="text-[#650E45] text-4xl animate-bounce" />,
    title: "Crack & Wear Resistant",
    desc: "Incredibly strong and fracture-resistant — ideal even for strong back teeth.",
  },
  {
    icon: <GiTooth className="text-[#650E45] text-4xl animate-pulse" />,
    title: "Natural Aesthetics",
    desc: "Looks just like your natural teeth, blending perfectly in front or back teeth.",
  },
];

const ZirconiaInfo = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-14" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
          What Are Zirconia Crowns?
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Zirconia crowns are crafted from zirconium dioxide – a next-gen ceramic that offers long-term strength and beauty. Here’s why they stand out:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos="fade-up">
        {zirconiaFeatures.map((item, i) => (
          <div
            key={i}
            className="bg-[#f9f9f9] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex gap-5 items-start"
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#650E45] mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZirconiaInfo;
