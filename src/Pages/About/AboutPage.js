import React ,{useEffect}from "react";
import AboutMe from "./AboutMe/AboutMe";
import CareerHilights from "./CareerHilights/CareerHilights";
import Extracurriculars from "./Extracurriculars/Extracurriculars";
import ExtracurricularsDetails from "./ExtracurricularsDetails/ExtracurricularsDetails";
import Statistics from "./Statistics/Statistics";
import VolunteerDetails from "./VolunteerDetails/VolunteerDetails";
import Networking from "./Networking";
import Volunteering from "./Volunteering"

const AboutPage = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
},[])
  return (
    <div className=" bg-white">
      <AboutMe></AboutMe>
      <CareerHilights></CareerHilights>
      <Statistics></Statistics>
      <Networking></Networking>
      <Volunteering></Volunteering>
      <VolunteerDetails></VolunteerDetails>
      <Extracurriculars></Extracurriculars>
      <ExtracurricularsDetails></ExtracurricularsDetails>
    </div>
  );
};

export default AboutPage;
