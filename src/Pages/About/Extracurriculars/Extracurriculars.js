import React from "react";

const Extracurriculars = () => {
  return (
    <div className="pb-16">
      <h1 className="lg:text-8xl md:text-6xl text-4xl mb-10 bg-gradient-to-br from-[#0587F7] to-[#573EF3] text-transparent bg-clip-text font-bold text-center">
        Extracurriculars
      </h1>
      <div className=" w-[90%] mx-auto shadow-2xl px-24 rounded-3xl">
        <div className="text-[#0587F7] flex pt-11 text-sm md:text-xl lg:text-3xl justify-between lg:mb-44 md:mb-24 mb-16">
          <span>Student Chapters</span>
          <span>Aug 2019 - Nov 2022</span>
        </div>
        <div>
          <p className="text-black text-sm md:text-xl lg:text-3xl lg:pb-60 md:pb-36 pb-24">
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extracurriculars;
