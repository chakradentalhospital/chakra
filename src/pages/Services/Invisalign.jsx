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
  return (
    <>
      <Helmet>
        <title>
          Invisalign in Coimbatore | Invisible Braces | Chakra Dental
        </title>
        <meta
          name="description"
          content="Straighten your teeth with Invisalign in Coimbatore. Chakra Dental provides advanced invisible braces for teens and adults with faster results."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/invisalign"
        />
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
