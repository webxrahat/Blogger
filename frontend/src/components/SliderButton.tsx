import React from "react";

function SampleNextArrow(props) {
 const { className, style, onClick } = props;
 return (
  <div
   className={className}
   style={{ ...style, display: "block", background: "black", color: "white" }}
   onClick={onClick}
  />
 );
}

function SamplePrevArrow(props) {
 const { className, style, onClick } = props;
 return (
  <div
   className={className}
   style={{ ...style, display: "block", background: "green" }}
   onClick={onClick}
  />
 );
}

export { SampleNextArrow, SamplePrevArrow };
