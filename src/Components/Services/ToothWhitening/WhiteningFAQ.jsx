import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqImg from "../../../assets/services/faq.jpg"; 

const faqs = [
  {
    question: "Will bleaching harm my teeth?",
    answer:
      "No. When done expertly, it is perfectly safe and does not harm your varnish.",
  },
  {
    question: "How long does the result last?",
    answer:
      "Whitening can last 6 months to 2 years, contingent on your lifestyle and customs.",
  },
  {
    question: "Can it whiten wreaths or fillings?",
    answer:
      "Whitening brightening only natural teeth. We’ll help you plan decorative adjustments to match your new splash if needed.",
  },
];

const WhiteningFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left - Accordion */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] mb-4">
            FAQs About Tooth Whitening
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#eee] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 bg-[#fdf4f8] hover:bg-[#650E45] hover:text-white text-left transition-all duration-300"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-[#650E45] group-hover:text-white">
                    {activeIndex === idx ? (
                      <FaMinus className="text-sm" />
                    ) : (
                      <FaPlus className="text-sm" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden px-5 text-gray-700 bg-white ${
                    activeIndex === idx ? "max-h-[200px] py-4" : "max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <img
            src={faqImg}
            alt="FAQ"
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhiteningFAQ;
