import React from "react";
import {
  FaCoffee,
  FaSmokingBan,
  FaTooth,
  FaGlassWhiskey,
  FaWineBottle,
  FaRedo,
} from "react-icons/fa";

const tips = [
  {
    icon: <FaCoffee />,
    text: "Coffee, red wine, tea, and any other colored sodas are a no-go for 48 hours",
  },
  {
    icon: <FaSmokingBan />,
    text: "Stop all smoking and tobacco products",
  },
  {
    icon: <FaTooth />,
    text: "Use a non-abrasive, whitening toothpaste",
  },
  {
    icon: <FaGlassWhiskey />,
    text: "For every meal or beverage, rinse",
  },
  {
    icon: <FaWineBottle />,
    text: "For colored drinks, sip using a straw to limit contact",
  },
  {
    icon: <FaRedo />,
    text: "Touchup sessions should be scheduled every six-to-twelve months",
  },
];

const WhiteningCareTips = () => {
  return (
    <section className="w-full bg-white py-10 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto space-y-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#650E45] text-center"
          data-aos="fade-up"
        >
          Post-Whitening Care Tips
        </h2>
        <p
          className="text-center text-gray-700 max-w-2xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          To prevent the gained benefits from fading after the initial whitening
          treatments, clients should adhere to these instructions.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {tips.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-4 bg-[#fdf4f8] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-[42px] h-[42px] min-w-[42px] rounded-full bg-[#650E45] text-white flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-gray-700 group-hover:text-[#650E45] transition-colors duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhiteningCareTips;
