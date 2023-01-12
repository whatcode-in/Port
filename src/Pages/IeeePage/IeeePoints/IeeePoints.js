import React from "react";

const IeeePoints = () => {
  return (
    <div className=" bg-white ">
      <div className="w-[90%] text-black mx-auto gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center pb-24">
        <div className=" border-4 rounded-3xl w-full shadow-2xl border-[#573EF3]">
          <h1 className="text-2xl font-bold text-[#573EF3] lg:text-4xl md:text-2xl pt-12 pb-16">
            Motivation
          </h1>
          <p className="lg:px-28 md:px-28 px-20 pb-20 text-[14px] lg:text-2xl md:text-xl">
            To avoid spread of COVID contagion through at the time of checking
            SpO2 and temperature levels.
          </p>
        </div>
        <div className="  border-4 rounded-3xl w-full shadow-2xl border-[#1A8E3F]">
          <h1 className="text-2xl font-bold text-[#1A8E3F] lg:text-4xl md:text-2xl pt-12 pb-16">
            Objective
          </h1>
          <p className="lg:px-28 md:px-28 px-20 pb-20 text-[14px] lg:text-2xl md:text-xl">
            To build model of quick cost -effective SpO2 & temperature
            self-check system
          </p>
        </div>
        <div className="  border-4 rounded-3xl w-full shadow-2xl border-[#027FFF]">
          <h1 className="text-2xl font-bold text-[#027FFF] lg:text-4xl md:text-2xl pt-12 pb-16">
            Outcome
          </h1>
          <p className="lg:px-28 md:px-28 px-20 pb-20 text-[14px] lg:text-2xl md:text-xl">
            Effectively built an efficient working Arduino based blood oxygen
            and SpO2 checking <br />
             model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IeeePoints;
