import React from "react";
import './IeeePoints.css';


const IeeePoints = () => {

  const whiteShade = {
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500"
  }


  return (
    <div className="bg-#10101B mt-20">
      <div className="w-[90%] text-black mx-auto gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center pb-24">
        
        <div className="border-wrapper">
        <div className="ieee-points-card">
          <h1 className="text-2xl font-bold text-[#573EF3] lg:text-4xl md:text-2xl pt-12 pb-16">
            Motivation
          </h1>
          <p className="lg:px-28 md:px-28 px-20 pb-20 text-[14px] lg:text-2xl md:text-xl" style={whiteShade}>
            To avoid spread of COVID contagion through at the time of <span className="text-white">checking
            SpO2 and temperature levels.</span>
          </p>
        </div>
        </div>

        <div  className="border-wrapper">
        <div className="ieee-points-card">
          <h1 className="text-2xl font-bold text-[#1A8E3F] lg:text-4xl md:text-2xl pt-12 pb-16">
            Objective
          </h1>
          <p className="lg:px-28 md:px-28 px-20 pb-20 text-[14px] lg:text-2xl md:text-xl" style={whiteShade}>
            To build model of quick <span className="text-white">cost -effective</span> SpO2 & temperature
            self-check system
          </p>
        </div>
        </div>


        <div className="border-wrapper">
        <div className="ieee-points-card">
          <h1 className="text-2xl font-bold text-[#027FFF] lg:text-4xl md:text-2xl pt-12 pb-16">
            Outcome
          </h1>
          <p className="lg:px-28 md:px-28 px-20 pb-20 text-[14px] lg:text-2xl md:text-xl" style={whiteShade}>
            Effectively built an <span className="text-white">efficient</span> working Arduino based blood oxygen
            and SpO2 checking <br />
             model.
          </p>
        </div>
        </div>


      </div>
    </div>
  );
};

export default IeeePoints;
