import React from "react";
import consult1 from "../../../assets/services/24.jpg"; // Replace with actual paths
import consult2 from "../../../assets/services/20.jpg";
import { FaUserCheck, FaTooth, FaSmileBeam, FaXRay } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const WhoAndTechSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFF5F9] to-[#F7F7FD] py-20 px-6 md:px-10 space-y-24 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <img
            src={consult1}
            alt="Who Should Get Consultation"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        <div data-aos="fade-left" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Who Should Get a Dental Consultation?
          </h2>
          <p className="text-gray-700 text-md">Everyone! Whether you're:</p>
          <ul className="list-none space-y-3 text-gray-700 text-[15px]">
            <li className="flex items-start gap-2">
              <FaUserCheck className="text-[#650E45] mt-1" />A first-time
              visitor to Chakra Dental
            </li>
            <li className="flex items-start gap-2">
              <FaTooth className="text-[#650E45] mt-1" />
              Experiencing pain or swelling
            </li>
            <li className="flex items-start gap-2">
              <FaSmileBeam className="text-[#650E45] mt-1" />
              Looking to improve your smile
            </li>
            <li className="flex items-start gap-2">
              <MdDesignServices className="text-[#650E45] mt-1" />
              Planning for implants, braces, or major dental work
            </li>
            <li className="flex items-start gap-2">
              <FaUserCheck className="text-[#650E45] mt-1" />
              Needing a second opinion
            </li>
            <li className="flex items-start gap-2">
              <FaUserCheck className="text-[#650E45] mt-1" />
              Or just due for your 6-month check-up
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            A consultation is the first step to clearness and assurance in your
            smile journey.
          </p>
        </div>
      </div>

      {/* Technology-Driven Approach */}
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12">
        <div data-aos="fade-left" className="md:w-1/2 w-full">
          <img
            src={consult2}
            alt="Tech Driven Dental"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

        <div data-aos="fade-right" className="md:w-1/2 w-full space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45]">
            Our Technology-Driven Approach
          </h2>
          <p className="text-gray-700 text-md">
            We use the latest diagnostic tools to make discussions more correct
            and comfortable:
          </p>
          <ul className="list-none space-y-3 text-gray-700 text-[15px]">
            <li className="flex items-start gap-2">
              <FaXRay className="text-[#650E45] mt-1" />
              Digital X-rays (less radiation, instant results)
            </li>
            <li className="flex items-start gap-2">
              <FaTooth className="text-[#650E45] mt-1" />
              Intraoral cameras – see what we see
            </li>
            <li className="flex items-start gap-2">
              <FaTooth className="text-[#650E45] mt-1" />
              3D CBCT scans for precise planning
            </li>
            <li className="flex items-start gap-2">
              <FaSmileBeam className="text-[#650E45] mt-1" />
              Smile simulation software for cosmetic consultations
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            Your records are fully digital, and each plan is clearly documented
            for your reference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoAndTechSection;
