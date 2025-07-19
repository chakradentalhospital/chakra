import React from "react";
import {
  MdOutlineCameraAlt,
  MdOutlineLocalHospital,
  MdOutlineSanitizer,
  MdCleaningServices,
  MdOutlineScience,
  MdOutlineWorkspacePremium,
} from "react-icons/md";

const rootSteps = [
  {
    icon: <MdOutlineCameraAlt size={30} />,
    title: "Digital Imaging & Diagnosis",
    desc: "X-rays or CBCT scans help analyze the infected area and plan your treatment.",
  },
  {
    icon: <MdOutlineLocalHospital size={30} />,
    title: "Pain-Free Anesthesia",
    desc: "Local anesthesia ensures a completely painless procedure.",
  },
  {
    icon: <MdOutlineSanitizer size={30} />,
    title: "Rubber Dam Separation",
    desc: "A rubber dam isolates the tooth to keep it germ-free and infection-free.",
  },
  {
    icon: <MdCleaningServices size={30} />,
    title: "Pulp Removal & Cleaning",
    desc: "The infected pulp is removed and the canal is shaped and sanitized.",
  },
  {
    icon: <MdOutlineScience size={30} />,
    title: "3D Sealing",
    desc: "The canal is sealed using 3D obturation with biocompatible material.",
  },
  {
    icon: <MdOutlineWorkspacePremium size={30} />,
    title: "Crown Placement",
    desc: "A crown is placed to restore the tooth’s appearance and strength.",
  },
];

const RootCanalStepsSection = () => {
  return (
    <section className="w-full py-20 px-5 md:px-10 lg:px-[64px] bg-[#fff0f5] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4a0b32]">
          Root Canal at Chakra Dental – How We Do It
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rootSteps.map((step, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#650E45]/20 rounded-full blur-2xl z-0 transition-all duration-700 group-hover:scale-[2.5] group-hover:translate-x-20 group-hover:translate-y-10" />
              <div className="relative z-10 space-y-3">
                <div className="text-[#650E45] group-hover:scale-90 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#4a0b32] group-hover:text-[#650E45] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-[#444] group-hover:text-[#650E45]/80 transition-colors duration-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RootCanalStepsSection;
