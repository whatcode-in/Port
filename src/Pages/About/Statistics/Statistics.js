import React from "react";
import "./Statistics.css"


const Statistics = () => {
  return (
    <div className="mt-40 pb-20">
      <h1 className="lg:text-7xl md:text-5xl text-3xl text-[#007AF6] text-center pb-12">
        Statistics, Volunteering <br /> And Extracurriculars
      </h1>
      <div className="shadow-2xl w-[90%] mx-auto py-16 px-20 rounded-3xl" style={{background: "#F2F2F2"}}>
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10">

          <div className="statistics-wrapper">
          <div className="statistics-card w-[100%] p-10 border-4 rounded-3xl text-center">
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              10+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              <b>communities <br /> built globally</b>
            </p>
          </div>
          </div>

          <div className="statistics-wrapper">
          <div className="statistics-card w-[100%] p-10 border-4  rounded-3xl text-center">
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              250K+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              <b>people impacted</b>
            </p>
          </div>
          </div>

          <div className="statistics-wrapper">
          <div className="statistics-card w-[100%] p-10 border-4 rounded-3xl text-center">
            <h2 className="text-black text-2xl font-semibold">Added</h2>
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              30+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              <b>people get jobs <br /> and internships</b>
            </p>
          </div>
          </div>


          <div className="statistics-wrapper">
          <div className="statistics-card w-[100%] p-10 border-4  rounded-3xl text-center">
            <h2 className="text-black text-2xl font-semibold">Connected</h2>
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              15+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              <b>organizations to <br /> advisors and VCs</b>
            </p>
          </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Statistics;
