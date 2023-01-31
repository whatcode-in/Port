import React from "react";
import Excelsior from "./Excelsior/Excelsior";
import IEEE from "./IEEE/IEEE";
import Linkedin from "./Linkedin/Linkedin";
import Profile from "./Profile/Profile";
import NewExcelsior from "./Excelsior/NewExcelsior";

const Projects = () => {


  return (
    <div style={{overflow:"hidden"}}>
      <Profile></Profile>
      <Linkedin></Linkedin>
      <Excelsior></Excelsior>
      {/* <NewExcelsior></NewExcelsior> */}
      <IEEE></IEEE>
    </div>
  );
};

export default Projects;
