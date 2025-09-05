import React from "react";
import ContactHero from "../Components/Contact/ContactHero";
import ContactForm from "../Components/Contact/ContactForm";
import ContactIFrameSection from "../Components/Contact/ContactIFrameSection";
import { Helmet } from "react-helmet-async";

const Contact = () => {
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
        <title>Contact Chakra Dental Clinic | Book Your Appointment</title>
        <meta
          name="description"
          content="Get in touch with Chakra Dental Clinic in Coimbatore. Book an appointment online or call us for expert dental care services."
        />
        <link rel="canonical" href="https://www.chakradental.in/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Chakra Dental Clinic | Book Your Appointment"
        />
        <meta
          property="og:description"
          content="Get in touch with Chakra Dental Clinic in Coimbatore. Book an appointment online or call us for expert dental care services."
        />
        <meta property="og:url" content="https://www.chakradental.in/contact" />
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

      <ContactHero />
      <ContactForm />
      <ContactIFrameSection />
    </>
  );
};

export default Contact;
