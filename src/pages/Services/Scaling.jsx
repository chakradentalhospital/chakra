import React from "react";
import ScalingHeroSection from "../../Components/Services/Scaling/ScalingHeroSection";
import ScalingIntroSection from "../../Components/Services/Scaling/ScalingIntroSection";
import ScalingWhatSection from "../../Components/Services/Scaling/ScalingWhatSection";
import ScalingImportanceSection from "../../Components/Services/Scaling/ScalingImportanceSection";
import ScalingSignsSection from "../../Components/Services/Scaling/ScalingSignsSection";
import ScalingProcedureSection from "../../Components/Services/Scaling/ScalingProcedureSection";
import ScalingFAQSection from "../../Components/Services/Scaling/ScalingFAQSection";
import WhyChooseChakra from "../../Components/Services/Scaling/WhyChooseChakra";
import ScalingTestimonialSection from "../../Components/Services/Scaling/ScalingTestimonialSection";
import ScalingApoinment from "../../Components/Services/Scaling/ScalingApoinment";
import { Helmet } from "react-helmet-async";
const Scaling = () => {
  return (
    <>
      <Helmet>
        <title>Teeth Scaling & Cleaning in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Professional teeth scaling and cleaning in Coimbatore at Chakra Dental. Prevent gum disease, plaque, and tartar with expert dental hygiene care."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/scaling"
        />
      </Helmet>
      <ScalingHeroSection />
      <ScalingIntroSection />
      <ScalingWhatSection />
      <ScalingImportanceSection />
      <ScalingSignsSection />
      <ScalingProcedureSection />
      <ScalingFAQSection />
      <WhyChooseChakra />
      <ScalingTestimonialSection />
      <ScalingApoinment />
    </>
  );
};

export default Scaling;
