import React from "react";
import arrow from "../../../Assets/profile/upArrow.png";
import damon from "../../../Assets/ieee/damon-salvatore-reading-book.png";

const IeeeBanner = () => {
  return (
    <div className="flex items-center gap-20 w-[80%] mx-auto my-44">
      <div className="lg:text-[110px] md:text-[88px] text-[24px] text-[#23D65C] flex-1">
        <div className="flex items-center lg:gap-5 gap-1">
          <h1>The IEEE</h1>
          <img
            className="border-4 lg:py-4 lg:px-3 md: py-2 px-1 w-10 lg:w-24 md:w-16 rounded-full border-[#23D65C]"
            src={arrow}
            alt=""
          />
        </div>
        <h1 className="text-white">Publication</h1>
      </div>
      <div className="flex-1">
        <img className="w-full" src={damon} alt="" />
      </div>
    </div>
  );
};

export default IeeeBanner;
