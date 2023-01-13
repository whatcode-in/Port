import React from "react";
import arrow from "../../../Assets/linkedin/arrow.png";
import img1 from "../../../Assets/linkedin/1.png";
import img2 from "../../../Assets/linkedin/2.png";
import img3 from "../../../Assets/linkedin/3.png";
import img4 from "../../../Assets/linkedin/4.png";
import img5 from "../../../Assets/linkedin/5.png";

const Scenario = () => {
  return (
    <div className=" mt-20 w-[90%] mx-auto">
      <div className="flex items-center">
        <h1 className=" lg:text-7xl md:text-5xl text-2xl font-bold text-white">
          The{" "}
          <span className=" bg-gradient-to-br from-[#FFFFFF] to-[#FF4AF8] text-transparent bg-clip-text">
            Current
          </span>{" "}
          <br />
          Scenario
        </h1>
        <img
          className=" border-2 lg:p-4 md:p-3 p-2 rounded-full border-white -mb-20 -ml-28"
          src={arrow}
          alt=""
        />
      </div>
      <div>
        <div className=" flex justify-end items-center">
          <div>
            <h1 className=" text-white font-bold lg:text-4xl md:text-2xl text-sm">
              Wasted Space
            </h1>
            <span className=" lg:text-3xl md:text-xl text-[9px]">
              This space can be utilized to showcase a <br />
              fuller screen and perhaps incorporating <br />
              adding on features.
            </span>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className=" flex items-end gap-10 -mt-36">
          <div className="flex-1">
            <img src={img2} alt="" />
          </div>
          <div className="flex-1">
            <h1 className=" text-white font-bold lg:text-4xl md:text-2xl text-sm">
              Lackluster Interface
            </h1>
            <span className=" lg:text-3xl md:text-xl text-[9px]">
              This space can be utilized to showcase a fuller screen and perhaps
              incorporating adding on features.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scenario;
