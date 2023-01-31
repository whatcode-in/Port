import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
import dropDownIcon from "../../Assets/dropdown_icon.png"

const Navbar = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };


  window.addEventListener("scroll", changeColor);
  return (

    <div
      className={
        color
          ? "navbar glass-effect fixed z-50 top-0 left-0 duration-1000 lg:px-12"
          : "navbar fixed z-10 duration-1000 top-0 left-0"
      }
    >
      <div className="flex-1">
        <NavLink to={"/"} className="btn btn-ghost normal-case text-[32px] ml-[-16px] mr-2 font-medium">
          O-K
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal  font-bold">

          <li><NavLink to={"/projects"}>Projects   <div className="dropdown-icon-container"><img src={dropDownIcon} /></div></NavLink>
            <ul className="bg-white text-black">
              <li><NavLink to={"/projects/linkedIn"}>Linkedin Redesign</NavLink></li>
              <li><NavLink to={"/projects/excelsior"}>Podcast</NavLink></li>
              <li><NavLink to={"/projects/IEEE-Publication"}>IEEE Publication</NavLink></li>
            </ul>

          </li>


          {/* {showProjectNavigation && 
          <>
            <li><NavLink to={"/projects/IEEE-Publication"} >IEEE Publication</NavLink></li>
            <li><NavLink to={"/projects/excelsior"} >Excelsior</NavLink></li>
             <li><NavLink to={"/projects/linkedIn"} >Linkedin</NavLink></li>
          </>
        }
      */}








          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>





    </div>
  );
};

export default Navbar;
