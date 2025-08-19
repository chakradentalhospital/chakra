import React from "react";
import KidsDentistryHero from "../../Components/Services/KidsDentistry/KidsDentistryHero";
import KidsIntroSection from "../../Components/Services/KidsDentistry/KidsIntroSection";
import WhyPediatricIsDifferent from "../../Components/Services/KidsDentistry/WhyPediatricIsDifferent";
import KidsDentalServices from "../../Components/Services/KidsDentistry/KidsDentalServices";
import { Helmet } from "react-helmet-async";
const KidsDentistry = () => {
  return (
    <>
      <Helmet>
        <title>Kids Dentistry in Coimbatore | Chakra Dental Clinic</title>
        <meta
          name="description"
          content="Specialized kids dentistry in Coimbatore. Chakra Dental offers gentle pediatric dental care, cavity fillings, braces, and preventive checkups for children."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/services/kids-dentistry"
        />
      </Helmet>
      <KidsDentistryHero />
      <KidsIntroSection />
      <WhyPediatricIsDifferent />
      <KidsDentalServices />
    </>
  );
};

export default KidsDentistry;
