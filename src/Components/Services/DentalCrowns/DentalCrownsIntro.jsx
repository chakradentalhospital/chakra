import React from "react";
import img1 from "../../../assets/services/1.jpg";
import img2 from "../../../assets/services/64.jpg";
import img3 from "../../../assets/services/65.jpg";

const DentalCrownsIntro = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-col gap-4">
            <img
              src={img1}
              alt="Dental Crown 1"
              className="w-full h-[60%] object-cover rounded-2xl shadow-md"
            />
            <img
              src={img2}
              alt="Dental Crown 2"
              className="w-full h-[40%] object-cover rounded-2xl shadow-md"
            />
          </div>
          <div>
            <img
              src={img3}
              alt="Dental Crown 3"
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

        <div data-aos="fade-left" className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] leading-snug">
            Sturdy Shielding for Compromised Teeth
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            When a tooth has been compromised, weakened, or significantly restored, it requires
            more than a filling — it requires long-term protection that can restore function and
            form to your tooth. At Chakra Dental, we provide carefully designed dental crowns that
            cover and shield your tooth like a sturdy, natural cap.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our expert Prosthodontist makes sure that each crown we fit is perfectly matched to
            your adjacent teeth in color, form, and size — not only does it make your tooth
            stronger, but it makes your smile more attractive as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalCrownsIntro;
