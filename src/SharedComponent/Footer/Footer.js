import React from "react";
import email from "../../Assets/sIcons/circledEnvelope.png";
import linkedin from "../../Assets/sIcons/linkedInCircled.png";
import twitter from "../../Assets/sIcons/twitterCircled.png";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <div id="contact" className="mt-20">
      <h1 className="lg:w-[56rem] md:w-[36rem] mx-auto text-4xl md:text-6xl lg:text-8xl text-center text-[#FFFFFF99] font-semibold">
        Let’s work <span className="text-white">together</span> <br /> on your
        next project
      </h1>
      <h3 className="text-center text-[#007AF6] font-bold text-2xl md:text-4xl lg:text-6xl mt-20">
        Reach out to me via:
      </h3>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-3 gap-8 text-white text-sm lg:text-xl justify-items-center my-20 w-[70%] md:w-[60%] lg:w-[50%] mx-auto">
        <a
          href="https://www.linkedin.com/in/omkarkapade/"
          target="_blank"
          className="flex items-center gap-2 border-4 rounded-[50px] border-[#007AF6] py-2 px-3 justify-center"
        >
          <img src={linkedin} alt="" />
          <p className="hidden lg:flex md:flex">LinkedIn(omkarkapade)</p>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/omkar_kapade11"
          className="flex items-center gap-2 border-4 rounded-[50px] border-[#007AF6] py-2 px-2 justify-center "
        >
          <img src={twitter} alt="" />
          <p className="hidden lg:flex md:flex">Twitter(omkar_kapade11)</p>
        </a>
        <a
          target="_blank"
          href="https://mail.google.com/mail/u/2/#inbox?compose=new"
          className="flex items-center gap-2 border-4 rounded-[50px] border-[#007AF6] lg:col-span-2 md:col-span-2 py-2 px-2 justify-center "
        >
          <img src={email} alt="" />
          <p className="hidden lg:flex md:flex">
            Email(omkarkapade11@gmail.com)
          </p>
        </a>
      </div>
      <div>

        <p className="text-[#000000] text-lg lg:text-2xl text-center font-bold flex justify-center items-center" style={{backgroundColor: "#D9D9D9",height: "135px"}}>
          Copyright 2022 <CgCopyright className="text-sm mx-3"></CgCopyright>{" "}
          Omkar Kapade.
        </p>

      </div>
    </div>
  );
};

export default Footer;
