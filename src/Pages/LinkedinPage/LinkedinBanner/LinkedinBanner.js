import React from "react";
import noice from "../../../Assets/gifs/noics.gif";
import arrow from "../../../Assets/profile/upArrow.png";
import "../../../Global.css"

const LinkedinBanner = () => {
  return (
    <div className="">
      <div className="flex items-center mt-36 px-20 gap-5 linkedin-heading-div">
        <div className="flex-1">

          <h1 className="lg:text-[9rem] md:text-[5rem] text-[2rem] text-white standard-heading-line-heights standard-heading-line-heights" style={{fontWeight: "700"}}>
            <div className="text-blue-600">LinkedIn</div>
             <div className="mt-0">Redesign</div>
          </h1>

        </div>
        
        <div className="noice-image-container">
          <img className="rounded-3xl" src={noice} alt="" id="noice-image"/>
        </div>
      </div>

      <div className="mt-12 pl-24 motivtaion-div">
        <span className="py-3 px-5 border-2 lg:text-3xl md:text-xl text-sm border-[#DAED00] text-[#DAED00] rounded-full">
          motivation
        </span>
      </div>
    
      <div className="flex items-center">

        <div className="flex items-center">
          <div className="linkedin-text-div-1 w-[80%] mt-8 ml-24 border-4 border-blue-600 rounded-3xl px-5 py-3 bg-black  ">
            <span className="text-white font-medium lg:text-4xl md:text-3xl text-sm relative z-10">
              While LinkedIn is a great tool <br />
              for job hunting & networking, <br />
              there are a plethora of things <br />
              can be changed.
            </span>
          </div>
          <div className="z-40 relative overflow-hidden">
            <img
              className=" border-2 px-4 py-5 mt-16 -ml-8 border-white rounded-full "
              src={arrow}
              alt=""
            />
          </div>
        </div>

        <div className="flex-1 mt-12 linkedin-text-div-2">
          <span className="lg:text-3xl md:text-2xl text-sm text-white">
            The objective is to propel existing & new <br />
            (normal and premium) users to increase <br />
            their engagement on the platform.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LinkedinBanner;
