import React from "react";
import alignerImg from "../../../assets/Home/8.jpg";
import teeth from "../../../assets/Home/theeth.png";
import { Link } from "react-router-dom";

const InvisalignAppointment = () => {
  return (
    <section className="relative px-5 md:px-10 py-16 flex justify-center overflow-hidden">
      <img
        src={teeth}
        alt="Teeth"
        className="absolute right-[0px] bottom-0 h-[250px] xl:h-[300px] xl:right-[80px] animate-bounceCustom z-10 scale-x-[-1]"
      />

      <div className="max-w-[1000px] w-full bg-[#650E45] text-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-0">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-[28px] font-semibold leading-snug mb-4">
            Book Your Invisalign Consultation Today
          </h2>
          <p className="mb-4 text-lg">
            Ready to transform your smile non-metallic? <br />
            Invisalign at Chakra Dental is more than just a beautification —
            it’s an investment in your self-assurance, relief, and long-term
            dental health.
          </p>
          <p className="text-lg">
            Call now or book online for your Invisalign consultation with our
            expert team. Let’s get started on your invisible path to a
            beautiful, lasting smile!
          </p>
          <Link to="/contact">
            <button className="mt-4 px-6 py-3 bg-white text-[#650E45] font-semibold rounded-full hover:bg-gray-200 transition-all">
              Book an Appointment
            </button>
          </Link>
        </div>

        <div className="flex-shrink-0">
          <img
            src={alignerImg}
            alt="Invisalign Consultation"
            className="h-[250px] md:h-[300px] w-auto border-4 border-white rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default InvisalignAppointment;
