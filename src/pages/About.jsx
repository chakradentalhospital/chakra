import React from "react";
import AboutHero from "../Components/About/AboutHero";
import WhoWeAre from "../Components/About/WhoWeAre";
import WhyChoose from "../Components/About/WhyChoose";
import { Helmet } from "react-helmet-async";

const About = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chakra Dental Clinic",
    image: "https://www.chakradental.in/assets/logo-C2h1hfCQ.png",
    "@id": "",
    url: "https://www.chakradental.in/",
    telephone: "99445 55597",
    priceRange: "₹1000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ground Floor, 1, Srinivasa Ragavan St",
      addressLocality: "Coimbatore",
      postalCode: "641002",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <Helmet>
        <title>Dental Hospital in Coimbatore | Best Dental Treatments</title>
        <meta
          name="description"
          content="Top dental hospital in Coimbatore offering advanced and affordable dental treatments. Expert dentists ensuring quality care for healthy, confident smiles"
        />
        <link rel="canonical" href="https://www.chakradental.in/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dental Hospital in Coimbatore | Best Dental Treatments"
        />
        <meta
          property="og:description"
          content="Top dental hospital in Coimbatore offering advanced and affordable dental treatments. Expert dentists ensuring quality care for healthy, confident smiles"
        />
        <meta property="og:url" content="https://www.chakradental.in/about" />
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

      <AboutHero />
      <WhoWeAre />
      <WhyChoose />
    </>
  );
};

export default About;
