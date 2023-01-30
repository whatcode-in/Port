import React from "react";
import volunteeringImage from "../../Assets/about/volunteering.png"
import './Volunteering.css'

const Volunteering = () => {
    const volunteeringImageContainer = {
        borderRadius: "30px",
        // background: "#F2F2F2"
    }

    const image = {
        width: "100%", 
        borderRadius: "30px"
    }

    return(
        <>
        <div className="volunteering-gradient text-transparent bg-clip-text mt-24 pd-20 lg:w-[56rem] md:w-[36rem] mx-auto text-4xl md:text-6xl lg:text-8xl text-center font-semibold">
        Volunteering <br></br>

            <div className="mx-auto mt-8 lg:text-[30px] md:text-[20px] text-[15px]  w-[80%]" style={{color: "rgba(0, 0, 0, 0.6)",fontWeight: "500"}} >
                I believe volunteering provides us the opportunity
                to <b className="text-black">give back</b> to the society and collectively work
                towards a better tomorrow.
            </div> 
        </div>

        {/* <div className="mx-auto lg:text-[30px] md:text-[20px] text-[15px] flex-col justify-center align-middle" style={{color: "rgba(0, 0, 0, 0.6)"}} >
            I believe volunteering provides us the opportunity <br></br>
            to <b className="text-black">give back</b> to the society and collectively work  <br></br>
            towards a better tomorrow.
        </div> */}


        <div className="mt-24 pb-20 w-[90%] mx-auto "  style={volunteeringImageContainer}>
            <img src={volunteeringImage} style={image}/>
        </div>
        </>
    )
}

export default Volunteering