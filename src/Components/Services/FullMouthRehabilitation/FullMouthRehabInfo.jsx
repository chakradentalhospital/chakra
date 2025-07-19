import React from "react";
import { MdAccessTime, MdEmojiEmotions } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

const FullMouthRehabInfo = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      {/* How Long Does It Take? */}
      <div data-aos="fade-up" className="mb-20 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#F5E3F0] p-4 rounded-full shadow-md">
            <MdAccessTime className="text-[#650E45]" size={40} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
          How Long Does It Take?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Based on your condition and treatment strategy, full mouth
          rehabilitation could take several weeks to months. We adopt a staged
          process to maximize healing and accuracy at every phase. You will
          always be kept in the loop regarding timelines, processes, and results
          throughout the process.
        </p>
      </div>

      {/* Life After Restoration */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-[#FFF0F7] rounded-2xl p-10 md:p-14 shadow-xl max-w-5xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#F5E3F0] p-3 rounded-full shadow-md">
            <MdEmojiEmotions className="text-[#650E45]" size={36} />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#650E45]">
            Life After Restoration
          </h3>
        </div>

        <p className="text-gray-700 text-lg mb-6">
          After we're done, you'll get to:
        </p>
        <ul className="space-y-4 text-gray-800 text-base md:text-lg font-medium">
          <li className="flex items-start gap-3">
            <MdCheckCircle
              className="text-[#650E45] mt-1 min-w-[22px] min-h-[22px]"
              size={22}
            />
            A functional bite
          </li>
          <li className="flex items-start gap-3">
            <MdCheckCircle
              className="text-[#650E45] mt-1 min-w-[22px] min-h-[22px]"
              size={22}
            />
            Periodontally healthy and teeth
          </li>
          <li className="flex items-start gap-3">
            <MdCheckCircle
              className="text-[#650E45] mt-1 min-w-[22px] min-h-[22px]"
              size={22}
            />
            Enhanced facial aesthetics
          </li>
          <li className="flex items-start gap-3">
            <MdCheckCircle
              className="text-[#650E45] mt-1 min-w-[22px] min-h-[22px]"
              size={22}
            />
            Eating and speaking self-assured with no restrictions
          </li>
          <li className="flex items-start gap-3">
            <MdCheckCircle
              className="text-[#650E45] mt-1 min-w-[22px] min-h-[22px]"
              size={22}
            />
            A smile that feels as good as it looks
          </li>
          <li className="flex items-start gap-3">
            <MdCheckCircle
              className="text-[#650E45] mt-1 min-w-[22px] min-h-[22px]"
              size={22}
            />
            A lifetime of oral strength with right care
          </li>
        </ul>

        <p className="text-gray-700 text-lg mt-6">
          We will walk you through maintenance procedures and routine checkups
          so your results can last endlessly.
        </p>
      </div>
    </section>
  );
};

export default FullMouthRehabInfo;
