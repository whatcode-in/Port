import React from "react";
import phone from "../../../Assets/excelsior/phone.png";

const Excelsior = () => {
  return (
    <div className="w-[85%] mx-auto my-20">
      <h3 className="text-[#FFFFFF99] text-sm md:text-2xl lg:text-4xl">
        The Personal Project
      </h3>
      <h1 className="text-[#FF0E0E] lg:text-6xl md:text-4xl text-2xl font-bold my-5">
        The Excelsior Podcast
      </h1>
      <div className="border-4 flex rounded-3xl border-[#FF0E0E] md:h-[469px] h-[211px] lg:h-[706px] ">
        <div className="flex-2 w-[60%] bg-white rounded-l-3xl">
          <img className=" relative top-3 rounded-3xl" src={phone} alt="" />
        </div>
        <div className=" flex-1">
          <p className="text-[#FFFFFF99] lg:text-2xl md:text-[15px] text-[9px] pt-[22%] lg:px-16 px-2">
            Listen to the advice from the best <br />
            in {""}
            <span className="text-white">
              Product, Web3, Marketing and Entrepreneurship.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Excelsior;
