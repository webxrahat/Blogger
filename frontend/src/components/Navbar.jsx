import React from "react";
import { Link } from "react-router";

function Navbar() {
 return (
  <div>
   <div className="flex items-center justify-between px-6 md:px-[200px] py-4 bg-black text-white">
    <h1 className="text-lg md:text-xl font-extrabold">
     <Link to="/">Blogosphere</Link>
    </h1>
    {path === "/" && (
     <div className="flex justify-center items-center space-x-0">
      <input
       type="text"
       className="outline-none px-3 text-black bg-white rounded-s-xl"
       placeholder="Search a post"
      />
     </div>
    )}
   </div>
  </div>
 );
}

export default Navbar;
