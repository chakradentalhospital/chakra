import React from "react";
import {
  FaSmile,
  FaShieldAlt,
  FaTools,
  FaUserMd,
  FaMoneyBillWave,
  FaClock,
  FaPlus,
} from "react-icons/fa";
import whiteningImg from "../../../assets/services/27.jpg";

const perks = [
  { icon: <FaSmile />, text: "One visit sessions could achieve as much as 8 shades whiter" },
  { icon: <FaShieldAlt />, text: "Enamel and sensitive teeth safe" },
  { icon: <FaTools />, text: "No damage to existing dental work" },
  { icon: <FaUserMd />, text: "Experienced professionals provide the service" },
  { icon: <FaMoneyBillWave />, text: "Value for money with long-lasting results" },
  { icon: <FaClock />, text: "No downtime; patients can walk out with radiant smiles" },
  { icon: <FaPlus />, text: "Touch-ups and combine treatments (scaling + whitening)" },
  { icon: <FaSmile />, text: "Safe, clinically tested, and FDA-approved whitening agents" },
];

const WhiteningPerksSection = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Left Image */}
        <div className="md:w-1/2 w-full" data-aos="fade-right">
          <img
            src={whiteningImg}
            alt="Tooth Whitening"
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Right Perk Cards */}
        <div className="md:w-1/2 w-full space-y-6" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Perks of Whitening at Chakra Dental
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-3 bg-[#fdf4f8] p-4 rounded-xl shadow hover:bg-[#650E45] transition-all duration-300"
              >
                <div className="text-[#650E45] text-xl group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <p className="text-[#650E45] group-hover:text-white transition-colors text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteningPerksSection;
