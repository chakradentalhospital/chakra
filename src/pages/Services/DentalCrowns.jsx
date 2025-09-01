import React from "react";
import DentalCrownsHero from "../../Components/Services/DentalCrowns/DentalCrownsHero";
import DentalCrownsIntro from "../../Components/Services/DentalCrowns/DentalCrownsIntro";
import DentalCrownExplanation from "../../Components/Services/DentalCrowns/DentalCrownExplanation";
import CrownTypesSection from "../../Components/Services/DentalCrowns/CrownTypesSection";
import CrownProcess from "../../Components/Services/DentalCrowns/CrownProcess";
import DentalCrownBenefits from "../../Components/Services/DentalCrowns/DentalCrownBenefits";
import CrownCTA from "../../Components/Services/DentalCrowns/CrownCTA";
import { Helmet } from "react-helmet-async";
const DentalCrowns = () => {
  return (
    <>
      <Helmet>
        <title>Dental Crowns in Coimbatore | Chakra Dental Clinic</title>
        <meta
          name="description"
          content="Protect and restore your teeth with dental crowns in Coimbatore. Chakra Dental provides high-quality crowns for strength and natural appearance."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/dental-crowns"
        />
      </Helmet>
      <DentalCrownsHero />
      <DentalCrownsIntro />
      <DentalCrownExplanation />
      <CrownTypesSection />
      <CrownProcess />
      <DentalCrownBenefits />
      <CrownCTA />
    </>
  );
};

export default DentalCrowns;
