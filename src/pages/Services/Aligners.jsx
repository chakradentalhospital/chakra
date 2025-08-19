import React from "react";
import AlignersHeroSection from "../../Components/Services/Aligners/AlignersHeroSection";
import AlignersIntro from "../../Components/Services/Aligners/AlignersIntro";
import WhatAreAligners from "../../Components/Services/Aligners/WhatAreAligners";
import ConditionsTreatedAligners from "../../Components/Services/Aligners/ConditionsTreatedAligners";
import WhyChooseAligners from "../../Components/Services/Aligners/WhyChooseAligners";
import ChakraAlignerProcess from "../../Components/Services/Aligners/ChakraAlignerProcess";
import WhyChakraAligners from "../../Components/Services/Aligners/WhyChakraAligners";
import TestimonialSection from "../../Components/Home/Testimonial";
import AlignerAppointment from "../../Components/Services/Aligners/AlignerAppointment";
import FaqAligners from "../../Components/Services/Aligners/FaqAligners";
import { Helmet } from "react-helmet-async";
const Aligners = () => {
  return (
    <>
      <Helmet>
        <title>Clear Dental Aligners in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Get clear aligners in Coimbatore for a perfect smile. Chakra Dental offers invisible braces and custom aligners for comfortable orthodontic treatment."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/services/aligners"
        />
      </Helmet>
      <AlignersHeroSection />
      <AlignersIntro />
      <WhatAreAligners />
      <ConditionsTreatedAligners />
      <WhyChooseAligners />
      <ChakraAlignerProcess />
      <TestimonialSection />
      <WhyChakraAligners />
      <FaqAligners />
      <AlignerAppointment />
    </>
  );
};

export default Aligners;
