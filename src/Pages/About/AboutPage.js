import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import CareerHilights from "./CareerHilights/CareerHilights";
import Statistics from "./Statistics/Statistics";

const AboutPage = () => {
  return (
    <div className=" bg-white">
      <AboutMe></AboutMe>
      <CareerHilights></CareerHilights>
      <Statistics></Statistics>
    </div>
  );
};

export default AboutPage;
