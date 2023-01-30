import React from "react";
import { Link } from "react-router-dom";
import phone from "../../../Assets/excelsior/group.png";

const Excelsior = () => {




  return (
    <div className="w-[85%] mx-auto my-20 overflow-hidden z-40 reveal">
      <h3 className="text-[#FFFFFF99] text-sm md:text-2xl lg:text-4xl">
        The Personal Project
      </h3>
      <h1 className="text-[#FF0E0E] lg:text-6xl md:text-4xl text-2xl font-bold my-5">
        The Excelsior Podcast
      </h1>
          <Link to="/projects/excelsior"><img className=" relative top-3  md:h-[469px] h-[300px] lg:h-[726px]" src={phone} alt="" /></Link>
      </div>
  );
};

export default Excelsior;
