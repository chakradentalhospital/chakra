import React from "react";
import implantImg from "../../../assets/services/5.jpg";
import { FaTooth } from "react-icons/fa";

const DentalImplantIntro = () => {
  return (
    <section className="w-full bg-[#fdf6f9] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative" data-aos="fade-right">
          <div className="absolute -top-6 -left-6 bg-[#650E45] p-3 rounded-full shadow-lg">
            <FaTooth className="text-white text-2xl" />
          </div>
          <img
            src={implantImg}
            alt="Dental Implant Solution"
            className="rounded-xl shadow-xl border-4 border-white"
          />
        </div>

        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-snug">
            Permanent Solution to Missing Teeth
          </h2>
          <p className="text-gray-700 text-lg">
            Missing one or extra teeth can affect more than your smile — it can
            impact your ability to chew, well-spoken, and self-assured in daily life.
          </p>
          <p className="text-gray-600 text-[17px]">
            At Chakra Dental, we provide eading-edge dental implant solutions that
            offer the best replacement for natural teeth — both province-sensible and
            appearance-wise.
          </p>
          <p className="text-gray-600 text-[17px]">
            With careful planning, the latest technology, and a skilled Oral &
            Maxillofacial Surgeon, we restore your smile with implants that are
            permanent, natural in appearance, and built to last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalImplantIntro;
