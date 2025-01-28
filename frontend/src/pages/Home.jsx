import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SearchCategory from "../components/SearchCategory";
import HomePost from "../components/HomePost";

const Home = () => {
 return (
  <div>
   <HeroCarousel />
   <HomePost />
   <SearchCategory />
  </div>
 );
};

export default Home;
