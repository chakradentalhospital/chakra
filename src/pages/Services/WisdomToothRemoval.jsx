import React from 'react'
import WisdomToothRemovalHero from '../../Components/Services/WisdomToothRemoval/WisdomToothRemovalHero'
import WisdomToothRemovalIntro from '../../Components/Services/WisdomToothRemoval/WisdomToothRemovalIntro'
import WisdomTeethInfoSection from '../../Components/Services/WisdomToothRemoval/WisdomTeethInfoSection'
import WisdomToothEvaluation from '../../Components/Services/WisdomToothRemoval/WisdomToothEvaluation'
import WisdomToothExtractionTypes from '../../Components/Services/WisdomToothRemoval/WisdomToothExtractionTypes'
import WisdomSafetySection from '../../Components/Services/WisdomToothRemoval/WisdomSafetySection'
import WisdomAftercareSection from '../../Components/Services/WisdomToothRemoval/WisdomAftercareSection'
import WisdomTestimonialSection from '../../Components/Services/WisdomToothRemoval/WisdomTestimonialSection'
import WisdomApoinment from '../../Components/Services/WisdomToothRemoval/WisdomApoinment'

const WisdomToothRemoval = () => {
  return (
    <>
    <WisdomToothRemovalHero/>
    <WisdomToothRemovalIntro/>
    <WisdomTeethInfoSection/>
    <WisdomToothEvaluation/>
    <WisdomToothExtractionTypes/>
    <WisdomSafetySection/>
    <WisdomAftercareSection/>
    <WisdomTestimonialSection/>
    <WisdomApoinment/>
    </>
  )
}

export default WisdomToothRemoval