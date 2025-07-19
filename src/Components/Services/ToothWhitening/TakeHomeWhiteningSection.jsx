import React from "react";
import { FaBoxOpen, FaBookOpen, FaClock } from "react-icons/fa";

const kitDetails = [
  {
    icon: <FaBoxOpen className="text-[#650E45] text-2xl group-hover:text-white transition-colors" />,
    title: "GPIO Kit",
    desc: "Access to personalized dentures composed from dental impressions.",
  },
  {
    icon: <FaBookOpen className="text-[#650E45] text-2xl group-hover:text-white transition-colors" />,
    title: "Whitening Gel + Guide",
    desc: "Includes whitening gel and detailed instructions for proper application.",
  },
  {
    icon: <FaClock className="text-[#650E45] text-2xl group-hover:text-white transition-colors" />,
    title: "Safe & Gradual Results",
    desc: "Use daily for 10–14 days for progressive shade change with no frequent visits.",
  },
];

const TakeHomeWhiteningSection = () => {
  return (
    <section className="w-full bg-[#fdf6f9] py-20 px-5 sm:px-8 md:px-10 lg:px-[64px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto space-y-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#650E45] text-center"
          data-aos="fade-up"
        >
          Take-Home Whitening Kits
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {kitDetails.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:bg-[#650E45] transition-all duration-300"
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-[#650E45] group-hover:text-white mb-1 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 group-hover:text-white text-sm transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-center text-gray-700 text-lg max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          These kits are excellent for post-treatment maintenance or gradual whitening. With daily use over a span of 10 to 14 days, users can achieve a progressive shade change without the need for constant dental appointments.
        </p>
      </div>
    </section>
  );
};

export default TakeHomeWhiteningSection;
