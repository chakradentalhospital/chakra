import React from "react";
import ToothWhiteningHero from "../../Components/Services/ToothWhitening/ToothWhiteningHero";
import WhiteningIntroSection from "../../Components/Services/ToothWhitening/WhiteningIntroSection";
import WhiteningCauseSection from "../../Components/Services/ToothWhitening/WhiteningCauseSection";
import WhiteningClinicSection from "../../Components/Services/ToothWhitening/WhiteningClinicSection";
import TakeHomeWhiteningSection from "../../Components/Services/ToothWhitening/TakeHomeWhiteningSection";
import WhiteningPerksSection from "../../Components/Services/ToothWhitening/WhiteningPerksSection";
import WhiteningCareTips from "../../Components/Services/ToothWhitening/WhiteningCareTips";
import WhiteningAppointmentSection from "../../Components/Services/ToothWhitening/WhiteningAppointmentSection";
import { Helmet } from "react-helmet-async";
const ToothWhitening = () => {
  return (
    <>
      <Helmet>
        <title>Teeth Whitening in Coimbatore | Chakra Dental Clinic</title>
        <meta
          name="description"
          content="Brighten your smile with professional teeth whitening in Coimbatore. Chakra Dental offers safe whitening treatments for long-lasting results."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/services/tooth-whitening"
        />
      </Helmet>
      <ToothWhiteningHero />
      <WhiteningIntroSection />
      <WhiteningCauseSection />
      <WhiteningClinicSection />
      <TakeHomeWhiteningSection />
      <WhiteningPerksSection />
      <WhiteningCareTips />
      <WhiteningAppointmentSection />
    </>
  );
};

export default ToothWhitening;
