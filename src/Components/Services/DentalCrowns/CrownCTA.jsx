import React from "react";
import ctaImg from "../../../assets/services/29.jpg";
import { Link } from "react-router-dom";

const CrownCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFF0F7] py-20 px-6 md:px-16">
      <div className="grid md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] leading-snug">
            Book Your Crown Consultation Today
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            Don&apos;t let a broken tooth turn into a missing tooth. At Chakra
            Dental, we provide precision-made crowns that restore your bite and
            your self-confidence.
          </p>
          <Link to="/contact">
            <button className="bg-[#650E45] hover:bg-[#4e0935] transition text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 duration-300">
              Book Appointment
            </button>
          </Link>
        </div>
        <div
          data-aos="fade-left"
          className="relative group rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={ctaImg}
            alt="Book Crown Consultation"
            className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300 rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default CrownCTA;
