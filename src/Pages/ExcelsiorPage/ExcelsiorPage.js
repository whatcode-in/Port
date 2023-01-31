import React,{useEffect} from "react";
import ExcelsiorBanner from "./ExcelsiorBanner/ExcelsiorBanner";
import ExcelsiorDetails from "./ExcelsiorDetails/ExcelsiorDetails";
import StatsFromSpotify from "./StatsFromSpotify/StatsFromSpotify";

const ExcelsiorPage = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
},[])
  return (
    <div>
      <ExcelsiorBanner></ExcelsiorBanner>
      <ExcelsiorDetails></ExcelsiorDetails>
      <StatsFromSpotify></StatsFromSpotify>
    </div>
  );
};

export default ExcelsiorPage;
