import React from "react";

const Statistics = () => {
  return (
    <div className="mt-40 pb-20">
      <h1 className="lg:text-7xl md:text-5xl text-3xl text-[#007AF6] text-center pb-12">
        Statistics, Volunteering <br /> And Extracurriculars
      </h1>
      <div className=" bg-[#00000033] shadow-2xl w-[90%] mx-auto py-16 px-20 rounded-3xl">
        <h1>Important Statistics</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10">
          <div className="w-[93%] p-10 border-4 border-[#0587F7] rounded-3xl text-center">
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              10+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              communities <br /> built globally
            </p>
          </div>
          <div className="w-[93%] p-10 border-4 border-[#0587F7] rounded-3xl text-center">
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              250+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              people impacted
            </p>
          </div>
          <div className="w-[93%] p-10 border-4 border-[#0587F7] rounded-3xl text-center">
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              30+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              people get jobs <br /> and internships
            </p>
          </div>
          <div className="w-[93%] p-10 border-4 border-[#0587F7] rounded-3xl text-center">
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-bold text-[#573EF3]">
              15+
            </h1>
            <p className="text-black lg:text-4xl md:text-2xl text-lg">
              organizations to <br /> advisors and VCs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
