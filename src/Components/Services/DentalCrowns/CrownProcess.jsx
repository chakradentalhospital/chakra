import React from "react";
import img1 from "../../../assets/services/28.jpg";
import img2 from "../../../assets/services/23.jpg";
import img3 from "../../../assets/services/2.jpg";
import img4 from "../../../assets/services/4.jpg";
import img5 from "../../../assets/services/11.jpg";
import img6 from "../../../assets/services/12.jpg"; 

const steps = [
  {
    title: "Tooth Medicine",
    desc: "The tooth is formed to assist the crown.",
    img: img1,
  },
  {
    title: "Digital Belief",
    desc: "We make accurate scans or impressions for a perfect fit.",
    img: img2,
  },
  {
    title: "Temporary Crown (if required)",
    desc: "During the process of preparing your a tooth covering, a temporary crown might be fitted to cover the tooth.",
    img: img3,
  },
  {
    title: "Crown Fixing",
    desc: "When the final crown is prepared, we strongly cement it using dentally suitable cement.",
    img: img4,
  },
  {
    title: "Final Adjustment",
    desc: "We make sure it fits perfectly with your crunch and exactly alike to your native teeth.",
    img: img5,
  },
  {
    title: "Smile Evaluation",
    desc: "Final checks and polishing are done to ensure a flawless look and feel to your new crown.",
    img: img6,
  },
];


const CrownProcess = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mb-12">
        The Crown Placement Process
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="group bg-[#F8F8F8] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <img
              src={step.img}
              alt={step.title}
              className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex-grow space-y-3">
              <h3 className="text-xl font-semibold text-[#650E45]">{step.title}</h3>
              <p className="text-gray-700 text-base">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 text-lg mt-12 max-w-2xl mx-auto">
        The complete procedure is pain-free, quick, and commonly done in 2 visits.
      </p>
    </section>
  );
};

export default CrownProcess;
