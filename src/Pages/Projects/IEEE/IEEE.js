import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import tab from "../../../Assets/ieee/tab.png";
import reveal from "../../../ScrollAnimation";
import "../../../Global.css"
import underline from '../../../Assets/profile/Underline 2.png'


const IEEE = () => {
  window.addEventListener('scroll',reveal)
  reveal()

  return (
    <div className="w-[85%] mx-auto reveal">
      <h3 className="text-[#FFFFFF99] text-sm md:text-2xl lg:text-4xl standard-heading-line-heights" style={{fontWeight: "700"}}>
        The Personal Project
      </h3>
      <h1 className="text-[#23D65C] lg:text-6xl md:text-4xl text-2xl font-bold my-5">
        IEEE <span>
          Publication
          <img class="mt-1 md:w-36 lg:w-auto md:ml-44 lg:ml-56" src={underline}></img>
        </span>
      </h1>
      
      <div className="border-4 rounded-3xl border-[#23D65C] bg-[#F5F5F7] md:h-[469px] h-[211px] lg:h-[706px] ">
        <div>
          <p className="text-[#00000099] font-bold lg:text-[26px] md:text-[18px] text-[8px] text-center md:mt-[2%] mt-[1%] lg:mt-[2%]">
            <span className="text-[#007AF6]" >COVID-19</span> wreaked havoc all over, people had to work from <br />
            home to curb the spread of this deadly virus. This paper <br />
            presents a{" "}
            <span className="font-medium text-black">
              cost effective solution
            </span>{" "}
            that can be employed to <br />
            solve that effectvely.
          </p>
          <Link
            to={"/projects/IEEE-Publication"}
            className="text-[#23D65C] md:text-lg text-[8px] lg:text-3xl font-medium flex justify-center md:mt-[2%] mt-[0%] lg:mt-[2%] z-10 relative"
          >
            Know more {">"}
          </Link>
        </div>
        <div>
          <img
            className="relative lg:-top-[3rem] -top-[1.5rem]"
            src={tab}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IEEE;
