import React from "react";
import DentalConsultationHero from "../../Components/Services/DentalConsultation/DentalConsultationHero";
import DentalConsultationIntro from "../../Components/Services/DentalConsultation/DentalConsultationIntro ";
import DentalConsultationDetails from "../../Components/Services/DentalConsultation/DentalConsultationDetails ";
import WhyConsultationImportant from "../../Components/Services/DentalConsultation/WhyConsultationImportant";
import WhoAndTechSection from "../../Components/Services/DentalConsultation/WhoAndTechSection";
import WhyChooseConsultation from "../../Components/Services/DentalConsultation/WhyChooseConsultation";
import ConsultationCTA from "../../Components/Services/DentalConsultation/ConsultationCTA";
import { Helmet } from "react-helmet-async";
const DentalConsultations = () => {
  return (
    <>
      <Helmet>
        <title>Dental Consultations in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Book a dental consultation with expert dentists in Coimbatore. Chakra Dental offers professional advice for implants, orthodontics, and general care."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/dental-consultations"
        />
      </Helmet>
      <DentalConsultationHero />
      <DentalConsultationIntro />
      <DentalConsultationDetails />
      <WhyConsultationImportant />
      <WhoAndTechSection />
      <WhyChooseConsultation />
      <ConsultationCTA />
    </>
  );
};

export default DentalConsultations;
