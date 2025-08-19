import React from "react";
import DentalImplantsHero from "../../Components/Services/DentalImplants/DentalImplantsHero";
import DentalImplantIntro from "../../Components/Services/DentalImplants/DentalImplantIntro";
import DentalImplantInfoSection from "../../Components/Services/DentalImplants/DentalImplantInfo";
import DentalImplant from "../../Components/Services/DentalImplants/DentalImplant";
import ImplantAftercareSection from "../../Components/Services/DentalImplants/ImplantAftercareSection";
import { Helmet } from "react-helmet-async";
const DentalImplants = () => {
  return (
    <>
      <Helmet>
        <title>Dental Implants in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Replace missing teeth with advanced dental implants in Coimbatore. Chakra Dental offers durable, natural-looking implant solutions."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/services/dental-implants"
        />
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
