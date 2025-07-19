import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ZirconiaCTA = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-[#fff0f5] to-[#ffe6ec] overflow-hidden">
      <div
        className="relative z-10 max-w-3xl mx-auto text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
          Zirconia Helps Your Smile Shine
        </h2>
        <p className="text-gray-700 text-lg mb-8 px-2">
          Whether you need a new crown or one repaired, Zirconia is the ultimate
          solution for a strong, gorgeous, and long-lasting crown — and Chakra
          Dental is your go-to provider.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <Link to="/contact">
            <button className="flex items-center justify-center gap-2 bg-[#650E45] text-white px-6 py-3 rounded-full hover:bg-[#820f57] transition duration-300 shadow-md">
              <FaPhoneAlt /> Call Us Now
            </button>
          </Link>
          <Link to="/contact">
            <button className="flex items-center justify-center gap-2 bg-white text-[#650E45] border-2 border-[#650E45] px-6 py-3 rounded-full hover:bg-[#650E45] hover:text-white transition duration-300 shadow-md">
              <MdOutlineEmail /> Schedule Appointment
            </button>
          </Link>
        </div>

        <p className="text-[#444] text-sm">
          Let us treat your tooth to the royal treatment it deserves — with a
          crown that delivers both aesthetics and durability.
        </p>
      </div>
    </section>
  );
};

export default ZirconiaCTA;
