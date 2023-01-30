import React from "react";
import networkingImage from "../../Assets/about/about_me_networking.png"


const Networking = () => {
    const networkingImageContainer = {
        borderRadius: "30px",
        background: "#F2F2F2"
    }

    const image = {
        width: "100%", 
    }

    return(
        <div className="mt-24 pb-20 w-[90%] mx-auto "  style={networkingImageContainer}>
            <img src={networkingImage} style={image}/>
        </div>
    )
}

export default Networking