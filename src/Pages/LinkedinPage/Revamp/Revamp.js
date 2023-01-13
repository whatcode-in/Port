import React from "react";

const Revamp = () => {
  return (
    <div className=" mt-20 w-[90%] mx-auto">
      <h1 className="lg:text-7xl md:text-5xl text-2xl font-bold text-white">
        The{" "}
        <span className="bg-gradient-to-br from-[#FFFFFF] to-[#FF4AF8] text-transparent bg-clip-text">
          REVAMP
        </span>
      </h1>
      <div className="flex gap-10">
        <h1 className=" lg:text-3xl md:text-xl text-[9px] w-[70%]">
          Revamped the look of the interface to an extent. However, the change
          is not so drastic that users no longer recognize it. <br /> <br />
          Instead, the new vibrant look increases the allure of the platform.{" "}
        </h1>
        <div className=" border-2 border-blue-500 w-[40%] py-5 px-4 rounded-3xl">
          <h1 className=" lg:text-3xl md:text-xl text-[9px] font-bold text-blue-500">
            Salient Points
          </h1>
          <div className="flex flex-col lg:text-2xl md:text-xl py-5 text-[9px]">
            <span>
              A revamped look to the <br /> homefeed where stats, & <br />
              comments, etc. can be <br />
              viewed right on the side. <br />
            </span>
            <span>
              A modernized job portal. <br />
            </span>
            <span>
              The connections page is glamorized a bit to make it a bit more
              visually appealing.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revamp;
