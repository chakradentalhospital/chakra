import React from "react";
import FullMouthRehabilitationHero from "../../Components/Services/FullMouthRehabilitation/FullMouthRehabilitationHero";
import SmileTransformationIntro from "../../Components/Services/FullMouthRehabilitation/SmileTransformationIntro";
import FullMouthRehabCards from "../../Components/Services/FullMouthRehabilitation/FullMouthRehabCards";
import FullMouthCandidateCards from "../../Components/Services/FullMouthRehabilitation/FullMouthCandidateCards";
import ChakraDentalSupremacy from "../../Components/Services/FullMouthRehabilitation/ChakraDentalSupremacy";
import FullMouthRehabInfo from "../../Components/Services/FullMouthRehabilitation/FullMouthRehabInfo";
import FullMouthCTA from "../../Components/Services/FullMouthRehabilitation/FullMouthCTA";
import { Helmet } from "react-helmet-async";
const FullMouthRehabilitation = () => {
  return (
    <>
      <Helmet>
        <title>Full Mouth Rehabilitation in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Chakra Dental offers full mouth rehabilitation in Coimbatore, restoring function and aesthetics with implants, crowns, and advanced restorative dentistry."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/full-mouth-rehabilitation"
        />
      </Helmet>
      <FullMouthRehabilitationHero />
      <SmileTransformationIntro />
      <FullMouthRehabCards />
      <FullMouthCandidateCards />
      <ChakraDentalSupremacy />
      <FullMouthRehabInfo />
      <FullMouthCTA />
    </>
  );
};

export default FullMouthRehabilitation;
