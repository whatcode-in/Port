import React from "react";

const VolunteerDetails = () => {
  return (
    <div className="w-[90%] flex gap-10 mx-auto mt-14 justify-center pb-10">
      <div className=" lg:px-20 md:px-10 px-2 py-14 shadow-2xl w-[45%] rounded-3xl">
        <div className="lg:text-3xl md:text-xl text-sm flex text-[#FE420B] font-semibold lg:gap-4 md:gap-5">
          <span>Volunteer</span>
          <span>Aug 2019 - Oct 2019</span>
        </div>
        <p className=" lg:text-3xl md:text-xl text-sm lg:px-5 lg:py-28 md:py-16 py-10 text-black">
          The Social Impact Student chapter of our University had a Serve Out
          Smiles campaign wherein the objective was to help underprivileged
          students social skills and communication. <br /> <br /> As a{" "}
          <span className="font-semibold text-[#FE420B]">Volunteer</span>, I
          interacted with underprivileged students’ and taught them a variety of
          things from the art and craft domain.
        </p>
      </div>
      <div className="w-[45%] shadow-2xl rounded-3xl bg-gradient-to-b from-[#FAAF40] to-[#FF6D76] flex">
        <p className="text-white font-bold lg:text-7xl md:text-5xl text-3xl lg:px-20 mt-80">
          For the greater good <br />
          and better <br />
          tomorrows.
        </p>
      </div>
    </div>
  );
};

export default VolunteerDetails;
