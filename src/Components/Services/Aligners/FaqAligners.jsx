import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqImg from "../../../assets/services/14.jpg";

const faqData = [
  {
    question: "Q: Do aligners hurt?",
    answer:
      "A: Mild discomfort can occur for the first few days of wearing each new set — a sign your teeth are moving — but it's significantly less painful than braces.",
  },
  {
    question: "Q: How long is the treatment?",
    answer:
      "A: Treatment duration depends on complication but typically ranges from 6 to 18 months.",
  },
  {
    question: "Q: Can I eat with them on?",
    answer:
      "A: No. Aligners must be removed while eating or drinking anything in addition water.",
  },
];

const FaqAligners = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={faqImg}
            alt="Aligners FAQ"
            className="rounded-3xl shadow-xl w-full h-[350px] object-cover"
          />
        </div>

        <div
          className="w-full lg:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            FAQs About Aligners
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-[#FFF9FB] overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex items-center justify-between w-full px-5 py-4 text-left"
                >
                  <h3 className="text-lg font-semibold text-[#650E45]">
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#650E45]" />
                  ) : (
                    <FaChevronDown className="text-[#650E45]" />
                  )}
                </button>
                <div
                  className={`px-5 text-gray-700 text-[15px] transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[500px] py-2" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAligners;
