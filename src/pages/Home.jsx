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
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.chakradental.in/#website",
        url: "https://www.chakradental.in/",
        name: "Chakra Dental Clinic",
        description:
          "Chakra is a leading dental clinic in Coimbatore offering implants, whitening, pediatric dentistry, aligners, and more.",
        publisher: {
          "@id": "https://www.chakradental.in/#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.chakradental.in/#organization",
        name: "Chakra Dental Clinic",
        url: "https://www.chakradental.in/",
        logo: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
        image: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
        telephone: "99445 55597",
        priceRange: "₹1000",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ground Floor, 1, Srinivasa Ragavan St",
          addressLocality: "Coimbatore",
          postalCode: "641002",
          addressCountry: "IN",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Best Dental Clinic and Dentists in Coimbatore | Chakra</title>
        <meta
          name="description"
          content="Chakra is a leading dental clinic in Coimbatore. We offer a wide range of services, including dental implants, teeth whitening, pediatric dentistry, dental aligners, and dental invisalign."
        />
        <link rel="canonical" href="https://www.chakradental.in/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Dental Clinic and Dentists in Coimbatore | Chakra"
        />
        <meta
          property="og:description"
          content="Chakra is a leading dental clinic in Coimbatore. We offer a wide range of services, including dental implants, teeth whitening, pediatric dentistry, dental aligners, and dental invisalign."
        />
        <meta property="og:url" content="https://www.chakradental.in/" />
        <meta
          property="og:image"
          content="https://www.chakradental.in/assets/logo-C2h1hfCQ.png"
        />
        <meta property="og:site_name" content="Chakra Dental Clinic" />
        <meta property="og:locale" content="en_IN" />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
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
