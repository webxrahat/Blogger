import React from "react";
import { Link, NavLink } from "react-router";
import { TbBaselineDensitySmall } from "react-icons/tb";

function Navbar() {
 return (
  <div className="border-t-2 border-b-2 mt-10">
   <div className="flex items-center justify-between">
    <div className="flex items-center">
     <TbBaselineDensitySmall size={28} />
     <NavLink to={"/"}>
      <img src="/Blogger-logo.png" alt="title" />
     </NavLink>
    </div>
    <div className="flex items-center">
     <ul className="flex items-center mr-5">
      <NavLink className="mr-5">Add Post</NavLink>
      <NavLink>Recent Post</NavLink>
     </ul>
     <button className="bg-blue-700 px-8 py-3 text-white">Login</button>
    </div>
   </div>
  </div>
 );
}

export default Navbar;
