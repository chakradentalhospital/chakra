import React from "react";
import expertImg from "../../../assets/services/46.jpg";
import sealImg from "../../../assets/services/18.jpg";
import toolsImg from "../../../assets/services/61.jpg";
import rubberDamImg from "../../../assets/services/19.jpg";
import painFreeImg from "../../../assets/services/26.jpg";
import crownImg from "../../../assets/services/62.jpg";

const reasons = [
  {
    img: expertImg,
    title: "On-site expert Endodontist",
  },
  {
    img: sealImg,
    title: "3D obturation for tight sealing",
  },
  {
    img: toolsImg,
    title: "High-end rotary tools for efficient cleaning",
  },
  {
    img: rubberDamImg,
    title: "Aseptic technique using Rubber Dam",
  },
  {
    img: painFreeImg,
    title: "Pain-free, one or two-visit procedures",
  },
  {
    img: crownImg,
    title: "Custom crowns for robustness and aesthetics",
  },
];

const WhyChooseRCTSection = () => {
  return (
    <section className=" overflow-hidden w-full bg-white py-20 px-5 md:px-10 lg:px-[64px]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#4a0b32] mb-4">
          Why Choose Chakra Dental for RCT?
        </h2>
        <p className="text-center text-[#555] max-w-3xl mx-auto mb-12">
          We cure even challenging or break down root canals with confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative h-[320px] rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 w-full bg-white/60 backdrop-blur-md p-4 text-center">
                <h3 className="text-md font-semibold text-[#4a0b32] group-hover:text-[#650E45] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRCTSection;
