import React from "react";
import email from "../../Assets/sIcons/circledEnvelope.png";
import linkedin from "../../Assets/sIcons/linkedInCircled.png";
import twitter from "../../Assets/sIcons/twitterCircled.png";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <h1 className="w-[54rem] mx-auto text-8xl text-center text-[#FFFFFF99]">
        Let’s work <span className="text-white">together</span> <br /> on your
        next project
      </h1>
      <h3 className="text-center text-[#007AF6] text-6xl mt-20">
        Reach out to me via:
      </h3>
      <div className="grid grid-cols-2 gap-8 text-white text-xl justify-items-center my-20 w-[50%] mx-auto">
        <a
          href="https://www.linkedin.com/in/omkarkapade/"
          className="flex items-center gap-2 border-4 rounded-[50px] border-[#007AF6] py-3 px-2 justify-center"
        >
          <img src={linkedin} alt="" />
          <p>LinkedIn(omkarkapade)</p>
        </a>
        <a
          href="https://twitter.com/omkar_kapade11"
          className="flex items-center gap-2 border-4 rounded-[50px] border-[#007AF6] py-2 px-2 justify-center "
        >
          <img src={twitter} alt="" />
          <p>Twitter(omkar_kapade11)</p>
        </a>
        <a
          href="https://mail.google.com/mail/u/2/#inbox?compose=new"
          className="flex items-center gap-2 border-4 rounded-[50px] border-[#007AF6] col-span-2 py-2 px-2 justify-center "
        >
          <img src={email} alt="" />
          <p>Email(omkarkapade11@gmail.com)</p>
        </a>
      </div>
      <div>
        <p className="text-[#007AF6] text-2xl text-center font-bold flex justify-center items-center">
          Copyright 2022 <CgCopyright className="text-sm mx-3"></CgCopyright>{" "}
          Omkar Kapade.
        </p>
      </div>
    </div>
  );
};

export default Footer;
