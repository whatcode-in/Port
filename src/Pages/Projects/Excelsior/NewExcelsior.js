import React from "react";
import podcastImage from "../../../Assets/the_podcast_full.png"

const NewExcelsior= () => {
    return(
        <div className="w-[85%] mx-auto mt-24">
            <h3 className="text-[#FFFFFF99] text-sm md:text-2xl lg:text-4xl">
                 The Personal Project
            </h3> 
            <h1 className="text-[#FF0E0E] lg:text-6xl md:text-4xl text-2xl font-bold my-5">
                The Excelsior Podcast
            </h1>

            <div className="w-[100]% podcast-image-container">
                <img src={podcastImage}/>
            </div>

        </div>
    )
}

export default NewExcelsior