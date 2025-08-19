import React from "react";
import PainFreeHeroSection from "../../Components/Services/PainFreeTreatment/PainFreeHeroSection";
import PainFreeExperience from "../../Components/Services/PainFreeTreatment/PainFreeExperience";
import PainFreeMethodCards from "../../Components/Services/PainFreeTreatment/PainFreeMethodCards";
import FearFreeSection from "../../Components/Services/PainFreeTreatment/FearFreeSection";
import RedefineDentistrySection from "../../Components/Services/PainFreeTreatment/RedefineDentistrySection";
import { Helmet } from "react-helmet-async";
const PainFreeTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Pain-Free Dental Treatment in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Experience pain-free dentistry in Coimbatore. Chakra Dental uses advanced sedation and laser technology for stress-free dental treatments."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/services/pain-free-treatment"
        />
      </Helmet>
      <PainFreeHeroSection />
      <PainFreeExperience />
      <PainFreeMethodCards />
      <FearFreeSection />
      <RedefineDentistrySection />
    </>
  );
};

export default PainFreeTreatment;
