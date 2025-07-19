import React from "react";
import img1 from "../../assets/Home/1.jpg";
import img3 from "../../assets/Home/2.jpg";

const WhoWeAre = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-20 py-16 flex flex-col lg:flex-row gap-12 items-stretch">
      <div className="flex-[1.2] flex flex-col gap-4 justify-between">
        <div className="flex h-[40%] gap-4">
          <img
            src={img1}
            alt="img1"
            className="w-1/2 h-full object-cover rounded-md"
          />
          <div className="w-1/2 bg-[#650E45] border-2 border-white rounded-md text-white flex flex-col items-center justify-center text-center md:py-8 px-2">
            <h2 className=" text-4xl md:text-8xl lg:text-9xl font-extrabold leading-none">
              20
            </h2>
            <p className=" text-md md:text-lg font-medium mt-1">
              Years Experience
            </p>
          </div>
        </div>

        <div className="h-[60%]">
          <img
            src={img3}
            alt="img3"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      <div className="flex-[1.3] flex flex-col justify-center">
        <h5 className="text-[#650E45] text-sm font-bold uppercase tracking-widest mb-2">
          Who We Are
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Chakra
        </h2>
        <div className="w-1/2 h-[3px] bg-[#650E45] mb-6" />

        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          At{" "}
          <span className="text-[#650E45] font-semibold">
            {" "}
            Chakra Dental Clinic{" "}
          </span>
          , we trust that a
          <span className="text-[#650E45] font-semibold"> healthy smile </span>
          is the gateway to overall comfort. Established in
          <span className="text-[#650E45] font-semibold"> 2023 </span>, Chakra
          Dental was founded with one simple yet insightful vision — to serve
          the community with
          <span className="text-[#650E45] font-semibold"> moral vision </span>,
          <span className="text-[#650E45] font-semibold"> reasonable </span>,
          and
          <span className="text-[#650E45] font-semibold">
            {" "}
            expert dental care{" "}
          </span>
          . More than just a dental clinic, we are a
          <span className="text-[#650E45] font-semibold">
            {" "}
            service-oriented center{" "}
          </span>
          where
          <span className="text-[#650E45] font-semibold"> compassion </span>
          meets
          <span className="text-[#650E45] font-semibold">
            {" "}
            clinical excellence{" "}
          </span>
          .
          <br />
          <br />
          From the very beginning, our goal has been to promote
          <span className="text-[#650E45] font-semibold">
            {" "}
            oral hygiene awareness{" "}
          </span>
          , especially among
          <span className="text-[#650E45] font-semibold">
            {" "}
            underserved populations{" "}
          </span>
          , and to provide
          <span className="text-[#650E45] font-semibold">
            {" "}
            high-quality dental services{" "}
          </span>
          for every age group. True to our expressionality, we strongly advocate
          that
          <span className="text-[#650E45] font-semibold">
            {" "}
            “Prevention is better than cure.”{" "}
          </span>
          <br />
          <br />
          Our
          <span className="text-[#650E45] font-semibold">
            {" "}
            multi-special dental clinic{" "}
          </span>
          offers extensive dental treatments — from
          <span className="text-[#650E45] font-semibold">
            {" "}
            basic oral public health care{" "}
          </span>
          to
          <span className="text-[#650E45] font-semibold">
            {" "}
            advanced oral surgeries{" "}
          </span>
          . Whether it’s a
          <span className="text-[#650E45] font-semibold">
            {" "}
            child’s first dental visit{" "}
          </span>
          , an
          <span className="text-[#650E45] font-semibold">
            {" "}
            older individual{" "}
          </span>
          needing
          <span className="text-[#650E45] font-semibold">
            {" "}
            full-mouth rehabilitation{" "}
          </span>
          , or someone suffering from
          <span className="text-[#650E45] font-semibold"> dental injury </span>—
          we have committed specialists for every requirement.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
