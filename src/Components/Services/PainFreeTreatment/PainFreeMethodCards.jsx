import React from "react";
import {
  FaSyringe,
  FaTooth,
  FaSmile,
  FaShieldAlt,
  FaHospital
} from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";


const painFreeCards = [
  {
    icon: <FaSyringe className="text-3xl text-[#650E45]" />,
    title: "Modern Anesthesia distribution method",
    desc: "We use superfine needles, numbing gels, and computer-supported delivery systems to be sure that even the injection is hardly felt. In a lot of cases, our patients say they didn’t feel the injection at all.",
  },
  {
    icon: <FaTooth className="text-3xl text-[#650E45]" />,
    title: "Silent Electric tool-holder (Drills)",
    desc: "Standard drills are loud and frightening. We use quiet, smooth electric handpieces that reduce both discomfort and care.",
  },
  {
    icon: <FaSmile className="text-3xl text-[#650E45]" />,
    title: "Moderate sedation Options",
    desc: "For extremely nervous or delicate patients, we offer oral calming medications, laughing gas (nitrous oxide), or conscious sedation under expert guidance. You remain relaxed but alive, and treatment feels like a breath of wind.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-[#650E45]" />,
    title: "Rubber Dam separation",
    desc: "This technique safeguards your mouth, Retains the treatment area dry, and enhances both safety and comfort during root canals and regenerative procedures.",
  },
  {
    icon: <MdOutlinePrecisionManufacturing  className="text-3xl text-[#650E45]" />,
    title: "Laser Dentistry",
    desc: "For periodontal treatments, desensitization, and small incision surgeries, we use dental lasers which areaccurate, painless, and anemic.",
  },
  {
    icon: <FaHospital className="text-3xl text-[#650E45]" />,
    title: "Hospital-Based deep sedation",
    desc: "For complex cases, maxillofacial surgery or children who cannot collaborate in a chair, we provide hospital-based full anesthetizing, with our oral surgeons and anesthetists in a germ-free, multi-specialty arrangement.",
  },
];

const PainFreeMethodCards = () => {
  return (
    <section className="w-full bg-[#FDF7FB] py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1300px] mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
          How We make sure Pain-Free Plan of Actions
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painFreeCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 space-y-4 text-left border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              data-aos="zoom-in"
            >
              <div>{item.icon}</div>
              <h4 className="font-bold text-lg text-[#650E45]">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainFreeMethodCards;
