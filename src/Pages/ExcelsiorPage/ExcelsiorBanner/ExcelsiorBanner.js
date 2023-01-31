import React from "react";
import ohmygod from "../../../Assets/gifs/ohyeah.gif";
import "../../../Global.css"
import excelsior from "../../../Assets/excelsior/orange_arrow.png";

const ExcelsiorBanner = () => {
  return (
    <>
    <div className=" flex items-center mt-36 px-20 gap-5 podcast-heading-div">
      <div className="flex-1">
        <h1 className=" lg:text-[9rem] md:text-[5rem] text-[2rem] text-[#FE420B] standard-heading-line-heights" style={{fontWeight: "700"}}>
          The <br />
          Excelsior <br />
          <span className="text-white">Podcast</span>
        </h1>
      </div>
      <div>
        <img className="rounded-3xl" id="podcast-image"  src={ohmygod} alt="" />
      </div>
    </div>

    <div className="podcast-sub-div-container mt-12 pl-24 flex" style={{alignItems: "center"}}>

      <div  style={{alignItems: "center"}} className="podcast-sub-div">
        <span className="py-3 px-5 border-2 lg:text-3xl md:text-xl text-sm border-[#FE420B] text-[#000000] rounded-full w-[30%]">
          motivation1234
        </span>
      </div>
        
    <div className="ml-4">
        <img src={excelsior} style={{width: "50px"}}/>
    </div>

    </div>


    </>
  );
};

export default ExcelsiorBanner;
