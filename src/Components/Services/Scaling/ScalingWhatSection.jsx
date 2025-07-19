import React from "react";
import { FaTooth, FaWater, FaTools } from "react-icons/fa";
import scaleImg from "../../../assets/services/53.jpg"; // update this with your actual image

const ScalingWhatSection = () => {
  return (
    <section className="w-full bg-[#fff7fa] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-center gap-14">
        {/* Left - Image */}
        <div
          className="md:w-1/2 w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={scaleImg}
            alt="Dental Scaling Procedure"
            className="rounded-2xl shadow-xl w-full h-auto"
          />
        </div>

        {/* Right - Text with Icons */}
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            What Is Dental Scaling?
          </h2>
          <p className="text-gray-700 text-lg">
            Dental scaling is a non-surgical procedure that removes plaque (soft deposits) and tartar (hardened plaque or calculus) from your teeth — especially from below the gum line.
          </p>

          {/* Icons List */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaTooth className="text-2xl text-[#650E45] mt-1" />
              <p className="text-gray-600">
                Plaque that isn't removed by brushing eventually hardens into tartar, which can only be removed expertly.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaTools className="text-2xl text-[#650E45] mt-1" />
              <p className="text-gray-600">
                We use high-frequency ultrasonic scalers that vibrate at a controlled speed to dislodge tartar.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FaWater className="text-2xl text-[#650E45] mt-1" />
              <p className="text-gray-600">
                A fine water spray flushes out bacteria during the process — safe, painless, and highly effective.
              </p>
            </div>
          </div>

          <p className="text-[#650E45] font-medium pt-2">
            The result? A clean, refreshed mouth and healthier gums.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScalingWhatSection;
