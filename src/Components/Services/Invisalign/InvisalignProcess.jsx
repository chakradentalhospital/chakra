import React from "react";
import img1 from "../../../assets/services/25.jpg";
import img2 from "../../../assets/services/18.jpg";
import img3 from "../../../assets/services/13.jpg";
import img4 from "../../../assets/services/37.jpg";
import img5 from "../../../assets/services/46.jpg";
import img6 from "../../../assets/services/47.jpg";

const steps = [
  {
    title: "Consultation & Assessment",
    desc: "We begin with a finished dental check-up and discuss your smile goals. Our Invisalign-certified dentist will determine your suitability.",
    img: img1,
  },
  {
    title: "3D iTero Digital Scanning",
    desc: "No complex impressions! We use an advanced 3D intraoral scanner to capture accurate images of your teeth.",
    img: img2,
  },
  {
    title: "Treatment Planning & Smile Preview",
    desc: "Using Invisalign’s exclusive ClinCheck software, we assume your smile transformation. You’ll know what to anticipate before we start.",
    img: img3,
  },
  {
    title: "Custom Aligner Fabrication",
    desc: "Invisalign will create a set of clear aligners that gradually shift your teeth. Each set is in holes for about 20–22 hours a day, and changed every 1–2 weeks.",
    img: img4,
  },
  {
    title: "Progress Monitoring",
    desc: "We’ll arrange check-ins every few weeks to monitor your advance, provide new aligners, and make any required adjustments.",
    img: img5,
  },
  {
    title: "Retainers After Treatment",
    desc: "Once your perfect smile is accomplished, we provide customized Vivera retainers to maintain your results.",
    img: img6,
  },
];

const InvisalignProcess = () => {
  return (
    <section className="w-full bg-[#FFF7FB] py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#650E45] mb-12"
          data-aos="fade-up"
        >
          The Chakra Dental Invisalign Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#650E45] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-[15px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvisalignProcess;
