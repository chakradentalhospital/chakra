import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../../assets/About/a1.jpg";
import img2 from "../../assets/About/a2.jpg";
import img3 from "../../assets/About/a3.jpg";
import img4 from "../../assets/About/a4.jpg";
import img5 from "../../assets/About/a5.jpg";
import img6 from "../../assets/About/a6.jpg";
import img7 from "../../assets/About/a7.jpg";

const data = [
  {
    title: "Pediatric Dentistry",
    content:
      "Children are treated with compassion and expertise by our in-house Pediatric Dental Specialist, ensuring comfort during every visit.",
    image: img1,
  },
  {
    title: "Advanced Root Canal Treatment",
    content:
      "Our root canal specialist uses advanced 3D close-up techniques and strict sterilization protocols including Rubber Dam isolation to ensure lasting success and a pain-free experience.",
    image: img2,
  },
  {
    title: "Oral Surgery & Trauma Care",
    content:
      "Wisdom tooth removal, cyst/tumor removal, and trauma surgeries are handled by our Oral & Maxillofacial Surgeon in a fully-equipped OT in partnership with a multispecialty hospital.",
    image: img3,
  },
  {
    title: "Smile Designing & Braces",
    content:
      "Our Orthodontist crafts stunning smiles using metal/ceramic braces and global brands like Invisible Braces, Delusion, and MSA.",
    image: img4,
  },
  {
    title: "Crowns, Bridges & Implants",
    content:
      "Missing teeth? We’ve got you covered. Our Prosthodontist customizes Zirconia crowns, bridges, and implants to restore both function and beauty.",
    image: img5,
  },
  {
    title: "Laser & Gum Treatments",
    content:
      "Our Periodontist addresses poor oral hygiene and gum disease through advanced laser treatments and deep cleaning procedures.",
    image: img6,
  },
];

const WhyChoose = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 space-y-24 overflow-x-hidden">
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-3">
          Why Choose Chakra Dental?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Trusted care, expert hands — discover what makes us a preferred dental
          destination.
        </p>
      </div>

      {data.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col-reverse lg:flex-row items-center gap-10 ${
            idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div
            className="w-full lg:w-1/2"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[320px] object-cover rounded-md shadow-md"
            />
          </div>
          <div
            className="w-full lg:w-1/2 space-y-4"
            data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
             data-aos-duration="1000"
          >
            <h3 className="text-2xl font-bold text-[#650E45]">{item.title}</h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {item.content}
            </p>
            <div className="flex items-center gap-2 text-[#650E45] font-medium">
              <FaCheckCircle /> Trusted & Proven Expertise
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          <img
            src={img7}
            alt="Our Promise"
            className="w-full h-[320px] object-cover rounded-md shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4" data-aos="fade-left">
          <h3 className="text-2xl font-bold text-[#650E45]">Our Promise</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            We treat every patient like family. Your safety and comfort are our
            top priority...
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            With a team of certified experts, high-tech equipment...
          </p>
          <div className="flex items-center gap-2 text-[#650E45] font-medium">
            <FaCheckCircle /> Trusted & Proven Expertise
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
