import React from "react";
import "./NewRevamp.css"
import eyesImage from "../../../Assets/linkedin/Eyes.png"
import revampBlockImage1 from "../../../Assets/linkedin/revamp_block1.png"
import revampBlockImage2 from "../../../Assets/linkedin/rewamp_block2.png"
import revampBlockImage3 from "../../../Assets/linkedin/revamp_block3.png"

import fullRevamp1 from "../../../Assets/linkedin/revamp1.png"
import fullRevamp2 from "../../../Assets/linkedin/revamp2.png"
import fullRevamp3 from "../../../Assets/linkedin/revamp3.png"

const NewRevamp = () => {
  return (
    <div className="mt-32 w-[100%] mx-auto flex justify-center flex-col">

      <h1 className="lg:w-[56rem] md:w-[36rem] mx-auto text-4xl md:text-6xl lg:text-8xl font-bold flex justify-center new-revamp-main-heading">
        <span className="text-white">The&nbsp;</span><span className="new-revamp-heading text-transparent bg-clip-text">REVAMP&nbsp;</span> 
        <div className="eyes-image-container">
        <img src={eyesImage}/>
        </div>
      </h1>

      <div  className="lg:text-3xl md:text-xl text-[20px] w-[60%] new-rewamp-description mt-8">
        Revamped the look of the interface to an extent. However, the change
        is not so drastic that users no longer recognize it.Instead, the new vibrant look increases the allure of the platform.
      </div>


      {/* <div className="flex justify-start align-middle mt-32 revamp-alphabet-container">
        <div className="alphabet-ellipse">A</div>

        <div className="lg:text-2xl md:text-xl text-[15px] w-[40%] new-rewamp-description">
            A <span className="text-white">revamped</span> look to the homefeed where <span className="text-white">stats</span>, & <span className="text-white">comments</span>, etc. can be viewed right on the side.
        </div>

      </div> */}

      {/* <div className="new-rewamp-block-container mt-5 flex">

        <div className="new-rewamp-image-container">
            <img src={revampBlockImage1}/>
        </div>

        <div className="new-rewamp-block-text-container">

            <div className="lg:text-2xl md:text-xl text-[15px] xl:w-[45%] md:w-[60%]">
            A <span className="text-white">chart</span> showcasing the
            things that are needed 
            to have an all-star profile.
            </div>

            <div className="lg:text-2xl md:text-xl text-[15px] xl:w-[45%] md:w-[60%]">
            Notifications are 
            <span className="text-white"> displayed</span> on the
            screen at all times.
            </div>

        </div>

      </div> */}

      {/* <div className="lg:text-2xl md:text-xl text-[15px] xl:w-[45%] ml-40">
      <span className="text-white">Messages</span> can be<br></br> seen at all times.
    </div> */}


    {/* <div className="flex justify-start align-middle mt-32 revamp-alphabet-container">
        <div className="lg:text-2xl md:text-xl text-[15px] w-[40%] new-rewamp-description">
            A <span className="text-white"> mordenized </span>job protal 
        </div>

      </div> */}


      {/* <div className="new-rewamp-block-container mt-10 flex">
        <div className="new-rewamp-image-container-1">
            <img src={revampBlockImage2}/>
        </div>

            <div className="lg:text-2xl md:text-xl text-[15px] xl:w-[45%] md:w-[60%] comprehensive-text">
            <span className="text-white">Comprehensive and<br></br> succinct</span> information<br></br> regarding the skillset<br></br> needed for the role in<br></br> question.
            </div>
      </div> */}


      {/* <div className="flex justify-end align-middle mt-32 revamp-alphabet-container" id="block-3-text">
        <div className="alphabet-ellipse">C</div>

        <div className="lg:text-2xl md:text-xl text-[15px] w-[50%] new-rewamp-description-3">
        The connections page is <span className="text-white">glamorized</span> a bit to<br></br> make it a bit more visually appealing.
        </div>

      </div> */}

      {/* <div className="new-rewamp-block-container mt-5 flex">


        <div className="new-rewamp-block-text-container">

            <div className="lg:text-2xl md:text-xl text-[15px] xl:w-[45%] md:w-[60%]">
           
            Drop down menus showing <span className="text-white">connections</span> viz. following & events.
            </div>

            <div className="lg:text-2xl md:text-xl text-[15px] xl:w-[45%] md:w-[60%]">
            <span className="text-white">Reduced whitespace</span> with a more dynamic feature set.
            </div>

        </div>

        <div className="new-rewamp-image-container">
            <img src={revampBlockImage3}/>
        </div>

      </div> */}



      <div className="mt-24 revamp-main-container">
        <img className="mt-12" src={fullRevamp1}/>
        <img className="mt-20"  src={fullRevamp2}/>
        <img  className="mt-20" src={fullRevamp3}/>
      </div>

    

    </div>
  );
};

export default NewRevamp;

