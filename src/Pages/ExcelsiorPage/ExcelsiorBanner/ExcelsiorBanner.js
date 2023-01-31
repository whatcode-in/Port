import React from "react";
import ohmygod from "../../../Assets/gifs/ohyeah.gif";
import "../../../Global.css"

const ExcelsiorBanner = () => {
  return (
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
  );
};

export default ExcelsiorBanner;
