import React from "react";
import {
  FaUserMd,
  FaRegClipboard,
  FaTooth,
  FaClinicMedical,
  FaCheckCircle,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaUserFriends,
  FaHeart,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserMd />,
    text: "Experienced, qualified dentists with focused training",
  },
  {
    icon: <FaRegClipboard />,
    text: "Obvious diagnosis and treatment planning",
  },
  { icon: <FaTooth />, text: "Painless, modern technology for exact imaging" },
  {
    icon: <FaClinicMedical />,
    text: "Clean, disinfected, and comforting environment",
  },
  {
    icon: <FaCheckCircle />,
    text: "One-stop solution for all dental expertise",
  },
  {
    icon: <FaCalendarAlt />,
    text: "Flexible appointment slots, including weekends",
  },
  { icon: <FaMoneyCheckAlt />, text: "Affordable consultation fees" },
  {
    icon: <FaUserFriends />,
    text: "Friendly staff trained to reduce dental anxiety",
  },
  {
    icon: <FaHeart />,
    text: "Personalized care that prioritizes comfort and trust",
  },
];

const WhyChooseConsultation = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 bg-gradient-to-br from-[#FDF2F9] to-[#F7F7FD] overflow-hidden">
      <div className="max-w-[1300px] mx-auto space-y-16">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Why Choose Chakra Dental for Your Consultation?
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#650E45] text-white rounded-full text-xl shrink-0">
                {item.icon}
              </div>
              <p className="text-gray-700 text-[15px]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className="bg-[#650E45] text-white p-10 rounded-2xl shadow-lg text-center max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Ready to Take the First Step?
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            Every transformation begins with a conversation. Whether you’re in
            pain, seeking advice, or simply maintaining your oral health — a
            consultation at Chakra Dental is the perfect start.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseConsultation;
