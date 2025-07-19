import React from 'react'
import PainFreeHeroSection from '../../Components/Services/PainFreeTreatment/PainFreeHeroSection'
import PainFreeExperience from '../../Components/Services/PainFreeTreatment/PainFreeExperience'
import PainFreeMethodCards from '../../Components/Services/PainFreeTreatment/PainFreeMethodCards'
import FearFreeSection from '../../Components/Services/PainFreeTreatment/FearFreeSection'
import RedefineDentistrySection from '../../Components/Services/PainFreeTreatment/RedefineDentistrySection'

const PainFreeTreatment = () => {
  return (
    <>
    <PainFreeHeroSection/>
    <PainFreeExperience/>
    <PainFreeMethodCards/>
    <FearFreeSection/>
    <RedefineDentistrySection/>
    </>
  )
}

export default PainFreeTreatment