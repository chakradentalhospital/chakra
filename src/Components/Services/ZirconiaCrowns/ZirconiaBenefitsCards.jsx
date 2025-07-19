import React from "react";
import img1 from "../../../assets/services/67.jpg";
import img2 from "../../../assets/services/49.jpg";
import img3 from "../../../assets/services/3.jpg";
import img4 from "../../../assets/services/6.jpg";
import img5 from "../../../assets/services/21.jpg";
import img6 from "../../../assets/services/37.jpg"; 

const benefitCards = [
  {
    img: img1,
    title: "Higher Strength",
    desc: "Zirconia is 3–5 times stronger than porcelain — perfect for molars.",
  },
  {
    img: img2,
    title: "Quality Aesthetics",
    desc: "The transparency of zirconia mimics natural enamel beautifully.",
  },
  {
    img: img3,
    title: "Metal-Free & Tissue-Friendly",
    desc: "Safe for those with metal allergies. No dark lines or irritation.",
  },
  {
    img: img4,
    title: "Long-Lasting Performance",
    desc: "Can last 15+ years with proper care — highly durable and stable.",
  },
  {
    img: img5,
    title: "Minimally Invasive Prep",
    desc: "Advanced CAD/CAM tech preserves more of your natural tooth.",
  },
  {
    img: img6,
    title: "All-Teeth Friendly",
    desc: "Perfect for both front and back teeth — beauty + power combined.",
  },
];

const ZirconiaBenefitsCards = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mb-12">
        Benefits of Selecting Zirconia Crowns
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefitCards.map((card, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-xl"
            data-aos="zoom-in"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6 text-white transition duration-500">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZirconiaBenefitsCards;
