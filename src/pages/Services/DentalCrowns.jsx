import React from 'react'
import DentalCrownsHero from '../../Components/Services/DentalCrowns/DentalCrownsHero'
import DentalCrownsIntro from '../../Components/Services/DentalCrowns/DentalCrownsIntro'
import DentalCrownExplanation from '../../Components/Services/DentalCrowns/DentalCrownExplanation'
import CrownTypesSection from '../../Components/Services/DentalCrowns/CrownTypesSection'
import CrownProcess from '../../Components/Services/DentalCrowns/CrownProcess'
import DentalCrownBenefits from '../../Components/Services/DentalCrowns/DentalCrownBenefits'
import CrownCTA from '../../Components/Services/DentalCrowns/CrownCTA'

const DentalCrowns = () => {
  return (
    <>
    <DentalCrownsHero/>
    <DentalCrownsIntro/>
    <DentalCrownExplanation/>
    <CrownTypesSection/>
    <CrownProcess/>
    <DentalCrownBenefits/>
    <CrownCTA/>
    </>
  )
}

export default DentalCrowns