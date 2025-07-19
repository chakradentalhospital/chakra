import React from "react";
import { FaWineGlassAlt, FaSyringe } from "react-icons/fa";

const discolorationCauses = [
  {
    icon: <FaWineGlassAlt />,
    title: "Extrinsic Stains",
    desc: "Are from tobacco or food and drink that is consumed, like coffee, tea, or wine. Over time, poor hygiene also adds to the staining.",
  },
  {
    icon: <FaSyringe />,
    title: "Intrinsic Stains",
    desc: "Are stains that happen because of an injury, certain medications, excessive use of fluoride, or the natural process of aging.",
  },
];

const WhiteningCauseSection = () => {
  return (
    <section className="w-full bg-[#fdf6f9] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto space-y-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#650E45] text-center"
          data-aos="fade-up"
        >
          What Causes Tooth Discoloration?
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {discolorationCauses.map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-xl p-6 shadow-md flex items-start gap-4 overflow-hidden"
            >
              {/* Animated left fill */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#650E45] transition-all duration-500 group-hover:w-full z-0" />

              {/* Icon */}
              <div className="relative z-10 text-2xl text-[#650E45] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-[#650E45] mb-1 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-gray-700 text-lg max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At Chakra Dental, we will analyze the cause and type of your discoloration and pair you with the best treatment plan, customized for you.
        </p>
      </div>
    </section>
  );
};

export default WhiteningCauseSection;
