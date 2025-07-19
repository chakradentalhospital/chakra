import React from "react";
import {
  FaSearch,
  FaWater,
  FaTools,
  FaTooth,
  FaFlask,
  FaRegCommentDots,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Examination",
    desc: "Our Periodontist or general dentist inspect your gums and teeth to determine the extent of tartar buildup and gum health.",
  },
  {
    icon: <FaWater />,
    title: "Ultrasonic Scaling",
    desc: "We use a high-tech ultrasonic scaler that vibrates and gingerly breaks apart tartar, plaque, and bacteria biofilm from your teeth and below the gum line.",
  },
  {
    icon: <FaTools />,
    title: "Manual Scaling (if needed)",
    desc: "For hard-to-reach areas, we use fine hand instruments to polish off any remaining deposits, especially in deep pockets.",
  },
  {
    icon: <FaTooth />,
    title: "Polishing",
    desc: "After scaling, your teeth are polished with a mildly abrasive paste that smooths the surface and makes it harder for new plaque to twig.",
  },
  {
    icon: <FaFlask />,
    title: "Fluoride Rinse (Optional)",
    desc: "We may apply a fluoride rinse to strengthen enamel and reduce sensitivity.",
  },
  {
    icon: <FaRegCommentDots />,
    title: "Post-care Advice",
    desc: "You’ll receive instructions on oral hygiene practices and how often you’ll need scaling in the future.",
  },
];

const ScalingProcedureSection = () => {
  return (
    <section className="w-full bg-[#fdf6f9] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden relative">
      {/* Optional Blob */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] z-0 opacity-10 pointer-events-none blob-animation" />

      <div className="max-w-[1240px] mx-auto z-10 relative">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#650E45] text-center mb-14"
          data-aos="fade-up"
        >
          The Chakra Dental Scaling Procedure
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Animated left border */}
              <div className="absolute left-0 top-0 h-full w-[6px] bg-[#650E45] transition-all duration-500 group-hover:w-full group-hover:bg-[#650E45] z-0" />

              <div className="relative z-10 p-6 transition-colors duration-500 group-hover:text-white">
                <div className="bg-[#650E45] text-white p-3 rounded-full inline-flex mb-4 transition-transform group-hover:scale-110">
                  {React.cloneElement(step.icon, { className: "text-xl" })}
                </div>
                <h3 className="text-xl font-semibold text-[#650E45] mb-2 group-hover:text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalingProcedureSection;
