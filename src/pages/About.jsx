import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import WhoWeAre from '../Components/About/WhoWeAre'
import WhyChoose from '../Components/About/WhyChoose'
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
    <Helmet>
        <title>About Chakra Dental Clinic | Best Dentists in Coimbatore</title>
        <meta
          name="description"
          content="Learn more about Chakra Dental Clinic in Coimbatore, our expert team of dentists, and our commitment to providing pain-free, world-class dental care."
        />
        <link rel="canonical" href="https://www.chakradental.in/about" />
      </Helmet>
    <AboutHero/>
    <WhoWeAre/>
    <WhyChoose/>
    </>
  )
}

export default About