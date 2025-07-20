import React from "react";
import { FaGraduationCap, FaAward, FaCertificate } from "react-icons/fa";
import bluebg from "../../assets/Home/bluebg.png";
import person from "../../assets/Home/doctor.jpg";

const cards = [
  {
    icon: <FaGraduationCap className="text-2xl text-[#650E45]" />,
    title: "BDS",
    desc: "University of Delhi- Dr.MGR Medical University and research institute",
  },
  {
    icon: <FaAward className="text-2xl text-[#650E45]" />,
    title: "Fellowship",
    desc: " Root Canal Treatment.",
  },
];

const AboutPerson = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 py-20 gap-12">
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <img
          src={bluebg}
          alt="bg"
          className=" w-[400px] h-full object-cover rounded-xl"
        />
        <img
          src={person}
          alt="person"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[330px] md:w-[330px]   lg:w-[360px] h-[440px] md:h-[410px] lg:h-[470px] object-cover rounded-xl shadow-lg z-10"
        />
      </div>

      <div className="w-full md:w-[40%] text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#650E45]">
          About Dr.Shantosh Chakravarthy
        </h2>
        <h4 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
          Senior Pediatric Dentist
        </h4>
        <p className="text-gray-600 mb-6 leading-relaxed">
          With over 11 years of hands-on experience in pediatric dentistry, Dr.Shantosh Chakravarthy  is known for his gentle approach and deep understanding of
          child psychology in dental care. He has received global recognition
          for his research and academic excellence.
        </p>

        <div className="flex flex-col gap-4 w-fit">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#f9f9f9] rounded-xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition"
            >
              <div className="text-[#650E45]">{card.icon}</div>
              <div>
                <h5 className="font-semibold text-base text-[#650E45]">
                  {card.title}
                </h5>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPerson;
