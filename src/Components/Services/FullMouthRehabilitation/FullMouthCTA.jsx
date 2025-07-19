import React from "react";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const FullMouthCTA = () => {
  return (
    <section
      data-aos="fade-up"
      className="bg-[#650E45] text-white px-6 md:px-16 py-20 rounded-t-3xl"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A new beginning Awaits
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Your smile can have a another opportunity. With Chakra Dental's Full
          Mouth Rehabilitation program, you don't dental repair — you take back
          comfort, confidence, and overall satisfaction.
        </p>
        <p className="text-lg md:text-xl font-medium mb-10">
          Call us today or schedule an in-depth consultation to start your total
          smile transformation.
          <br />
          Let's restore your smile, beautifully and forever.
        </p>
        <button className="bg-white text-[#650E45] px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-100 transition-all cursor-pointer hover:scale-110">
          <Link to="/contact">
            <div className="flex items-center gap-2 justify-center">
              <MdCall size={22} />
              Book Consultation
            </div>
          </Link>
        </button>
      </div>
    </section>
  );
};

export default FullMouthCTA;
