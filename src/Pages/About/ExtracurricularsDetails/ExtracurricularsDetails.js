import React from "react";
import goku from "../../../Assets/about/goku.png";
import sketchad from "../../../Assets/about/bond.png";
import bronzeMedal from "../../../Assets/about/bronze_medal.png";
import "../../../Global.css"

const ExtracurricularsDetails = () => {


  return (
    <div className="w-[90%] flex gap-10 mx-auto mt-14 justify-center pb-10">

      <div className=" lg:px-20 md:px-10 px-2 py-14 shadow-2xl w-[45%] rounded-3xl bg-gradient-to-b from-[#007AF6] to-[#1ABAFA]">
        <div className="lg:text-3xl md:text-xl text-sm text-white font-bold lg:gap-4 md:gap-5 mx-auto flex-col">
          <span className="ml-4">Sports</span>
          <p className=" lg:text-[36px] md:text-xl text-sm lg:px-5 lg:py-28 md:py-16 py-10 text-justify sports-line-height" 
          style={{color: "rgba(0, 0, 0, 0.6)",fontWeight: "500"}}
          >
          Represnted India at <br /> the Akshay Kumar <br /> International
          Karate <br /> Championship and won the{" "}
          <span className="font-semibold text-black">bronze medal</span> .
        </p>
        </div>

        <div>
            <img src={bronzeMedal}/>
        </div>

      </div>


      <div className=" lg:px-20 md:px-10 px-2 py-14 shadow-2xl w-[45%] rounded-3xl bg-black">
        <div className="lg:text-3xl md:text-xl text-sm text-[#0587F7] font-bold lg:gap-4 mx-auto flex-col  md:gap-5">
          <span className="ml-4"> Art account</span>
        </div>
        <p className=" lg:text-[36px] md:text-xl text-sm lg:px-5 lg:py-28 md:py-16 py-10 text-white text-justify art-line-height">
          My passion for the arts <br />
          propeled me to start an <br />
          art account and now it <br />
          has{" "}
          <span className=" font-semibold text-[#007AF6]">
            21k+ followers
          </span>{" "}
          .
        </p>
        <br></br> <br></br>
        <div className="flex w-[95%] mx-auto py-5 justify-evenly"
        style={{border: "3px solid #FFFFFF",borderRadius: "28px",height: "auto"}}
        >
          <img className="w-[30%]" src={goku} alt=""/>
          <img className="w-[50%]" src={sketchad} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularsDetails;
