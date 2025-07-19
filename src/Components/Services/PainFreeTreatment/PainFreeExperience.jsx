import React from "react";
import img1 from "../../../assets/services/12.jpg";
import img2 from "../../../assets/services/9.jpg";
import img3 from "../../../assets/services/10.jpg";
import img4 from "../../../assets/services/11.jpg";

const PainFreeExperience = () => {
  return (
    <section className="w-full bg-[#FFF7FB] py-20 px-6 md:px-10 overflow-x-hidden space-y-20">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#650E45] leading-tight">
            Pain-Free Treatment at Chakra Dental
          </h2>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            At Chakra Dental, we realize that the fear of pain is the number one reason people avoiding dental appointments. Whether it stems from a past experience, care, or Learning through stories from others, dental fear is real — and we are here to change that understanding forever.
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            We specialize in pain-free dentistry, where your comfort, peace of mind, and confidence are just as important as the clinical results. From the moment you step into our calming clinic environment to the time you leave with a healthier smile, every step is designed to be gentle, smooth, and stress-free.
          </p>
        </div>

        <div
          className="md:w-1/2 grid grid-cols-2 gap-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={img1}
            alt="Pain Free Img 1"
            className="rounded-xl shadow-xl w-full h-[280px] object-cover translate-y-2"
          />
          <img
            src={img2}
            alt="Pain Free Img 2"
            className="rounded-xl shadow-xl w-full h-[280px] object-cover -translate-y-2"
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        <div
          className="md:w-1/2 space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-gray-700 text-[17px] leading-relaxed">
            Because advanced dentistry doesn’t have to hurt — and at Chakra Dental, it doesn’t.
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            Breaking the illusion: “Dentistry is irritate”
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            In the past, dental tools were vociferous, Partial anesthesia, and patients had low control over their experience. But things have replace. With technological development, local anesthesia, conscious sedation, and patient-oriented care, we are proud to offer almost painless treatments for people of every age.
          </p>

          <p className="text-gray-700 text-[17px] leading-relaxed">
            Whether it’s a less filling, root canal, removal, or even oral Dental Surgery, our doctors are trained to make the experience as humane and calm as possible.
          </p>
        </div>

        <div
          className="md:w-1/2 grid grid-cols-2 gap-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={img3}
            alt="Pain Free Img 3"
            className="rounded-xl shadow-xl w-full h-[280px] object-cover translate-y-3"
          />
          <img
            src={img4}
            alt="Pain Free Img 4"
            className="rounded-xl shadow-xl w-full h-[280px] object-cover -translate-y-3"
          />
        </div>
      </div>
    </section>
  );
};

export default PainFreeExperience;
