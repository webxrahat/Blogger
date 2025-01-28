import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SearchCategory from "../components/SearchCategory";
import HomePost from "../components/HomePost";

const Home = () => {
 return (
  <div>
   <HeroCarousel />
   <div className="grid grid-cols-3 gap-6 mt-20 ">
    <div className="col-span-2">
     <HomePost />
    </div>
    <SearchCategory />
   </div>
  </div>
 );
};

export default Home;
