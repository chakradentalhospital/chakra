import React from "react";
import implantImg from "../../../assets/services/57.jpg"; // update path as needed
import {
  FaTooth,
  FaBone,
  FaRegSmile,
  FaGripLinesVertical,
  FaHandsHelping,
  FaUserShield,
  FaCheckCircle,
} from "react-icons/fa";

const implantBenefits = [
  { icon: <FaTooth className="text-[#650E45] text-xl" />, text: "Feel completely natural and permanently fixed in place" },
  { icon: <FaBone className="text-[#650E45] text-xl" />, text: "Help prevent bone loss and support jaw structure" },
  { icon: <FaRegSmile className="text-[#650E45] text-xl" />, text: "Return to full chewing and speaking capacity" },
  { icon: <FaGripLinesVertical className="text-[#650E45] text-xl" />, text: "Slip-resistant or clicking and no bonding agents required" },
  { icon: <FaHandsHelping className="text-[#650E45] text-xl" />, text: "Save surrounding teeth from moving" },
  { icon: <FaUserShield className="text-[#650E45] text-xl" />, text: "Enhance your Head Skin and confidence" },
  { icon: <FaCheckCircle className="text-[#650E45] text-xl" />, text: "High success rate and lasting durability" },
];

const DentalImplantInfoSection = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div data-aos="fade-right">
          <img
            src={implantImg}
            alt="Dental Implant Explanation"
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        {/* Content */}
        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-snug">
            What Are Dental Implants?
          </h2>
          <p className="text-gray-700 text-lg">
            A dental implant is a titanium post that is put in surgically into your
            jawbone to serve as a replacement for the missing root of a tooth. After
            it has become part of your bone (a process referred to as
            osseointegration), a specially made crown, bridge, or denture is then
            placed atop it — completing your new tooth.
          </p>
          <p className="text-gray-700 text-[17px]">
            This new approach enables you to eat, smile, and speak with comfort and
            confidence — without the inconvenience of removable dentures or gaps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {implantBenefits.map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div>{item.icon}</div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 pt-4 text-sm">
            In distinction to bridges or artificial teeth that would have to be
            replaced every few years, implants can last for a existence if well cared
            for.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalImplantInfoSection;
