import React from "react";
import sch from "../../../Assets/about/career/sch.png";
import nft from "../../../Assets/about/career/NFTLabs-logo.png";
import ssies from "../../../Assets/about/career/SSIES-logo.png";

const CareerHilights = () => {
  return (
    <div>
      <section className=" text-gray-800">
        <div className="container mx-auto flex flex-col p-6">
          <h2 className="py-4 lg:text-8xl md:text-5xl text-3xl font-bold">
            Career{" "}
            <span className="bg-gradient-to-br from-[#EA3E34] via-[#573EF3] to-[#7148E7] text-transparent bg-clip-text">
              Highlights
            </span>
          </h2>
          <div className="divide-y divide-gray-300">
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <img src={sch} alt="" />
              </div>
              <div className="flex flex-col justify-center max-w-3xl font-bold col-span-full lg:col-span-3 lg:text-left lg:ml-20">
                <span className="lg:text-3xl text-xl tracking-wider uppercase text-violet-600">
                  Web3 & Product EIR
                </span>
                <span className="lg:text-4xl font-bold md:text-2xl">
                  Sep 2022 - Present &#10625; Job
                </span>
                <ul className="mt-4 text-gray-700 text-xl list-disc">
                  <li>Created user journeys for a plethora of brands</li>
                  <li>
                    Curated Decks & formulated strategies for brands like
                    Porsche, Heieneken & Castrol.
                  </li>
                  <li>
                    Formulated partnerships with other organizations that were
                    imperative in closing deals.
                  </li>
                  <li>
                    Conducted panel discussions on Web3, Marketing, UX and
                    entreprenuership.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <img src={nft} alt="" />
              </div>
              <div className="flex flex-col font-bold justify-center max-w-3xl col-span-full lg:col-span-3 lg:text-left lg:ml-20">
                <span className="lg:text-3xl text-xl tracking-wider uppercase text-violet-600">
                  Product Marketing & Design Specialist
                </span>
                <span className="lg:text-4xl font-bold md:text-2xl">
                  Apr 2022 - Sep 2022 &#10625; Job
                </span>
                <ul className="mt-4 text-gray-700 text-xl list-disc">
                  <li>Marketed the flagship product 'ItsMyne'.</li>
                  <li>Worked with brands like Coca-Cola, Times Group,</li>
                  Salesforce, Meta, and the Los Angeles Football Club.
                  <li>
                    Provided global exposure which led to monetary and
                    non-monetary partnerships and sponsorships with a high
                    closing rate.
                  </li>
                  <li>
                    Organized Panel Discussions that established greater
                    credibility on a global scale in the Web3 space.
                  </li>
                  <li>
                    Designed posters, banners, brochures, flexes, social media
                    posts.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
              <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                <img src={ssies} alt="" />
              </div>
              <div className="flex flex-col font-bold justify-center max-w-3xl col-span-full lg:col-span-3 lg:text-left lg:ml-20">
                <span className="lg:text-3xl text-xl font-bold tracking-wider uppercase text-violet-600">
                  Associate Product Manager - Design Enginnering
                </span>
                <span className="lg:text-4xl font-bold md:text-2xl">
                  Jul 2021 - Apr 2022 &#10625; Job
                </span>
                <ul className="mt-4 text-gray-700 text-xl list-disc">
                  <li>Visit industrial sites and list Areas of Improvement.</li>
                  <li>
                    Curate a plan of action that addresses these AOIs that
                    provide solutions to the same.
                  </li>
                  <li>
                    Formulate Strategies & Roadmaps keeping in mind the NFPA
                    standards.
                  </li>
                  <li>
                    Create AutoCAD designs that encompass the profered solutions
                    in compliance with the standards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerHilights;
