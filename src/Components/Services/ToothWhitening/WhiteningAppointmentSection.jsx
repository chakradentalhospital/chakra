import React from "react";
import whiteningImg from "../../../assets/Home/8.jpg";
import teeth from "../../../assets/Home/theeth.png";

const WhiteningAppointmentSection = () => {
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
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-[28px] font-semibold leading-snug mb-4">
            Book Your Whitening Session Today
          </h2>
          <p className="mb-4 text-lg">
            Ready to boost your image with a brilliant smile? <br />
            At Chakra Dental, we merge clinical awesomeness with enhanced beauty treatment techniques to give you the smile makeover you deserve.
          </p>
          <p className="text-lg">
            Call us now or book your virtual meeting. <br />
            Let’s bring out the sparkling, most joyful of your smiles — in just one visit.
          </p>
          <button className="mt-4 px-6 py-3 bg-white text-[#650E45] font-semibold rounded-full hover:bg-gray-200 transition-all">
            Book an Appointment
          </button>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={whiteningImg}
            alt="Whitening"
            className="h-[250px] md:h-[300px] w-auto border-4 border-white rounded-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhiteningAppointmentSection;
