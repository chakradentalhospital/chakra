import React from "react";
import img1 from "../../assets/Home/3.jpg";
import img2 from "../../assets/Home/4.jpg";
import img3 from "../../assets/Home/5.jpg";
import img4 from "../../assets/Home/6.jpg";

const WhoWeAre = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-16 flex flex-col lg:flex-row-reverse gap-12 items-stretch overflow-x-hidden">
      <div
        className="flex-[1.2] grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-10 lg:gap-y-0 relative"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          src={img1}
          alt="img1"
          className="rounded-md object-cover w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[280px]"
        />
        <img
          src={img2}
          alt="img2"
          className="rounded-md object-cover w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[280px] translate-y-4"
        />
        <img
          src={img3}
          alt="img3"
          className="rounded-md object-cover w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[280px] -translate-y-4"
        />
        <img
          src={img4}
          alt="img4"
          className="rounded-md object-cover w-full h-[140px] sm:h-[160px] md:h-[180px] lg:h-[280px]"
        />
      </div>

      {/* Left Side Text Content */}
      <div
        className="flex-[1.3] flex flex-col justify-center"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h5 className="text-[#650E45] text-sm font-bold uppercase tracking-widest mb-2">
          Who We Are
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Chakra</h2>
        <div className="w-1/2 h-[3px] bg-[#650E45] mb-6" />

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          At{" "}
          <span className="text-[#650E45] font-semibold">Chakra Dental Clinic</span>, we trust that a{" "}
          <span className="text-[#650E45] font-semibold">healthy smile</span> is the gateway to overall comfort.
          Established in <span className="text-[#650E45] font-semibold">2023</span>, Chakra Dental was founded with
          one simple yet insightful vision — to serve the community with{" "}
          <span className="text-[#650E45] font-semibold">moral vision</span>,{" "}
          <span className="text-[#650E45] font-semibold">reasonable</span>, and{" "}
          <span className="text-[#650E45] font-semibold">expert dental care</span>.
          <br /><br />
          More than just a dental clinic, we are a{" "}
          <span className="text-[#650E45] font-semibold">service-oriented center</span> where{" "}
          <span className="text-[#650E45] font-semibold">compassion</span> meets{" "}
          <span className="text-[#650E45] font-semibold">clinical excellence</span>.
          <br /><br />
          From the very beginning, our goal has been to promote{" "}
          <span className="text-[#650E45] font-semibold">oral hygiene awareness</span>, especially among{" "}
          <span className="text-[#650E45] font-semibold">underserved populations</span>, and to provide{" "}
          <span className="text-[#650E45] font-semibold">high-quality dental services</span> for every age group.
          <br /><br />
          Our <span className="text-[#650E45] font-semibold">multi-special dental clinic</span> offers extensive dental treatments —
          from <span className="text-[#650E45] font-semibold">basic oral public health care</span> to{" "}
          <span className="text-[#650E45] font-semibold">advanced oral surgeries</span>.
          Whether it’s a <span className="text-[#650E45] font-semibold">child’s first dental visit</span>, an{" "}
          <span className="text-[#650E45] font-semibold">older individual</span> needing{" "}
          <span className="text-[#650E45] font-semibold">full-mouth rehabilitation</span>, or someone suffering from{" "}
          <span className="text-[#650E45] font-semibold">dental injury</span> — we have committed specialists for every requirement.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
