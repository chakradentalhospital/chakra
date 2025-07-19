import React from 'react';
import client1 from "../../assets/clients/1.jpg";
import client2 from "../../assets/clients/2.jpg";
import client3 from "../../assets/clients/3.jpg";
import client4 from "../../assets/clients/4.jpg";
import client5 from "../../assets/clients/5.jpg";

const logos = [client1, client2, client3, client4, client5];

const Insurence = () => {
  return (
    <section className="px-5 md:px-20 py-16 max-w-[1440px] mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#650E45] mb-4">
        Will Insurance Cover My Visit?
      </h2>

      <p className="text-gray-700 text-base md:text-lg max-w-[700px] mx-auto mb-10">
        We work with top insurance providers to ensure smooth and stress-free claims. Our team helps verify your benefits and guides you through every step.
      </p>

      <div className="relative w-[250px] h-[2px] bg-gray-300 mx-auto mb-12">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[5px] bg-[#650E45] z-10"></div>
      </div>

      <div className="overflow-hidden slider-container">
        <div className="slider-track">
          {[...logos, ...logos].map((logo, idx) => (
           <div key={idx} className="min-w-[200px] flex justify-center items-center">
  <img src={logo} alt={`client-${idx}`} className="h-16 object-contain" />
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurence;
