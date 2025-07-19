import React from "react";
import img1 from "../../../assets/services/30.jpg";
import img2 from "../../../assets/services/33.jpg";
import img3 from "../../../assets/services/39.jpg";
import img4 from "../../../assets/services/35.jpg";
import img5 from "../../../assets/services/24.jpg";
import img6 from "../../../assets/services/37.jpg";

const data = [
  {
    img: img1,
    title: "Nearly Invisible",
    desc: "Aligners are clear and imperceptible, making them perfect for those who want a Cautious solution.",
  },
  {
    img: img2,
    title: "Removable",
    desc: "Unlike braces, aligners can be removed while eating, brushing, or for social occasion. No eating guidelines!",
  },
  {
    img: img3,
    title: "Comfortable to Wear",
    desc: "No wires, a sharp hand gesture, no mouth wounds. Aligners are smooth and customized for your teeth.",
  },
  {
    img: img4,
    title: "Easier Oral Hygiene",
    desc: "Since they’re removable, it’s easy to maintain and avoid issues like gum disease or calculus.",
  },
  {
    img: img5,
    title: "Fewer Dental Visits",
    desc: "With clear aligners, you don’t need to come in for attaching. Most visits are just check-ups to track your progress.",
  },
  {
    img: img6,
    title: "Predictable Results",
    desc: "Using digital planning, your entire journey is charted in advance — from the first tray to your final smile.",
  },
];

const WhyChooseAligners = () => {
  return (
    <section className="w-full bg-[#FFF9FD] py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto space-y-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#650E45]"
          data-aos="fade-up"
        >
          Why Choose Aligners Over Braces?
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.025] duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-6 space-y-3 text-center">
                <h3 className="text-xl font-bold text-[#650E45]">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAligners;
