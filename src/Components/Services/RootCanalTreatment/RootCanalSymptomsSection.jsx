import React from "react";
import { FaTooth, FaRegSadTear, FaTemperatureLow, FaMoon, FaSmile } from "react-icons/fa";
import { MdOutlineSick, MdOutlineGavel } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";

const RootCanalSymptomsSection = () => {
  const symptoms = [
    { icon: <FaRegSadTear />, text: "Chronic toothache" },
    { icon: <MdOutlineGavel />, text: "Painful biting or chewing" },
    { icon: <MdOutlineMedicalServices />, text: "Sensitive or gingivitis" },
    { icon: <FaTemperatureLow />, text: "Hot or cold sensitivity" },
    { icon: <MdOutlineSick />, text: "Lump on the gum" },
    { icon: <FaTooth />, text: "Blackened or discolored tooth" },
    { icon: <FaMoon />, text: "Sleeplessness due to pain" },
    { icon: <MdReportGmailerrorred />, text: "Prolonged sensitivity or discomfort" },
  ];

  return (
    <section className="w-full bg-[#fdf4f8] py-20 px-6 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
            Symptoms You Might Need a Root Canal
          </h2>
          <p className="text-[#444] text-lg leading-relaxed">
            Spotting the signs early can help you avoid complications. If you're facing any of the symptoms below, it's time to act.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
          {symptoms.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-md transition-all hover:shadow-xl group"
            >
              <div className="text-[#650E45] text-2xl group-hover:scale-110 transition-all">
                {item.icon}
              </div>
              <span className="text-[#333] font-medium text-base group-hover:text-[#650E45] transition-all">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-[#444] text-lg mt-8">
            Should you be showing any of these indicators, we at Chakra Dental invite you for a complete diagnosis.
            Early care preserves your natural tooth and prevents further issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RootCanalSymptomsSection;
