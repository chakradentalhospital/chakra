import React from "react";
import KidsDentistryHero from "../../Components/Services/KidsDentistry/KidsDentistryHero";
import KidsIntroSection from "../../Components/Services/KidsDentistry/KidsIntroSection";
import WhyPediatricIsDifferent from "../../Components/Services/KidsDentistry/WhyPediatricIsDifferent";
import KidsDentalServices from "../../Components/Services/KidsDentistry/KidsDentalServices";
import { Helmet } from "react-helmet-async";

const KidsDentistry = () => {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Pediatric Dental Clinic in Coimbatore | Kids Dentist",
    image: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
    description:
      "Leading pediatric dental clinic in Coimbatore offering gentle, expert care for kids. Safe, child-friendly treatments to keep young smiles healthy and bright.",
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
        <title>Pediatric Dental Clinic in Coimbatore | Kids Dentist</title>
        <meta
          name="description"
          content="Leading pediatric dental clinic in Coimbatore offering gentle, expert care for kids. Safe, child-friendly treatments to keep young smiles healthy and bright."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/kids-dentistry"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pediatric Dental Clinic in Coimbatore | Kids Dentist"
        />
        <meta
          property="og:description"
          content="Leading pediatric dental clinic in Coimbatore offering gentle, expert care for kids. Safe, child-friendly treatments to keep young smiles healthy and bright."
        />
        <meta
          property="og:url"
          content="https://www.chakradental.in/kids-dentistry"
        />
        <meta
          property="og:image"
          content="https://www.chakradental.in/assets/logo-C2h1hfCQ.png"
        />
        <meta property="og:site_name" content="Chakra Dental Clinic" />
        <meta property="og:locale" content="en_IN" />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <KidsDentistryHero />
      <KidsIntroSection />
      <WhyPediatricIsDifferent />
      <KidsDentalServices />
    </>
  );
};

export default KidsDentistry;
