import React from "react";
import implantImg from "../../../assets/Home/8.jpg";
import teeth from "../../../assets/Home/theeth.png";
import { Link } from "react-router-dom";

const WisdomApoinment = () => {
  return (
    <section className="relative px-5 md:px-10 py-16 flex justify-center overflow-hidden">
      {/* Background Teeth Image */}
      <img
        src={teeth}
        alt="Teeth"
        className="absolute right-0 bottom-0 h-[250px] xl:h-[300px] xl:right-[80px] animate-bounceCustom z-10 scale-x-[-1]"
      />

      {/* Main CTA Card */}
      <div className="max-w-[1000px] w-full bg-[#650E45] text-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-0">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-[28px] font-semibold leading-snug">
            Don’t Wait Until It Hurts
          </h2>
          <p className="text-lg">
            Wisdom teeth may seem harmless, but delaying removal can lead to
            serious problems like infections, cysts, tooth decay, and
            orthodontic shifting.
          </p>
          <p className="text-lg">
            Whether you’re experiencing pain or just want to get checked, our
            team is here to help you take action early — the pain-free way.
          </p>
          <p className="text-lg font-medium">
            Call now or book your consultation online to schedule your wisdom
            tooth evaluation with our surgical expert at Chakra Dental.
          </p>
          <p className="text-md italic text-white/80">
            Let’s take the wisdom — and the pain — out of wisdom teeth,
            together.
          </p>

          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-white text-[#650E45] font-semibold rounded-full hover:bg-gray-200 transition-all">
              Book an Appointment
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={implantImg}
            alt="Wisdom Tooth"
            className="h-[250px] md:h-[300px] w-auto border-4 border-white rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WisdomApoinment;
