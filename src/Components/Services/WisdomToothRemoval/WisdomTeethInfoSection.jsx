import React from "react";
import img from "../../../assets/services/51.jpg";
import { FaTooth, FaTeethOpen, FaSmileBeam, FaHeadSideVirus } from "react-icons/fa";

const WisdomTeethInfoSection = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden px-5 sm:px-8 md:px-10 lg:px-[64px] md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={img}
            alt="Wisdom Teeth"
            className="w-full rounded-xl shadow-xl"
          />
        </div>

        <div
          className="w-full md:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            What Are Wisdom Teeth?
          </h2>
          <p className="text-gray-700 text-lg">
            Wisdom teeth, also known as third molars, are the terminal set of teeth to mature in the mouth. Most people have four wisdom teeth — two in the upper jaw and two in the lower jaw.
          </p>
          <p className="text-gray-600">
            Since they are the last to appear, there is often inadequate space in the jaw to accommodate them properly, major to impaction, infection, or misalignment. They may grow at an angle, stay trapped under the gum, or push against neighboring teeth.
          </p>

          <div className="space-y-2 pt-2">
            <h3 className="text-xl font-semibold text-[#650E45]">Common symptoms you may need wisdom tooth removal:</h3>
            <ul className="text-gray-700 text-base space-y-3">
              <li className="flex items-start gap-3">
                <FaTooth className="text-[#650E45] mt-1" />
                Pertinacious pain or tenderness at the back of the mouth
              </li>
              <li className="flex items-start gap-3">
                <FaTeethOpen className="text-[#650E45] mt-1" />
                Swelling or redness in the gums behind molars
              </li>
              <li className="flex items-start gap-3">
                <FaSmileBeam className="text-[#650E45] mt-1" />
                Jaw stiffness, earaches, or bad breath
              </li>
              <li className="flex items-start gap-3">
                <FaHeadSideVirus className="text-[#650E45] mt-1" />
                Infection, headaches, shifting teeth, or limited mouth opening
              </li>
            </ul>
            <p className="text-sm text-gray-600 pt-2">
              Even if you feel no pain, regular dental evaluation is crucial — silent wisdom teeth can cause damage to roots and bone over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WisdomTeethInfoSection;
