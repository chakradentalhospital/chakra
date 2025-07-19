import React from "react";
import {
  FaUserMd,
  FaXRay,
  FaSyringe,
  FaHandsWash,
  FaProcedures,
  FaPhoneAlt,
} from "react-icons/fa";

const safetyPoints = [
  {
    icon: <FaUserMd className="text-2xl text-[#D291B4]" />,
    text: "Experienced Oral & Maxillofacial Surgeon",
  },
  {
    icon: <FaXRay className="text-2xl text-[#D291B4]" />,
    text: "Advanced digital imaging and diagnostics",
  },
  {
    icon: <FaSyringe className="text-2xl text-[#D291B4]" />,
    text: "Pain-free anesthesia techniques",
  },
  {
    icon: <FaHandsWash className="text-2xl text-[#D291B4]" />,
    text: "Rubber dam and sterilization protocols",
  },
  {
    icon: <FaProcedures className="text-2xl text-[#D291B4]" />,
    text: "Separate operation theatre for surgical procedures",
  },
  {
    icon: <FaPhoneAlt className="text-2xl text-[#D291B4]" />,
    text: "Post-op guidance and 24/7 emergency support",
  },
];

const WisdomSafetySection = () => {
  return (
    <section className="w-full bg-[#2f0e22] text-white py-24 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center space-y-10">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold leading-tight text-[#F2C6DC]"
          data-aos="fade-up"
        >
          What Makes Wisdom Tooth Removal Safe at Chakra Dental?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {safetyPoints.map((item, i) => (
            <div
              key={i}
              className="bg-[#3f1730] rounded-xl p-6 flex items-start gap-4 shadow-md"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="700"
            >
              {item.icon}
              <p className="text-[#fce7f1] text-left text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-[#d9a9c2] text-lg pt-6 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          We ensure your safety, hygiene, and comfort every step of the way.
        </p>
      </div>
    </section>
  );
};

export default WisdomSafetySection;
