import React,{useEffect} from "react";
import ScrollToTop from "react-scroll-to-top";
import IeeeBanner from "./IeeeBanner/IeeeBanner";
import IeeeMotivation from "./IeeeMotivation/IeeeMotivation";
import IeeePoints from "./IeeePoints/IeeePoints";
import ReadThePaper from "./ReadThePaper";

const IeeePage = () => {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
},[])
  return (
    <div>
      <IeeeBanner></IeeeBanner>
      <IeeeMotivation></IeeeMotivation>
      <IeeePoints></IeeePoints>
      <ReadThePaper></ReadThePaper>
    </div>
  );
};

export default IeeePage;
