import React from "react";

const ImplantAftercareSection = () => {
  return (
    <section className="w-full bg-[#fdf4f8] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div
          className="group relative bg-white shadow-lg p-8 rounded-xl space-y-5 border-t-4 border-[#650E45] overflow-hidden transition-all duration-500"
          data-aos="fade-up"
        >
          <div className="absolute top-0 left-0 h-1 w-1 bg-[#650E45] group-hover:h-full group-hover:w-full transition-all duration-500 z-0" />

          <div className="relative z-10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#4a0b32] group-hover:text-white transition-all">
              Relieve & Aftercare
            </h3>
            <p className="text-[#444] leading-relaxed group-hover:text-white transition-all">
              Following the implant placement, healing occurs within 3 to 6 months as the bone soaks up the implant.
              A short-term crown can be suitable during healing, followed by your permanent crown when the site is ready.
            </p>
            <p className="text-[#444] leading-relaxed group-hover:text-white transition-all">
              Habitate good oral hygiene, visit regularly for carry-out, and renounce from smoking for best results.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="group relative bg-white shadow-lg p-8 rounded-xl space-y-5 border-t-4 border-[#650E45] overflow-hidden transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="absolute top-0 left-0 h-1 w-1 bg-[#650E45] group-hover:h-full group-hover:w-full transition-all duration-500 z-0" />

          <div className="relative z-10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#4a0b32] group-hover:text-white transition-all">
              Regain Your Smile Today
            </h3>
            <p className="text-[#444] leading-relaxed group-hover:text-white transition-all">
              Missing teeth don't have to stop you. If you've lost one or multiple teeth or require full-mouth rehabilitation,
              dental implants at Chakra Dental provide a life-altering alternative.
            </p>
            <button className="mt-4 px-6 py-3 bg-[#650E45] text-white font-semibold rounded-full group-hover:bg-[#7e165b] transition-all">
              Book Your Implant Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Full Width CTA Card */}
      <div
        className="mt-16 group relative bg-[#650E45] text-white rounded-xl p-10 md:p-14 text-center overflow-hidden shadow-lg"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:tracking-wide transition-all">
          Call us today or schedule an implant consultation online.
        </h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Let&apos;s restore your smile — and confidence — with dental implants that look and feel like natural teeth.
        </p>
      </div>
    </section>
  );
};

export default ImplantAftercareSection;
