import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import WhoWeAre from "../Components/Home/WhoWeAre";
import WhatWeDo from "../Components/Home/WhatWeDo";
import TestimonialSection from "../Components/Home/Testimonial";
import WatchVideo from "../Components/Home/WatchVedio";
import AboutPerson from "../Components/Home/AboutPerson";
import Insurence from "../Components/Home/Insurence";
import Appoinment from "../Components/Home/Appoinment";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhoWeAre/>
      <WhatWeDo/>
      <TestimonialSection/>
      <WatchVideo/>
      <AboutPerson/>
      <Insurence/>
      <Appoinment/>
    </>
  );
};

export default Home;
