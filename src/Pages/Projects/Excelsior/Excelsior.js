import React from "react";
import { Link } from "react-router-dom";
import phone from "../../../Assets/excelsior/phone.png";
import user1 from "../../../Assets/excelsior/user1.png";
import user2 from "../../../Assets/excelsior/user2.png";
import user3 from "../../../Assets/excelsior/user6.png";
import user4 from "../../../Assets/excelsior/user3.png";
import user5 from "../../../Assets/excelsior/user4.png";
import user6 from "../../../Assets/excelsior/user5.png";
import reveal from "../../../ScrollAnimation"

const Excelsior = () => {

  window.addEventListener('scroll',reveal)
  reveal()



  return (
    <div className="w-[85%] mx-auto my-20 overflow-hidden z-40 reveal">
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

          <Link
            className="text-[#007AF6] md:text-lg text-sm lg:text-3xl font-medium ml-[50%] relative lg:top-[26rem] md:top-[16rem] top-[6rem]"
            to={"/projects/excelsior"}
          >
            Know More {">"}
          </Link>
        </div>
      </div>
      <div className="lg:grid hidden">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 text-white text-sm lg:text-xl justify-items-center my-20 w-[80%] mx-auto relative bottom-[33rem] left-[27rem] z-0">
          <div className=" flex items-center rounded-3xl gap-2 bg-blue-500 py-3 px-5">
            <img src={user1} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
          <div className=" flex items-center rounded-3xl gap-10 bg-blue-500 py-3 px-5">
            <img src={user2} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
          <div className=" flex items-center rounded-3xl gap-10 bg-blue-500 py-3 px-5">
            <img src={user3} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 text-white text-sm lg:text-xl justify-items-center my-20 w-[80%] mx-auto relative bottom-[40rem] left-[24rem] z-0">
          <div className=" flex items-center rounded-3xl gap-2 bg-blue-500 py-3 px-5">
            <img src={user5} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
          <div className=" flex items-center rounded-3xl gap-10 bg-blue-500 py-3 px-5">
            <img src={user6} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
          <div className=" flex items-center rounded-3xl gap-10 bg-blue-500 py-3 px-5">
            <img src={user3} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 text-white text-sm lg:text-xl justify-items-center my-20 w-[80%] mx-auto relative bottom-[47rem] left-[27rem] z-0 ">
          <div className=" flex items-center rounded-3xl gap-2 bg-blue-500 py-3 px-5">
            <img src={user4} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
          <div className=" flex items-center rounded-3xl gap-10 bg-blue-500 py-3 px-5">
            <img src={user5} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
          <div className=" flex items-center rounded-3xl gap-10 bg-blue-500 py-3 px-5">
            <img src={user3} alt="" />
            <div>
              <p>Jae Taylor</p>
              <span className="text-[9px] lg:text-sm ">
                Founder & Product Leader
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excelsior;
