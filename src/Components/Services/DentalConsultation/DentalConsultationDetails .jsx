import React from "react";
import dentalScan from "../../../assets/services/23.jpg";
import { FaTooth, FaXRay, FaRegSmile, FaClipboardList } from "react-icons/fa";
import { MdHealthAndSafety, MdCameraAlt } from "react-icons/md";

const consultationChecks = [
  { icon: <FaTooth size={22} />, text: "Teeth – Cavities, decay, cracks" },
  { icon: <MdHealthAndSafety size={22} />, text: "Gums – Bleeding, swelling, periodontal disease" },
  { icon: <FaRegSmile size={22} />, text: "Jaw & bite alignment" },
  { icon: <FaClipboardList size={22} />, text: "Past dental work & restorations" },
  { icon: <MdCameraAlt size={22} />, text: "Soft tissues – ulcers, wounds, cancer signs" },
  { icon: <FaXRay size={22} />, text: "Digital X-rays, intraoral photos & 3D scans" },
];

const DentalConsultationDetails = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#FFF0F5] to-[#FDFEFF] py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="relative" data-aos="fade-right" >
          <img
            src={dentalScan}
            alt="Dental Consultation"
            className="rounded-2xl shadow-2xl object-cover w-full"
          />
          <svg
            className="absolute top-[-30px] left-[-30px] w-32 h-32 text-[#F9DDEB] animate-pulse z-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48..."></path>
          </svg>
        </div>

        {/* Right Content */}
        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            What Is a Dental Consultation?
          </h2>
          <p className="text-gray-700 text-md">
            A dental consultation is more than just a brief look at your teeth. It’s a complete oral health valuation,
            tailored to your unique needs and anxiety.
          </p>

          <div className="space-y-4">
            {consultationChecks.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-gray-700 text-sm" data-aos="fade-up" data-aos-delay={idx * 100}>
                <span className="text-[#650E45] bg-[#FCEAF2] p-2 rounded-full shadow-md">{item.icon}</span>
                <p className="leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm mt-4">
            These tools help us spot hidden problems early and prevent small issues from turning into costly treatments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalConsultationDetails;
