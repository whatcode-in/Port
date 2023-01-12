import React from "react";
import img1 from "../../../Assets/linkedin/image2.png";
import img2 from "../../../Assets/linkedin/image3.png";
import img3 from "../../../Assets/linkedin/image1.png";

const Linkedin = () => {
  return (
    <div className="w-[85%] mx-auto">
      <h3 className="text-[#FFFFFF99] text-4xl">The Passion Project</h3>
      <h1 className="text-[#0A66C2] lg:text-6xl md:text-4xl text-2xl font-bold my-5">
        LinkedIn{" "}
        <span>
          {" "}
          Redesign{" "}
          {/* <hr className="w-64 mt-4 ml-[10%] border-[#23D65C] border-2" /> */}
        </span>
      </h1>
      <div className="border-4 border-[#0A66C2] text-center rounded-3xl bg-[#1D1D1F] h-[706px] ">
        <div>
          <p className="text-[#FFFFFF99] text-3xl my-14">
            Witness the <span className="text-white">revamped version</span> of
            LinkedIn, which not only <br />
            incorporates the best features with a{" "}
            <span className=" text-white">greater allure</span>.{" "}
          </p>
          <a className="text-[#007AF6] text-3xl font-medium" href="">
            Know more {`>`}
          </a>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="relative top-5 right-[9rem] hover:z-20"
            src={img2}
            alt=""
          />
          <img className="relative -top-[27.3rem] z-10" src={img1} alt="" />
          <img
            className="relative -top-[55.8rem] left-[9rem] hover:z-20 "
            src={img3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Linkedin;
