import React from "react";
import img1 from "../../../assets/services/26.jpg";
import img2 from "../../../assets/services/27.jpg";

const FearFreeSection = () => {
  return (
    <section className="w-full bg-white px-6 md:px-10 py-20 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto space-y-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div
            className="w-full md:w-1/2 space-y-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
              Fear Is Normal — But It Shouldn’t Stop You
            </h2>

            <p className="text-gray-700 text-[16px] leading-relaxed">
              countless of people suffer from dentophobia, which anticipate them from seeking timely care. postponing can lead to:
            </p>

            <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "acute infections",
                "Tooth loss",
                "Increased cost and complication",
                "Lowered self-esteem due to visible dental issues",
              ].map((point, idx) => (
                <li
                  key={idx}
                  className="bg-[#FFF3F8] border border-[#F2D8E6] p-4 rounded-xl shadow-md text-gray-800 text-sm hover:shadow-lg transition duration-300"
                >
                  {point}
                </li>
              ))}
            </ul>

            <p className="text-gray-700 text-[16px] leading-relaxed">
              Our team is trained not only in dental science but also in empathetic communication. We take the time to understand your fears, explain every step before we begin, and never pressure you into a treatment you’re not ready for.
            </p>

            <p className="text-gray-700 text-[16px] leading-relaxed font-semibold">
              You’re in full control — and we’ll only proceed when you feel comfortable.
            </p>
          </div>

          <div
            className="w-full md:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={img1}
              alt="Fear-Free Care"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src={img2}
              alt="Fear-Free Environment"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>

          <div
            className="w-full md:w-1/2 space-y-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
              What Makes Chakra Dental a “Fear-Free” Zone?
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Warm, welcoming environment",
                "Soothing interiors and background music",
                "Trained staff for managing dental fear",
                "Open booking slots — no long waits",
                "Post-treatment care and follow-up to ensure healing",
                "Private consultation spaces for comfortable discussions"
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFF3F8] border border-[#E0E0F5] p-4 rounded-xl shadow-md text-gray-800 text-sm hover:shadow-lg transition duration-300"
                >
                  {point}
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-[16px] leading-relaxed">
              Our goal isn’t just to fix your teeth — it’s to change the way you feel about dental care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FearFreeSection;
