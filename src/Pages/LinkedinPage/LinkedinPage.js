import React from "react";
import LinkedinBanner from "./LinkedinBanner/LinkedinBanner";
import Revamp from "./Revamp/Revamp";
import Scenario from "./Scenario/Scenario";

const LinkedinPage = () => {
  return (
    <div>
      <LinkedinBanner></LinkedinBanner>
      <Scenario></Scenario>
      <Revamp></Revamp>
    </div>
  );
};

export default LinkedinPage;
