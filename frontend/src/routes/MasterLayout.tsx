import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";

const MasterLayout = () => {
 return (
  <Routes>
   <Route path="/" element={<Home />} />
  </Routes>
 );
};

export default MasterLayout;
