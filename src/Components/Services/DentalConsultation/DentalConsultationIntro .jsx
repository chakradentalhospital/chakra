import React from "react";
import img1 from "../../../assets/services/1.jpg";
import img2 from "../../../assets/services/2.jpg";

const DentalConsultationIntro = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-10 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Left - Images */}
        <div
          className="relative md:w-1/2 w-full h-[220px]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Dental Checkup"
            className="w-[55%] rounded-xl shadow-lg absolute top-0 left-0 z-20"
          />
          <img
            src={img2}
            alt="Cosmetic Consultation"
            className="w-[55%] rounded-xl shadow-lg absolute bottom-0 right-0 z-10"
          />
        </div>

        {/* Right - Exact Text */}
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            Personalized Consultations, Tailored Just for You
          </h2>
          <p className="text-gray-700 text-lg">
            At Chakra Dental, we accept that the foundation of great oral health begins with a extensive, personalized dental consultation. Whether you’re coming in for a general health check, experiencing pain, or considering cosmetic improvements, our expert dentists are here to guide you with clarity,  compassion, and clinical accuracy.
          </p>
          <p className="text-gray-600">
            We don't hurry through your consultation — we take time to listen, understand, and explain. Our goal is to make you relaxed, knowledgeable, and confident in your oral health resolve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalConsultationIntro;
