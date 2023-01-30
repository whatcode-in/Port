import React from "react";
import scott from "../../../Assets/about/the-office-michael-scott.png";
import aboutMe from "../../../Assets/about/AboutME.png";

const AboutMe = () => {
  return (
    <div className="py-28 bg-black">
      <div className="flex items-center lg:px-20 gap-10">
        <div className="flex-1">
          <img src={aboutMe} alt="" />
        </div>
        <div className=" flex-1">
          <img src={scott} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
