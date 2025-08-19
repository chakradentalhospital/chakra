import React from "react";
import RootCanalTreatmentHero from "../../Components/Services/RootCanalTreatment/RootCanalTreatmentHero";
import RootCanalIntroSection from "../../Components/Services/RootCanalTreatment/RootCanalIntroSection";
import WhatIsRootCanal from "../../Components/Services/RootCanalTreatment/WhatIsRootCanal";
import RootCanalSymptomsSection from "../../Components/Services/RootCanalTreatment/RootCanalSymptomsSection";
import RootCanalStepsSection from "../../Components/Services/RootCanalTreatment/RootCanalStepsSection";
import WhyChooseRCTSection from "../../Components/Services/RootCanalTreatment/WhyChooseRCTSection";
import AftercareSection from "../../Components/Services/RootCanalTreatment/AftercareSection";
import RootCanalCtaSection from "../../Components/Services/RootCanalTreatment/RootCanalCtaSection";
import { Helmet } from "react-helmet-async";
const RootCanalTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Root Canal Treatment in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Painless root canal treatment in Coimbatore at Chakra Dental. Save your natural teeth with advanced RCT techniques and quick recovery."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/services/root-canal-treatment"
        />
      </Helmet>
      <RootCanalTreatmentHero />
      <RootCanalIntroSection />
      <WhatIsRootCanal />
      <RootCanalSymptomsSection />
      <RootCanalStepsSection />
      <WhyChooseRCTSection />
      <AftercareSection />
      <RootCanalCtaSection />
    </>
  );
};

export default RootCanalTreatment;
