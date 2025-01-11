import React from "react";
import { Link, NavLink } from "react-router";
import { TbBaselineDensitySmall } from "react-icons/tb";

function Navbar() {
 return (
  <div className="border">
   <div className="flex items-center justify-between">
    <div className="flex items-center">
     <TbBaselineDensitySmall size={28} />
     <NavLink>
      <img src="/Blogger-logo.png" alt="title" />
     </NavLink>
    </div>
    <div className="flex items-center">
     <ul className="flex items-center mr-5">
      <NavLink>Mega Menu 1</NavLink>
      <NavLink className="px-5">Mega Menu 2</NavLink>
      <NavLink>Mega Menu 3</NavLink>
     </ul>
     <button className="bg-blue-700 px-8 py-3 text-white">Login</button>
    </div>
   </div>
  </div>
 );
}

export default Navbar;
