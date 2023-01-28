import React from "react";
import spotifyImage1 from "../../../Assets/excelsior/spotify1.png"
import spotifyImage2 from "../../../Assets/excelsior/spotify2.png"
import spotifyImage3 from "../../../Assets/excelsior/spotify3.png"
import './StatsFromSpotify.css';

const StatsFromSpotify = () => {
    return (
        <div className="stats-from-spotify-container mt-32 mb-32">
            <h1 className="lg:w-[56rem] md:w-[36rem] mx-auto text-4xl md:text-6xl lg:text-8xl text-center text-white font-semibold">
                Stats From <span className="text-[#1DB954]">Spotify</span>
            </h1>

            <div className="stats-from-spotify-images-container mt-20">

                <div className="">
                    <img src={spotifyImage1}/>
                </div>

                <div className="">
                    <img src={spotifyImage2}/>
                </div>

                <div className="">
                    <img src={spotifyImage3}/>
                </div>

            </div>

        </div>
    )
}

export default StatsFromSpotify