import React from "react";
import phone from "../../../Assets/excelsior/phone.png";
import './ExcelsiorDetails.css'

const ExcelsiorDetails = () => {

  return (
    <div className="mt-20">
      <h1 className="details-subtitle-gradient text-transparent bg-clip-text lg:text-7xl md:text-5xl text-2xl font-bold text-center">
        Motivation, Objective <br />
        <span className=" details-subtitle-gradient-1 text-transparent bg-clip-tex">and Outcome</span>
      </h1>
      <div className="flex justify-center">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default ExcelsiorDetails;
