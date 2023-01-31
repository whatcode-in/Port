import React from "react";
import alumini from "../../../Assets/about/alumini.png"
import codechef from "../../../Assets/about/codechef.png"
import cultural from "../../../Assets/about/cultural_commitee.png"
import last from "../../../Assets/about/last.png"
import mpstmeIEE from "../../../Assets/about/mpstme_iee.png"
import munSociety from "../../../Assets/about/mun_society.png"



const Extracurriculars = () => {
  return (
    <div className="pb-16 mt-24">
      <h1 className="lg:text-8xl md:text-6xl text-4xl mb-10 bg-gradient-to-br from-[#0587F7] to-[#573EF3] text-transparent bg-clip-text font-bold text-center">
        Extracurriculars
      </h1>
      <div className="w-[90%] mx-auto shadow-2xl px-24 rounded-3xl">
        <div className="text-[#0587F7] flex pt-11 text-sm md:text-xl lg:text-3xl mb-8">
          <span>Student Chapters</span>
          <span>Aug 2019 - Nov 2022</span>
        </div>
        <div>
          {/* <p className="text-black text-sm md:text-xl lg:text-3xl lg:pb-60">
            I was a part of several student chapters & acadmic groups, from the
            Model United Nations Society, the NMIMS Alumni association to{" "}
            <span className=" font-medium text-[#0587F7]">
              leading the IEEE chapter
            </span>{" "}
            in my final year. <br /> <br />
            My contribution to the University was quite significant throught my
            undergrad tenure. <br /> <br />
            Besides getting professionals from differing domains as guest
            speakers & panelists, even after passing out; I connected the
            placement cell to{" "}
            <span className=" font-medium text-[#0587F7]">
              recruiters & hiring managers
            </span>{" "}
            from Fortune 500 companies.
          </p> */}

          <p className="text-black text-sm md:text lg:text-3xl" style={{color: "rgba(0, 0, 0, 0.6)",fontWeight: "600"}}>
          Led the IEEE Student Chapter, & managed other clubs in the design & <br></br>marketing domains.
          <br></br> <br></br>
          Connected the placement cell to <span className="text-[#0587F7]">recruiters & hiring managers</span> from Fortune 500 companies.
          </p>
          <br></br>
          <br></br>
        </div>


        <div className="flex justify-evenly">

          <div>
            <img src={mpstmeIEE}/>
          </div>

          <div>
            <img src={munSociety}/>
          </div>

          <div>
            <img src={cultural}/>
          </div>

          <div>
            <img src={codechef}/>
          </div>

        </div>

          
        <div className="flex justify-evenly w-[60%] mx-auto pb-12">

          <div>
            <img src={alumini}/>
          </div>

          <div>
            <img src={last}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Extracurriculars;
