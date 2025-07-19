import React from "react";
import { FaEyeSlash, FaTooth, FaHandsWash, FaClock } from "react-icons/fa";

const data = [
  {
    icon: <FaEyeSlash className="text-2xl text-white" />,
    title: "Invisible Design",
    desc:
      "Invisalign aligners are clear, nearly invisible, and perfect for executive, students, or anyone who wants faint treatment.",
  },
  {
    icon: <FaTooth className="text-2xl text-white" />,
    title: "Removable and Convenient",
    desc:
      "Different traditional braces, you can remove the aligners to eat, drink, brush, and fuzzy. No dietary control and no need for complex cleaning routines.",
  },
  {
    icon: <FaHandsWash className="text-2xl text-white" />,
    title: "Comfortable and Safe",
    desc:
      "Invisalign trays are polished and customized, so there’s no irritation to your jowl or gums, and no urgent appointments for broken wires or brackets.",
  },
  {
    icon: <FaClock className="text-2xl text-white" />,
    title: "Predictable Results",
    desc:
      "The digital treatment scheme shows your teeth’s movement at every phase. You can actually see how your smile will evolve before treatment even begins.",
  },
];

const WhyInvisalignStandsOut = () => {
  return (
    <section className="w-full bg-[#FFFAFD] py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#650E45] mb-12"
          data-aos="fade-up"
        >
          Why Invisalign Stands Out
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-[#F5E7EF]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-12 h-12 rounded-full bg-[#650E45] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#650E45] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div
          className="bg-[#650E45] text-white text-center rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-xl"
          data-aos="fade-up"
        >
          <h4 className="text-xl md:text-2xl font-semibold mb-2">Faster Medication Time</h4>
          <p className="text-[15px]">
            In many cases, Invisalign treatment is faster than customary braces, with noticeable
            results in as little as 6 to 12 months.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyInvisalignStandsOut;
