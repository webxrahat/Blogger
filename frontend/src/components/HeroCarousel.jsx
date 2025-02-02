import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
 { photo: "/tour.jpg", category_name: "Adventure" },
 { photo: "/tour.jpg", category_name: "Cultural" },
 { photo: "/tour.jpg", category_name: "Fanily Travel" },
 { photo: "/tour.jpg", category_name: "Heritage" },
 { photo: "/tour.jpg", category_name: "Historical" },
 { photo: "/tour.jpg", category_name: "Inspiration" },
 { photo: "/tour.jpg", category_name: "Wildlife" },
];

const HeroCarousel = () => {
 return (
  <div>
   <Swiper
    slidesPerView={1}
    spaceBetween={20}
    loop={true}
    autoplay={{
     delay: 2000,
     disableOnInteraction: false,
    }}
    pagination={{
     clickable: true,
    }}
    breakpoints={{
     1024: {
      slidesPerView: 6,
      spaceBetween: 20,
     },
     768: {
      slidesPerView: 2,
      spaceBetween: 20,
     },
     576: {
      slidesPerView: 3,
      spaceBetween: 40,
     },
    }}
    modules={[Autoplay]}
    className="mySwiper"
   >
    {images.map((image, indx) => (
     <SwiperSlide key={indx} className="mt-10">
      <div>
       <img src={image.photo} alt="name" />
      </div>
      <p className="text-center mt-2">{image.category_name}</p>
     </SwiperSlide>
    ))}
   </Swiper>
  </div>
 );
};

export default HeroCarousel;
