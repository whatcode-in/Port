import React from "react";

const ReadThePaper = () => {

    const readThePaperStyle = {
        border: "1px solid white",
        width: "100%",
        paddingTop: "5rem",
        paddingBottom: "5rem",
    }
    

    return(
        <div className="text-4xl md:text-6xl lg:text-8xl text-center text-[#FFFFFF99] font-semibold"
        style={readThePaperStyle}
        >
            Read the<br></br>
            paper <a href="https://drive.google.com/drive/folders/1R2TrHbiVv6pWvbQVcjH3_2olpB0Dq6Yy" style={{textDecoration: "underline #FF4AF8"}}>
                <span className="bg-gradient-to-br from-[#FFFFFF] to-[#FF4AF8] text-transparent bg-clip-text">here.</span>
            </a>
        </div>
    )
}

export default ReadThePaper         