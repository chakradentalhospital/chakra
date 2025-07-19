import React from 'react'
import AlignersHeroSection from '../../Components/Services/Aligners/AlignersHeroSection'
import AlignersIntro from '../../Components/Services/Aligners/AlignersIntro'
import WhatAreAligners from '../../Components/Services/Aligners/WhatAreAligners'
import ConditionsTreatedAligners from '../../Components/Services/Aligners/ConditionsTreatedAligners'
import WhyChooseAligners from '../../Components/Services/Aligners/WhyChooseAligners'
import ChakraAlignerProcess from '../../Components/Services/Aligners/ChakraAlignerProcess'
import WhyChakraAligners from '../../Components/Services/Aligners/WhyChakraAligners'
import TestimonialSection from '../../Components/Home/Testimonial'
import AlignerAppointment from '../../Components/Services/Aligners/AlignerAppointment'
import FaqAligners from '../../Components/Services/Aligners/FaqAligners'

const Aligners = () => {
  return (
    <>
    <AlignersHeroSection/>
    <AlignersIntro/>
    <WhatAreAligners/>
    <ConditionsTreatedAligners/>
    <WhyChooseAligners/>
    <ChakraAlignerProcess/>
    <TestimonialSection/>
    <WhyChakraAligners/>
    <FaqAligners/>
    <AlignerAppointment/>
    </>
  )
}

export default Aligners