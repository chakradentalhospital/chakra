import React from "react";
import {
  FaHeartbeat,
  FaTooth,
  FaProcedures,
  FaLungsVirus,
  FaSmile,
  FaArrowAltCircleDown,
} from "react-icons/fa";

const scalingPoints = [
  {
    icon: <FaSmile className="text-[#650E45] text-2xl" />,
    text: "Gingivitis (early gum disease)",
  },
  {
    icon: <FaProcedures className="text-[#650E45] text-2xl" />,
    text: "Periodontitis (advanced gum disease)",
  },
  {
    icon: <FaTooth className="text-[#650E45] text-2xl" />,
    text: "Tooth mobility and tooth loss",
  },
  {
    icon: <FaLungsVirus className="text-[#650E45] text-2xl" />,
    text: "Persistent bad breath (halitosis)",
  },
  {
    icon: <FaArrowAltCircleDown className="text-[#650E45] text-2xl" />,
    text: "Receding gums",
  },
  {
    icon: <FaHeartbeat className="text-[#650E45] text-2xl" />,
    text: "Heart disease & diabetes complications (linked to gum infections)",
  },
];

const ScalingImportanceSection = () => {
  return (
    <section className="w-full bg-[#fff7fa] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center space-y-10">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#650E45]"
          data-aos="fade-up"
        >
          Why Is Scaling So Important?
        </h2>

        <p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          You may anticipate a little tartar buildup or bad breath isn’t serious, but untreated plaque and bacteria can lead to:
        </p>

        {/* Grid of points */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {scalingPoints.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-5 h-fit rounded-xl shadow-sm"
            >
              {item.icon}
              <p className="text-left text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Final note */}
        <p
          className="text-lg text-[#650E45] font-medium max-w-2xl mx-auto pt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Scaling is the first and most major line of defense against these issues. It’s the dental equivalent of a full-body detox for your mouth.
        </p>
      </div>
    </section>
  );
};

export default ScalingImportanceSection;
