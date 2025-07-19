import React from 'react'
import ToothWhiteningHero from '../../Components/Services/ToothWhitening/ToothWhiteningHero'
import WhiteningIntroSection from '../../Components/Services/ToothWhitening/WhiteningIntroSection'
import WhiteningCauseSection from '../../Components/Services/ToothWhitening/WhiteningCauseSection'
import WhiteningClinicSection from '../../Components/Services/ToothWhitening/WhiteningClinicSection'
import TakeHomeWhiteningSection from '../../Components/Services/ToothWhitening/TakeHomeWhiteningSection'
import WhiteningPerksSection from '../../Components/Services/ToothWhitening/WhiteningPerksSection'
import WhiteningCareTips from '../../Components/Services/ToothWhitening/WhiteningCareTips'
import WhiteningAppointmentSection from '../../Components/Services/ToothWhitening/WhiteningAppointmentSection'

const ToothWhitening = () => {
  return (
    <>
    <ToothWhiteningHero/>
    <WhiteningIntroSection/>
    <WhiteningCauseSection/>
    <WhiteningClinicSection/>
    <TakeHomeWhiteningSection/>
    <WhiteningPerksSection/>
    <WhiteningCareTips/>
    <WhiteningAppointmentSection/>
    </>
  )
}

export default ToothWhitening