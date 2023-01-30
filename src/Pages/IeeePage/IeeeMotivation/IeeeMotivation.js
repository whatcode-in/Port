import React from "react";
import tab from "../../../Assets/ieee/fullTab.png";

const IeeeMotivation = () => {
  return (
    <div className="bg-white">
      <h1 className="lg:text-[80px] md:text-[72px] text-[34px] font-bold bg-gradient-to-r from-[#11953B] to-[#000000] text-transparent bg-clip-text py-20 text-center">
        Motivation, Objective <br />
        and Outcome
      </h1>
      <div className="pb-5">
        <img className="mb-44 shadow-xl mx-auto" src={tab} alt="" />
      </div>
    </div>
  );
};

export default IeeeMotivation;
