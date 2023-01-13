import React from "react";
import ScrollToTop from "react-scroll-to-top";
import IeeeBanner from "./IeeeBanner/IeeeBanner";
import IeeeMotivation from "./IeeeMotivation/IeeeMotivation";
import IeeePoints from "./IeeePoints/IeeePoints";

const IeeePage = () => {
  return (
    <div>
      <IeeeBanner></IeeeBanner>
      <IeeeMotivation></IeeeMotivation>
      <IeeePoints></IeeePoints>
    </div>
  );
};

export default IeeePage;
