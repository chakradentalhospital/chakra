import React from "react";
import zirconiaImg from "../../../assets/services/63.jpg";
import ceramicImg from "../../../assets/services/66.jpg";

const CrownTypesSection = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white overflow-hidden">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mb-12"
      >
        Types of Crowns at Chakra Dental
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-stretch">
        {[
          {
            title: "Zirconia Crowns",
            bg: "bg-[#F0FBFF]",
            textColor: "text-[#003A63]",
            img: zirconiaImg,
            desc: `Long-lasting, metal-free, and artistic — best suited for both front and back teeth. Zirconia reproduces natural tooth clearness and is perfect for those with metal allergies.`,
          },
          {
            title: "Ceramic Crowns",
            bg: "bg-[#F0FBFF]",
            textColor: "text-[#003A63]",
            img: ceramicImg,
            desc: `These crowns provide great cosmetic outcomes and are most often used in the visible portion of your smile.`,
          },
        ].map((item, index) => (
          <div
            key={index}
            data-aos={index === 0 ? "fade-right" : "fade-left"}
            className={`group ${item.bg} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex-grow p-6 md:p-8 space-y-4 flex flex-col justify-start">
              <h3 className={`text-2xl font-semibold ${item.textColor}`}>
                {item.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-gray-700 text-lg max-w-3xl text-center mx-auto mt-12"
      >
        We guide you in the selection of the proper material depending on your
        dental needs, bite pressure, tooth position, and cosmetic requirements.
      </p>
    </section>
  );
};

export default CrownTypesSection;
