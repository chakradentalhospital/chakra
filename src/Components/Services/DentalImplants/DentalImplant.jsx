import React from "react";
import {
  FaXRay,
  FaBed,
  FaMapMarkedAlt,
  FaTooth,
  FaPalette,
  FaHardHat,
  FaUserCheck,
  FaHeartbeat,
  FaSmokingBan,
  FaSync,
  FaTeethOpen,
} from "react-icons/fa";

import implantImg from "../../../assets/Home/3.jpg";
import patientImg from "../../../assets/Home/4.jpg"; // Replace with actual image paths

const implantProcess = [
  { icon: <FaXRay />, title: "3D scans for precise bone mapping" },
  { icon: <FaBed />, title: "Local or general anaesthesia for painless placement" },
  { icon: <FaMapMarkedAlt />, title: "Surgical guides for careful implant placement" },
  { icon: <FaTooth />, title: "High-quality titanium implants compatible with your bone" },
  { icon: <FaPalette />, title: "Individually made crowns to match natural teeth" },
  { icon: <FaHardHat />, title: "Bone grafting or sinus lifting if needed" },
];

const candidates = [
  { icon: <FaUserCheck />, title: "You have one or more missing teeth" },
  { icon: <FaHeartbeat />, title: "You have healthy gums and enough jawbone" },
  { icon: <FaSmokingBan />, title: "You are not a heavy smoker or ungoverned diabetic" },
  { icon: <FaSync />, title: "You crave a long-term, fixed solution" },
  { icon: <FaTeethOpen />, title: "You wish to replace removable artificial teeth" },
];

const ZigZagCard = ({ icon, title, reverse }) => (
  <div
    className="flex items-start gap-4 bg-[#fdf4f8] p-5 rounded-xl shadow transition-all"
    data-aos="fade-up"
  >
    <div className="text-2xl text-[#650E45]">{icon}</div>
    <p className="text-[#2d2d2d] font-medium">{title}</p>
  </div>
);

const DentalImplant = () => {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] space-y-28 overflow-hidden">
      {/* Implant Process Section */}
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Cards */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]" data-aos="fade-up">
            Expert Implant Placement at Chakra Dental
          </h2>
          <div className="space-y-4">
            {implantProcess.map((item, idx) => (
              <ZigZagCard key={idx} icon={item.icon} title={item.title} reverse={idx % 2 !== 0} />
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 w-full lg:w-[400px]" data-aos="fade-left">
          <img
            src={implantImg}
            alt="Implant Procedure"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>
      </div>

      {/* Candidate Section */}
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full lg:w-[400px]" data-aos="fade-right">
          <img
            src={patientImg}
            alt="Candidate for Implants"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Right: Cards */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]" data-aos="fade-up">
            Hopeful Candidates for Dental Implants
          </h2>
          <div className="space-y-4">
            {candidates.map((item, idx) => (
              <ZigZagCard key={idx} icon={item.icon} title={item.title} reverse={idx % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalImplant;
