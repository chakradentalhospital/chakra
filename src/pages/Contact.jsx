import React from "react";
import ContactHero from "../Components/Contact/ContactHero";
import ContactForm from "../Components/Contact/ContactForm";
import ContactIFrameSection from "../Components/Contact/ContactIFrameSection";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Chakra Dental Clinic | Book Your Appointment</title>
        <meta
          name="description"
          content="Get in touch with Chakra Dental Clinic in Coimbatore. Book an appointment online or call us for expert dental care services."
        />
        <link rel="canonical" href="https://www.chakradental.in/contact" />
      </Helmet>
      <ContactHero />
      <ContactForm />
      <ContactIFrameSection />
    </>
  );
};

export default Contact;
