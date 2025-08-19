import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import WhoWeAre from "../Components/Home/WhoWeAre";
import WhatWeDo from "../Components/Home/WhatWeDo";
import TestimonialSection from "../Components/Home/Testimonial";
import WatchVideo from "../Components/Home/WatchVedio";
import AboutPerson from "../Components/Home/AboutPerson";
import Insurence from "../Components/Home/Insurence";
import Appoinment from "../Components/Home/Appoinment";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Best Dental Clinic and Dentists in Coimbatore | Chakra</title>
        <meta
          name="description"
          content="Chakra is a leading dental clinic in Coimbatore. We offer a wide range of services, including dental implants, teeth whitening, pediatric dentistry, dental aligners, and dental invisalign."
        />
        <link rel="canonical" href="https://www.chakradental.in/" />
      </Helmet>
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <TestimonialSection />
      <WatchVideo />
      <AboutPerson />
      <Insurence />
      <Appoinment />
    </>
  );
};

export default Home;
