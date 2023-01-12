import React from "react";
import Excelsior from "./Excelsior/Excelsior";
import IEEE from "./IEEE/IEEE";
import Linkedin from "./Linkedin/Linkedin";
import Profile from "./Profile/Profile";

const Projects = () => {
  return (
    <div>
      <Profile></Profile>
      <Linkedin></Linkedin>
      <Excelsior></Excelsior>
      <IEEE></IEEE>
    </div>
  );
};

export default Projects;
