import React from "react";
import ohmygod from "../../../Assets/excelsior/ohmygod.png";

const ExcelsiorBanner = () => {
  return (
    <div className=" flex items-center mt-36 px-20 gap-5">
      <div className="flex-1">
        <h1 className=" lg:text-[9rem] md:text-[5rem] text-[2rem] text-[#FE420B]">
          The <br />
          Excelsior <br />
          <span className="text-white">Podcast</span>
        </h1>
      </div>
      <div>
        <img src={ohmygod} alt="" />
      </div>
    </div>
  );
};

export default ExcelsiorBanner;
