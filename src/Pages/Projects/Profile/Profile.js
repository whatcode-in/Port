import React from "react";
import img from "../../../Assets/profile/ellipse.png";
import arrow from "../../../Assets/profile/upArrow.png";

const Profile = () => {
  return (
    <div className=" my-20 lg:w-[85%] mx-auto">
      <div>
        <h3 className=" text-xl md:text-[40px] lg:text-6xl text-white font-medium relative top-12 lg:top-48 md:top-[8rem] left-[4rem] lg:left-[17rem] md:left-[11.5rem]">
          Hey, I am
        </h3>
      </div>
      <div className="flex">
        <div>
          <h1 className=" relative text-[5.4rem] md:text-[13.7rem] lg:text-[20.5rem] font-bold bg-gradient-to-br from-[#FE420B] to-[#573EF3] text-transparent bg-clip-text ">
            Omkar
          </h1>
        </div>
        <img
          className=" relative bottom-7 lg:-bottom-4 md:bottom-16 right-8 lg:right-12 md:right-10 w-24 md:w-[50rem] lg:w-full h-full "
          src={img}
          alt=""
        />
      </div>
      <div className="flex gap-4 items-center ml-[30%] lg:ml-[70%]">
        <div>
          <img
            className=" border-2 rounded-full px-5 py-7 w-16 md:w-full lg:w-full"
            src={arrow}
            alt=""
          />
        </div>
        <div>
          <p className=" text-lg md:text-xl lg:text-3xl text-[#FFFFFF99]">
            Simply put I am a <br />
            <span className="text-white">
              Web3 & Product <br />
              person{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
