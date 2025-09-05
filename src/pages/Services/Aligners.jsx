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
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Teeth Straightening in Coimbatore | Dental Aligners",
    image: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
    description:
      "Effective teeth straightening in Coimbatore with custom dental aligners. Comfortable, clear, and discreet solutions for a perfectly aligned smile",
    brand: {
      "@type": "Brand",
      name: "Chakra Dental Clinic",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "24",
    },
  };

  return (
    <>
      <Helmet>
        <title>Teeth Straightening in Coimbatore | Dental Aligners</title>
        <meta
          name="description"
          content="Effective teeth straightening in Coimbatore with custom dental aligners. Comfortable, clear, and discreet solutions for a perfectly aligned smile"
        />
        <link rel="canonical" href="https://www.chakradental.in/aligners" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Teeth Straightening in Coimbatore | Dental Aligners"
        />
        <meta
          property="og:description"
          content="Effective teeth straightening in Coimbatore with custom dental aligners. Comfortable, clear, and discreet solutions for a perfectly aligned smile"
        />
        <meta
          property="og:url"
          content="https://www.chakradental.in/aligners"
        />
        <meta
          property="og:image"
          content="https://www.chakradental.in/assets/logo-C2h1hfCQ.png"
        />
        <meta property="og:site_name" content="Chakra Dental Clinic" />
        <meta property="og:locale" content="en_IN" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
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
