import React from "react";
import phone from "../../../Assets/excelsior/phone.png";

const ExcelsiorDetails = () => {
  return (
    <div className="mt-20">
      <h1 className="bg-gradient-to-br from-[#573EF3] via-[#FF0E0E] to-[#FF4AF8] text-transparent bg-clip-text lg:text-7xl md:text-5xl text-2xl font-bold text-center">
        Motivation, Objective <br />
        and Outcome
      </h1>
      <div className="flex justify-center">
        <img src={phone} alt="" />
      </div>
    </div>
  );
};

export default ExcelsiorDetails;
