import React from "react";
import ZirconiaCrownsHero from "../../Components/Services/ZirconiaCrowns/ZirconiaCrownsHero";
import ZirconiaStrengthBeauty from "../../Components/Services/ZirconiaCrowns/ZirconiaStrengthBeauty";
import ZirconiaInfo from "../../Components/Services/ZirconiaCrowns/ZirconiaInfo";
import ZirconiaBenefitsCards from "../../Components/Services/ZirconiaCrowns/ZirconiaBenefitsCards";
import ZirconiaProcess from "../../Components/Services/ZirconiaCrowns/ZirconiaProcess";
import ZirconiaIndicationsCare from "../../Components/Services/ZirconiaCrowns/ZirconiaIndicationsCare";
import ZirconiaCTA from "../../Components/Services/ZirconiaCrowns/ZirconiaCTA";

const ZirconiaCrowns = () => {
  return (
    <>
      <ZirconiaCrownsHero />
      <ZirconiaStrengthBeauty/>
      <ZirconiaInfo/>
      <ZirconiaBenefitsCards/>
      <ZirconiaProcess/>
      <ZirconiaIndicationsCare/>
      <ZirconiaCTA/>
    </>
  );
};

export default ZirconiaCrowns;
