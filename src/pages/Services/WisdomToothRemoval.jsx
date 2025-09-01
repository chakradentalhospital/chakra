import React from "react";
import WisdomToothRemovalHero from "../../Components/Services/WisdomToothRemoval/WisdomToothRemovalHero";
import WisdomToothRemovalIntro from "../../Components/Services/WisdomToothRemoval/WisdomToothRemovalIntro";
import WisdomTeethInfoSection from "../../Components/Services/WisdomToothRemoval/WisdomTeethInfoSection";
import WisdomToothEvaluation from "../../Components/Services/WisdomToothRemoval/WisdomToothEvaluation";
import WisdomToothExtractionTypes from "../../Components/Services/WisdomToothRemoval/WisdomToothExtractionTypes";
import WisdomSafetySection from "../../Components/Services/WisdomToothRemoval/WisdomSafetySection";
import WisdomAftercareSection from "../../Components/Services/WisdomToothRemoval/WisdomAftercareSection";
import WisdomTestimonialSection from "../../Components/Services/WisdomToothRemoval/WisdomTestimonialSection";
import WisdomApoinment from "../../Components/Services/WisdomToothRemoval/WisdomApoinment";
import { Helmet } from "react-helmet-async";
const WisdomToothRemoval = () => {
  return (
    <>
      <Helmet>
        <title>Wisdom Tooth Removal in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Safe and painless wisdom tooth removal in Coimbatore. Chakra Dental offers expert surgical extraction with modern pain management."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/wisdom-tooth-removal"
        />
      </Helmet>
      <WisdomToothRemovalHero />
      <WisdomToothRemovalIntro />
      <WisdomTeethInfoSection />
      <WisdomToothEvaluation />
      <WisdomToothExtractionTypes />
      <WisdomSafetySection />
      <WisdomAftercareSection />
      <WisdomTestimonialSection />
      <WisdomApoinment />
    </>
  );
};

export default WisdomToothRemoval;
