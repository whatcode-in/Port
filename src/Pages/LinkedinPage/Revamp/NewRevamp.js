import React from "react";
import "./NewRevamp.css"
import eyesImage from "../../../Assets/linkedin/Eyes.png"

const NewRevamp = () => {
  return (
    <div className="mt-32 w-[100%] mx-auto flex justify-center flex-col">

      <h1 className="lg:w-[56rem] md:w-[36rem] mx-auto text-4xl md:text-6xl lg:text-8xl font-bold flex justify-center new-revamp-main-heading">
        <span className="text-white">The&nbsp;</span><span className="new-revamp-heading text-transparent bg-clip-text">REVAMP&nbsp;</span> 
        <div className="eyes-image-container">
        <img src={eyesImage}/>
        </div>
      </h1>

      <div  className="lg:text-3xl md:text-xl text-[9px] w-[60%] new-rewamp-description mt-8">
        Revamped the look of the interface to an extent. However, the change
        is not so drastic that users no longer recognize it.Instead, the new vibrant look increases the allure of the platform.
      </div>

      {/* <h1 className=" lg:text-3xl md:text-xl text-[9px] w-[70%]">
          Revamped the look of the interface to an extent. However, the change
          is not so drastic that users no longer recognize it.Instead, the new vibrant look increases the allure of the platform.{" "}
        </h1> */}

      {/* <div className="flex gap-10">
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
      </div> */}


    </div>
  );
};

export default NewRevamp;

