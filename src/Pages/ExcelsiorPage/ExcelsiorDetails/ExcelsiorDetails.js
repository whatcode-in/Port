import React from "react";
import phone from "../../../Assets/excelsior/phone2.png";
import './ExcelsiorDetails.css'
import outcomesArrow from "../../../Assets/excelsior/arrow_outcomes.png";
import motivationArrow from "../../../Assets/excelsior/motivation_arrow.png";
import objectArrow from "../../../Assets/excelsior/objective_arrow.png";
import highVoltage from "../../../Assets/excelsior/high_voltage.png";
import checkMark from "../../../Assets/excelsior/checkmark_button.png";
import target from "../../../Assets/excelsior/objective_img.png";
import mobilePodcast from "../../../Assets/excelsior/mobile_podcast.png";

const ExcelsiorDetails = () => {

  return (
    <div className="mt-20">
      <h1 className="details-subtitle-gradient text-transparent bg-clip-text lg:text-7xl md:text-5xl text-2xl font-bold text-center">
        Motivation, Objective <br />
        <span className=" details-subtitle-gradient-1 text-transparent bg-clip-tex">and Outcome</span>
      </h1>

      <div className="mt-24 mobile-podcast-container">
          <img src={mobilePodcast}/>
      </div>


      {/* <div className="flex justify-center motivation-objective-outcome-container mt-24">

        <div className="motivation-objective-div">
          
          <div className="motivation-div mt-24">
          <div className="ml-8 font-bold text-[#ffffff] lg:text-4xl md:text-1xl flex">
            Motivation 
            <img src={highVoltage}/>
            </div>

          <br></br>
           <div className="ml-8 lg:text-[20px] md:text-[15px] text-[10px] flex-col motivation-content">
            As a University Student, I was<br></br>
            worried if I would be able to<br></br>
            land a role in a multinational. <br></br>
            In this podcast, I interact with<br></br>
            professionals across domains<br></br>
            to understand what transpires<br></br>
            in the industry.
            </div>


          </div>

          <div className="objective-div mt-24">
          <div className="ml-8 text-2xl font-bold text-[#ffffff] lg:text-4xl md:text-2xl flex">
            Objective 
          <img src={target}/>
          </div>

          <br></br>
          <div className="ml-8 lg:text-[20px] md:text-[15px] text-[10px] flex-col objective-content">
          Estabilishing a rich network with<br></br>
          professionals across Web2 <br></br>
          and Web3 domains. Understanding <br></br>
          the practices & culture across <br></br>
          companies.
          </div>

          </div>



        </div>

        <div className="phone">
          <img className="" src={phone} alt="" />
        </div>

        
        <div className="outcomes-div mt-36">
          <div className="ml-8 text-2xl font-bold text-[#ffffff] lg:text-4xl md:text-2xl flex">
          Outcomes 
          <img className="mt-1" src={checkMark}/>
          </div>

          <br></br>
          <div className="ml-8 lg:text-[20px] md:text-[15px] text-[10px] flex-col outcomes-content">
                 Networked & interacted with <br></br>
                  over a hundred Product <br></br>
                  Managers, Designers & <br></br>
                  Marketers from Web2 & Web3.

                  <br></br><br></br>

                  Understood the importance of<br></br>
                  being entrepreneurial, <br></br>
                  developed<br></br>
                  a Product Mindset, & a unique<br></br>
                  brand across platforms.
          </div>

          </div>
       
      </div> */}

    </div>
  );
};

export default ExcelsiorDetails;
