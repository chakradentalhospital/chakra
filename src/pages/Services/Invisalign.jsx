import React from 'react'
import InvisalignHeroSection from '../../Components/Services/Invisalign/InvisalignHeroSection'
import InvisalignIntroSection from '../../Components/Services/Invisalign/InvisalignIntroSection'
import WhatIsInvisalign from '../../Components/Services/Invisalign/WhatIsInvisalign'
import WhyInvisalignStandsOut from '../../Components/Services/Invisalign/WhyInvisalignStandsOut'
import InvisalignProcess from '../../Components/Services/Invisalign/InvisalignProcess'
import InvisalignVsOthers from '../../Components/Services/Invisalign/InvisalignVsOthers'
import WhyChooseChakraInvisalign from '../../Components/Services/Invisalign/WhyChooseChakraInvisalign'
import InvisalignAppointment from '../../Components/Services/Invisalign/InvisalignAppointment'

const Invisalign = () => {
  return (
    <>
    <InvisalignHeroSection/>
    <InvisalignIntroSection/>
    <WhatIsInvisalign/>
    <WhyInvisalignStandsOut/>
    <InvisalignProcess/>
    <InvisalignVsOthers/>
    <WhyChooseChakraInvisalign/>
    <InvisalignAppointment/>
    </>
  )
}

export default Invisalign