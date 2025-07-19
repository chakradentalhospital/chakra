import React from "react";
import {
  FaShieldAlt,
  FaSmile,
  FaTint,
  FaCheckCircle,
  FaSearch,
  FaTooth,
  FaBrush,
  FaLightbulb,
  FaMagic,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaShieldAlt />,
    text: "Enamel safety",
  },
  {
    icon: <FaCheckCircle />,
    text: "Even results",
  },
  {
    icon: <FaTint />,
    text: "Low sensitivity",
  },
  {
    icon: <FaSmile />,
    text: "Up to 8 shades lift of brightness",
  },
];

const steps = [
  {
    icon: <FaSearch />,
    title: "Examination & Preparation",
    desc: "Starts with the dental check-up. If needed, we do light scaling or polishing before the whitening.",
  },
  {
    icon: <FaBrush />,
    title: "Gum Protection",
    desc: "Gums are covered to prevent irritation from the whitening gel.",
  },
  {
    icon: <FaTooth />,
    title: "Application of Whitening Gel",
    desc: "Your teeth are coated with specialized whitening gel that contains hydrogen or carbamide peroxide.",
  },
  {
    icon: <FaLightbulb />,
    title: "Activation with LED or Laser Light",
    desc: "LED or laser light activates the gel for whitening. Each cycle lasts about 15–20 mins, repeated for desired results.",
  },
  {
    icon: <FaMagic />,
    title: "Final Touch-Ups & Aftercare",
    desc: "Teeth are polished after treatment. Whitening gel is removed and you receive aftercare instructions.",
  },
];

const WhiteningClinicSection = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto space-y-16">
        <div className="text-center space-y-6" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Why Choose Professional Tooth Whitening?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Convenience of products available in stores sometimes come at a
            cost. You may end up spending money on whitening solutions lacking
            in strength, concentration, and may even result in gum irritation
            and sensitivity of teeth.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-md">
            At Chakra Dental, we adhere to international standards and use
            FDA-approved whitening agents to guarantee:
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 bg-[#fdf4f8] rounded-lg p-6 shadow group transition-all duration-300 hover:bg-[#650E45]"
            >
              <div className="text-3xl text-[#650E45] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <p className="font-medium text-[#650E45] group-hover:text-white transition-colors text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="text-center pt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-bold text-[#650E45]">
            In Clinic Whitening — Our Most Popular Option
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mt-2">
            In-office laser and LED whitening is our most popular option. Below
            is the process summary:
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {steps.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 bg-[#fdf4f8] p-6 rounded-xl shadow  group hover:bg-[#650E45] transition-all duration-300 ${
                idx === steps.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="text-2xl text-[#650E45] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[#650E45] group-hover:text-white mb-1 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-[#650E45] text-lg font-medium pt-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Result? A noticeably more radiant smile in under an hour.
        </p>
      </div>
    </section>
  );
};

export default WhiteningClinicSection;
