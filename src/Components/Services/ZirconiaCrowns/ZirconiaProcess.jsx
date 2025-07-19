import React from "react";
import { GiToothbrush, GiTooth, GiMagnifyingGlass, GiCrown, GiHammerNails, GiSparkles } from "react-icons/gi";

const steps = [
  {
    title: "Initial Consultation & Tooth Evaluation",
    desc: "We estimate your oral health and check if Zirconia is the suitable crown material for you.",
    icon: <GiMagnifyingGlass className="text-4xl text-white" />,
  },
  {
    title: "Tooth Construction",
    desc: "We subtly mold the infected tooth to fit the crown.",
    icon: <GiToothbrush className="text-4xl text-white" />,
  },
  {
    title: "Digital Impressions",
    desc: "We take digital scans or perception of the specific shape and overbite of your teeth.",
    icon: <GiTooth className="text-4xl text-white" />,
  },
  {
    title: "Crown Invention",
    desc: "Your customize Zirconia crown is digitally designed and created using meticulous CAD/CAM technology to fit like a glove.",
    icon: <GiCrown className="text-4xl text-white" />,
  },
  {
    title: "Crown Placement",
    desc: "The crown is then strongly attached onto your tooth reduction and modified for equilibration and comfort. Done in 2 visits.",
    icon: <GiHammerNails className="text-4xl text-white" />,
  },
  {
    title: "Final Polish & Bite Check",
    desc: "The crown is adjusted and polished for smoothness and comfort to ensure a balanced bite and natural feel.",
    icon: <GiSparkles className="text-4xl text-white" />,
  },
];

const ZirconiaProcess = () => {
  return (
    <section className="px-6 md:px-16 py-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mb-16">
        Zirconia Crowns at Chakra Dental – The Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="rounded-xl p-6 bg-white shadow-md flex items-start gap-5 transition-transform hover:scale-[1.02] duration-300"
            data-aos="fade-up"
          >
            <div className="min-w-[64px] min-h-[64px] rounded-full bg-[#650E45] flex items-center justify-center hover:scale-[110%] hover:shadow-[0_0_15px_#650E45] transition-all duration-900">
              {step.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#650E45] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZirconiaProcess;
