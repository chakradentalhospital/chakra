import React from 'react'
import DentalImplantsHero from '../../Components/Services/DentalImplants/DentalImplantsHero'
import DentalImplantIntro from '../../Components/Services/DentalImplants/DentalImplantIntro'
import DentalImplantInfoSection from '../../Components/Services/DentalImplants/DentalImplantInfo'
import DentalImplant from '../../Components/Services/DentalImplants/DentalImplant'
import ImplantAftercareSection from '../../Components/Services/DentalImplants/ImplantAftercareSection'

const DentalImplants = () => {
  return (
    <>
    <DentalImplantsHero/>
    <DentalImplantIntro/>
    <DentalImplantInfoSection/>
    <DentalImplant/>
    <ImplantAftercareSection/>
    </>
  )
}

export default DentalImplants