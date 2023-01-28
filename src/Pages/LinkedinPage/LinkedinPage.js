import React from "react";
import LinkedinBanner from "./LinkedinBanner/LinkedinBanner";
import Revamp from "./Revamp/Revamp";
import Scenario from "./Scenario/Scenario";
import NewRevamp from "./Revamp/NewRevamp";

const LinkedinPage = () => {
  return (
    <div>
      <LinkedinBanner></LinkedinBanner>
      <Scenario></Scenario>
      <NewRevamp></NewRevamp>
    </div>
  );
};

export default LinkedinPage;
