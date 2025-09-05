import React from "react";
import DentalImplantsHero from "../../Components/Services/DentalImplants/DentalImplantsHero";
import DentalImplantIntro from "../../Components/Services/DentalImplants/DentalImplantIntro";
import DentalImplantInfoSection from "../../Components/Services/DentalImplants/DentalImplantInfo";
import DentalImplant from "../../Components/Services/DentalImplants/DentalImplant";
import ImplantAftercareSection from "../../Components/Services/DentalImplants/ImplantAftercareSection";
import { Helmet } from "react-helmet-async";

const DentalImplants = () => {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Full Mouth Dental Implants Treatments Cost in Coimbatore",
    image: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
    description:
      "Affordable full mouth dental implant treatments in Coimbatore. Expert care, advanced technology, and lasting results for a confident, natural-looking smile",
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
        <title>Full Mouth Dental Implants Treatments Cost in Coimbatore</title>
        <meta
          name="description"
          content="Affordable full mouth dental implant treatments in Coimbatore. Expert care, advanced technology, and lasting results for a confident, natural-looking smile"
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/dental-implants"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Full Mouth Dental Implants Treatments Cost in Coimbatore"
        />
        <meta
          property="og:description"
          content="Affordable full mouth dental implant treatments in Coimbatore. Expert care, advanced technology, and lasting results for a confident, natural-looking smile"
        />
        <meta
          property="og:url"
          content="https://www.chakradental.in/dental-implants"
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

      <DentalImplantsHero />
      <DentalImplantIntro />
      <DentalImplantInfoSection />
      <DentalImplant />
      <ImplantAftercareSection />
    </>
  );
};

export default DentalImplants;
