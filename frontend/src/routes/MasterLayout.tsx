import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";

const MasterLayout = () => {
 return (
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/post/:id" element={<PostDetails />} />
  </Routes>
 );
};

export default MasterLayout;
