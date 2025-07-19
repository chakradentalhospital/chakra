import React from "react";
import { FaQuestionCircle, FaSmile } from "react-icons/fa";

const scalingFaqs = [
  {
    icon: <FaQuestionCircle className="text-3xl text-white" />,
    title: "How Often Should You Get Scaling?",
    desc: "For most people, scaling is advise once every 6 months. However, if you are prone to plaque buildup, have braces, smoke, or suffer from gum disease or diabetes, you may benefit from more frequent cleanings (every 3–4 months).",
  },
  {
    icon: <FaSmile className="text-3xl text-white" />,
    title: "Is Scaling Painful?",
    desc: "No. Scaling is typically painless, especially when done regularly. If your gums are inflamed or sensitive, we offer topical numbing gels or local anesthesia to ensure complete comfort. Many patients are surprised at how quick and comfortable the process is — and how fresh their mouth feels subsequently.",
  },
];

const ScalingFAQSection = () => {
  return (
    <section className="w-full bg-[#2a0e20] text-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto space-y-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#f1c2e7]"
          data-aos="fade-up"
        >
          Scaling FAQs — Straight Answers
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {scalingFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#650E45] rounded-2xl p-6 flex items-start gap-5 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex-shrink-0">{faq.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {faq.title}
                </h3>
                <p className="text-white text-sm leading-relaxed">{faq.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalingFAQSection;
