import React from "react";
import goku from "../../../Assets/about/goku.png";
import sketchad from "../../../Assets/about/pencilsketchadjusted-2995813.png";

const ExtracurricularsDetails = () => {
  return (
    <div className="w-[90%] flex gap-10 mx-auto mt-14 justify-center pb-10">
      <div className=" lg:px-20 md:px-10 px-2 py-14 shadow-2xl w-[45%] rounded-3xl bg-gradient-to-b from-[#007AF6] to-[#1ABAFA]">
        <div className="lg:text-3xl md:text-xl text-sm text-white font-bold lg:gap-4 md:gap-5">
          <span>Sports</span>
        </div>
        <p className=" lg:text-[36px] md:text-xl text-sm lg:px-5 lg:py-28 md:py-16 py-10 text-black text-justify mt-32">
          Represnted India at <br /> the Akshay Kumar <br /> International
          Karate <br /> Championship and won the{" "}
          <span className="font-semibold">bronze medal</span> .
        </p>
      </div>
      <div className=" lg:px-20 md:px-10 px-2 py-14 shadow-2xl w-[45%] rounded-3xl bg-black">
        <div className="lg:text-3xl md:text-xl text-sm text-[#0587F7] font-bold lg:gap-4 md:gap-5">
          <span>Art account</span>
        </div>
        <p className=" lg:text-[36px] md:text-xl text-sm lg:px-5 lg:py-28 md:py-16 py-10 text-white text-justify">
          My passion for the arts <br />
          propeled me to start an <br />
          art account and now it <br />
          has{" "}
          <span className=" font-semibold text-[#007AF6]">
            21k+ followers
          </span>{" "}
          .
        </p>
        <div className=" flex w-[95%] mx-auto py-5">
          <img className=" w-[40%]" src={goku} alt="" />
          <img className="w-[60%]" src={sketchad} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularsDetails;
