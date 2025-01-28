import React from "react";
import { LuSearch } from "react-icons/lu";

const SearchCategory = () => {
 return (
  <div className="relative text-end">
   <input
    className=" placeholder:text-gray-500 border-blue-400 border rounded-full p-2 w-[350px] focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 "
    placeholder="Search for category..."
    type="text"
    name="search"
   />
   <LuSearch className="absolute right-2 text-blue-500 top-2" size={26} />
  </div>
 );
};

export default SearchCategory;
