import React from 'react'
import DentalConsultationHero from '../../Components/Services/DentalConsultation/DentalConsultationHero'
import DentalConsultationIntro from '../../Components/Services/DentalConsultation/DentalConsultationIntro '
import DentalConsultationDetails from '../../Components/Services/DentalConsultation/DentalConsultationDetails '
import WhyConsultationImportant from '../../Components/Services/DentalConsultation/WhyConsultationImportant'
import WhoAndTechSection from '../../Components/Services/DentalConsultation/WhoAndTechSection'
import WhyChooseConsultation from '../../Components/Services/DentalConsultation/WhyChooseConsultation'
import ConsultationCTA from '../../Components/Services/DentalConsultation/ConsultationCTA'

const DentalConsultations = () => {
  return (
    <>
    <DentalConsultationHero/>
    <DentalConsultationIntro/>
    <DentalConsultationDetails/>
    <WhyConsultationImportant/>
    <WhoAndTechSection/>
    <WhyChooseConsultation/>
    <ConsultationCTA/>
    </>
  )
}

export default DentalConsultations