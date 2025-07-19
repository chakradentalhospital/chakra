import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "Initial Consultation",
    desc: "We begin with a thorough dental check-up and discussion about your shared objectives.",
  },
  {
    title: "Digital 3D Scanning",
    desc: "Using state-of-the-art digital scanners in dentistry, we take a detailed 3D scan of your teeth — no sticky impressions needed.",
  },
  {
    title: "Treatment Planning",
    desc: "Our Orthodontist designs your custom treatment plan using software that simulates tooth movement and predicts the final result. You’ll even get a preview of your future smile.",
  },
  {
    title: "Tray Fabrication",
    desc: "Your aligner sets are created using premium materials, customized to fit your teeth accurately.",
  },
  {
    title: "Wearing Your Aligners",
    desc: "You wear each set for around 20–22 hours a day, swapping to a new set every 10–14 days. The number of trays differs depending on your case.",
  },
  {
    title: "Monitoring Progress",
    desc: "Periodic visits (every 6–8 weeks) make sure your teeth are shifting as planned. Accommodate can be made if necessary.",
  },
  {
    title: "Dental appliances Post-Treatment",
    desc: "Once your treatment is conclude, we provide retainers to keep your new smile and prevent teeth from retreating.",
  },
];

const ChakraAlignerProcess = () => {
  return (
    <section className="w-full bg-[#FFFAFD] py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[#650E45] mb-12"
          data-aos="fade-up"
        >
          The Chakra Dental Aligners Process
        </h2>

        <div className="hidden md:grid grid-cols-4 gap-8 mb-14">
          {steps.slice(0, 4).map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-left flex flex-col items-start"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#FFF0F7] rounded-full border-2 border-[#650E45] mb-4">
                <FaCheckCircle className="text-[#650E45] text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#650E45] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8">
          {steps.slice(4).map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-left flex flex-col items-start"
              data-aos="fade-up"
              data-aos-delay={(index + 4) * 100}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#FFF0F7] rounded-full border-2 border-[#650E45] mb-4">
                <FaCheckCircle className="text-[#650E45] text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#650E45] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#FFF0F7] rounded-full border-2 border-[#650E45] mb-4">
                <FaCheckCircle className="text-[#650E45] text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#650E45] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChakraAlignerProcess;
