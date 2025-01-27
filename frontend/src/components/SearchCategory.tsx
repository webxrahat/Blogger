import React from "react";

const SearchCategory = () => {
 return (
  <div>
   <input
    className="placeholder:text-gray-500 border p-2"
    placeholder="Search for anything..."
    type="text"
    name="search"
   />
  </div>
 );
};

export default SearchCategory;
