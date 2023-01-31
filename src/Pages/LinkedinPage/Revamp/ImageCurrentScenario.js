import React from "react";
import currentScenarioImage from "../../../Assets/linkedin/linkedin_current_scenario.png"
import './ImageCurrentScenario.css'

const ImageCurrentScenario = () => {
    return(
        <div className="current-scenario-container flex justify-center">
            <img className="w-[90%]" src={currentScenarioImage}/>
        </div>
    )
}

export default ImageCurrentScenario
