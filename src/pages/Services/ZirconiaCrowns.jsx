import React from "react";
import ZirconiaCrownsHero from "../../Components/Services/ZirconiaCrowns/ZirconiaCrownsHero";
import ZirconiaStrengthBeauty from "../../Components/Services/ZirconiaCrowns/ZirconiaStrengthBeauty";
import ZirconiaInfo from "../../Components/Services/ZirconiaCrowns/ZirconiaInfo";
import ZirconiaBenefitsCards from "../../Components/Services/ZirconiaCrowns/ZirconiaBenefitsCards";
import ZirconiaProcess from "../../Components/Services/ZirconiaCrowns/ZirconiaProcess";
import ZirconiaIndicationsCare from "../../Components/Services/ZirconiaCrowns/ZirconiaIndicationsCare";
import ZirconiaCTA from "../../Components/Services/ZirconiaCrowns/ZirconiaCTA";
import { Helmet } from "react-helmet-async";
const ZirconiaCrowns = () => {
  return (
    <>
      <Helmet>
        <title>Zirconia Crowns in Coimbatore | Chakra Dental</title>
        <meta
          name="description"
          content="Get durable and aesthetic zirconia crowns in Coimbatore at Chakra Dental. Strong, natural-looking crowns for long-lasting dental restoration."
        />
        <link
          rel="canonical"
          href="https://www.chakradental.in/zirconia-crowns"
        />
      </Helmet>
      <ZirconiaCrownsHero />
      <ZirconiaStrengthBeauty />
      <ZirconiaInfo />
      <ZirconiaBenefitsCards />
      <ZirconiaProcess />
      <ZirconiaIndicationsCare />
      <ZirconiaCTA />
    </>
  );
};

export default ZirconiaCrowns;
