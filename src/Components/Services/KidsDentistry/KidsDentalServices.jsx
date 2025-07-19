import React from "react";
import { FaTooth, FaSmile, FaTeeth, FaChild } from "react-icons/fa";
import { GiToothbrush, GiTooth } from "react-icons/gi";
import { MdHealthAndSafety, MdOutlineChildCare } from "react-icons/md";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import fearFreeImg from "../../../assets/services/22.jpg";
import {
  FaTools,
  FaVolumeDown,
  FaTv,
  FaHandsHelping,
  FaUserMd,
} from "react-icons/fa";

const serviceData = [
  {
    title: "First Dental Visit & Counseling",
    description:
      "We approve your child’s first dental visit by their first birthday or within 6 months of their first tooth. This helps initiate a dental home early and allows for anticipation care.",
    icon: <FaChild size={28} />,
  },
  {
    title: "Preventive Dental Care",
    description:
      "Regular examinations, dental cleanings, fluoride treatments, and pit and dental sealants help prevent cavities and implant good hygiene habits from an early age.",
    icon: <GiToothbrush size={28} />,
  },
  {
    title: "Cavity Detection & Fillings",
    description:
      "Kids are recumbent to cavities due to high-sugar diets and incorrect brushing. We glance early signs of decay and use tooth-colored, biofunctional fillings that are painless and lasting.",
    icon: <GiTooth size={28} />,
  },
  {
    title: "Pediatric Root Canal (Pulpectomy)",
    description:
      "Intense decay in baby teeth is treated with root canal to save the tooth and maintain space for root canal.",
    icon: <FaTooth size={28} />,
  },
  {
    title: "Milk Tooth Removal",
    description:
      "When extraction is necessary, we perform the practice gently under local anesthesia, guaranteeing your child’s comfort.",
    icon: <FaSmile size={28} />,
  },
  {
    title: "Space Maintainers",
    description:
      "If a milk tooth is lost early, we use space defenders to prevent pack or disarrangement in permanent teeth.",
    icon: <MdOutlineChildCare size={28} />,
  },
  {
    title: "Habit Breaking Appliances",
    description:
      "Thumb sucking, mouth breathing, tongue thrusting — we provide appliances and advising to break these habits early.",
    icon: <GiTooth size={28} />,
  },
  {
    title: "Emergency Dental Care",
    description:
      "Falls and accidents are common in children. We offer exigency care for cracked, fractured, or avulsed tooth, ensuring timely treatment and absolute recovery.",
    icon: <MdHealthAndSafety size={28} />,
  },
  {
    title: "Comfort-First Approach",
    description:
      "We know visiting the dentist can be scary. That’s why we focus on creating a safe, calming space where your child feels seen, heard, and totally at ease — every single time.",
    icon: <BiSolidHappyHeartEyes size={28} />,
  },
];

const features = [
  {
    icon: <FaTools size={20} />,
    text: "Kid-sized dental instruments for comfort",
  },
  {
    icon: <FaVolumeDown size={20} />,
    text: "Gentle, soothing communication styles",
  },
  {
    icon: <FaTv size={20} />,
    text: "Cartoons, music & visual distractions during treatment",
  },
  {
    icon: <FaHandsHelping size={20} />,
    text: "“Tell-Show-Do” technique to ease dental anxiety",
  },
  {
    icon: <FaUserMd size={20} />,
    text: "Certified sedation & general anesthesia for complex cases",
  },
];
const SpecializedKidsServices = () => {
  return (
    <section className="w-full bg-[#FDF6F9] py-16 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] mb-4">
          Our Specialized Kids Dental Services Include
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At Chakra Dental, we provide comprehensive pediatric dental services
          tailored to comfort, educate, and treat children with the utmost care
          and empathy.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {serviceData.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white rounded-xl shadow-md p-6 text-center group hover:shadow-xl transition-all duration-300 w-full max-w-[350px]"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-[#650E45] text-white flex items-center justify-center rounded-full animated-blob">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#650E45] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="w-full bg-[#FFF0F6] py-20 px-6 md:px-10">
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left image */}
          <div className="md:w-1/2">
            <img
              src={fearFreeImg}
              alt="Fear Free Dental"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-white/30">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#650E45] mb-8 text-center">
              Creating a Fear-Free Dental Experience
            </h3>

            <div className="space-y-1">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#FDF6F9] shadow-inner hover:shadow-md transition-all"
                >
                  {/* Blob Icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-[#650E45] text-white rounded-full animated-blob shrink-0">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-sm md:text-base font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SpecializedKidsServices;
