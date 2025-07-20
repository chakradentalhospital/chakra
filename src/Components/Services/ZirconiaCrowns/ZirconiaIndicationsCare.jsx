import React from "react";
import { FaTooth, FaRedo, FaTeeth, FaTools, FaXRay, FaAllergies,  FaIceCream, FaUserCheck, FaShieldAlt } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi"; 
import img1 from "../../../assets/services/68.jpg";
import img2 from "../../../assets/services/69.jpg";
import img3 from "../../../assets/services/70.jpg";
import img4 from "../../../assets/services/41.jpg";

const indications = [
  {
    icon: <FaTools size={30} />,
    text: "You have a tooth that has been manage with root canal",
  },
  {
    icon: <FaTooth size={30} />,
    text: "You need to envelop a broken or split tooth",
  },
  {
    icon: <FaRedo size={30} />,
    text: "You want to return old ceramic or metal crowns",
  },
  {
    icon: <FaTeeth size={30} />,
    text: "Noticeable damage on front teeth",
  },
  {
    icon: <FaXRay size={30} />,
    text: "Need crowns as Fixed link or implants",
  },
  {
    icon: <FaAllergies size={30} />,
    text: "Are metal sensitivity or prefer a metal-free, all-natural rebuild",
  },
];

const care = [
  {
    icon: <GiToothbrush size={30} />,
    title: "Brush and thread twice daily",
    img:img1,
  },
  {
    icon: <FaIceCream size={30} />,
    title: "Keep clear from penetrating hard things like ice or pens",
    img: img2,
  },
  {
    icon: <FaUserCheck size={30} />,
    title: "Visit your dentist for periodic checkups and cleanings",
    img:img3,
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Mouthguard wearing if you crush your teeth",
    img: img4,
  },
];

const ZirconiaIndicationsCare = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mb-12">
        When Are Zirconia Crowns Indicated?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {indications.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-[#650E45]/40 transition duration-300 border"
            data-aos="fade-up"
          >
            <div className="bg-[#650E45]/10 p-4 rounded-full mb-4 text-[#650E45] animate-pulse">
              {item.icon}
            </div>
            <p className="text-gray-800 text-sm">{item.text}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto text-[15px]">
        Our Prosthodontist will walk you through material specifications and advise you on what works best for function, location, and primacy for cosmetics.
      </p>

      {/* CARE SECTION */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#650E45] mt-24 mb-12">
        Taking Care of Your Zirconia Crown
      </h2>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto">
        {care.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            data-aos="fade-up"
          >
            <div className="w-full md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl w-full h-[250px] object-cover shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <div className="text-[#650E45] bg-[#650E45]/10 w-fit p-3 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#650E45]">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-600 mt-12 max-w-2xl mx-auto text-[15px]">
        With positive routines, your crown can be of use your tooth beautifully for many generation.
      </p>
    </section>
  );
};

export default ZirconiaIndicationsCare;
