import React from "react";
import InvisalignHeroSection from "../../Components/Services/Invisalign/InvisalignHeroSection";
import InvisalignIntroSection from "../../Components/Services/Invisalign/InvisalignIntroSection";
import WhatIsInvisalign from "../../Components/Services/Invisalign/WhatIsInvisalign";
import WhyInvisalignStandsOut from "../../Components/Services/Invisalign/WhyInvisalignStandsOut";
import InvisalignProcess from "../../Components/Services/Invisalign/InvisalignProcess";
import InvisalignVsOthers from "../../Components/Services/Invisalign/InvisalignVsOthers";
import WhyChooseChakraInvisalign from "../../Components/Services/Invisalign/WhyChooseChakraInvisalign";
import InvisalignAppointment from "../../Components/Services/Invisalign/InvisalignAppointment";
import { Helmet } from "react-helmet-async";

const Invisalign = () => {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Invisalign Treatments in Coimbatore | Invisible Braces",
    image: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
    description:
      "Get advanced Invisalign treatments in Coimbatore for a perfect smile. Comfortable, clear, and effective invisible braces tailored for teens and adults",
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
        <title>Invisalign Treatments in Coimbatore | Invisible Braces</title>
        <meta
          name="description"
          content="Get advanced Invisalign treatments in Coimbatore for a perfect smile. Comfortable, clear, and effective invisible braces tailored for teens and adults"
        />
        <link rel="canonical" href="https://www.chakradental.in/invisalign" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Invisalign Treatments in Coimbatore | Invisible Braces"
        />
        <meta
          property="og:description"
          content="Get advanced Invisalign treatments in Coimbatore for a perfect smile. Comfortable, clear, and effective invisible braces tailored for teens and adults"
        />
        <meta
          property="og:url"
          content="https://www.chakradental.in/invisalign"
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

      <InvisalignHeroSection />
      <InvisalignIntroSection />
      <WhatIsInvisalign />
      <WhyInvisalignStandsOut />
      <InvisalignProcess />
      <InvisalignVsOthers />
      <WhyChooseChakraInvisalign />
      <InvisalignAppointment />
    </>
  );
};

export default Invisalign;
