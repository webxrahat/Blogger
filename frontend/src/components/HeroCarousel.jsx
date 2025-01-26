import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./SliderButton";

const HeroCarousel = () => {
 var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
 };
 return (
  <div className="slider-container">
   <Slider {...settings}>
    <div>
     <h3 className="h-32 w-40 bg-gray-300">1</h3>
    </div>
    <div>
     <h3>2</h3>
    </div>
    <div>
     <h3>3</h3>
    </div>
    <div>
     <h3>4</h3>
    </div>
    <div>
     <h3>5</h3>
    </div>
    <div>
     <h3>6</h3>
    </div>
   </Slider>
  </div>
 );
};

export default HeroCarousel;
