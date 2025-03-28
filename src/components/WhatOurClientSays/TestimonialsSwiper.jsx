"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import Testimonials from "./Testimonials";

const TestimonialsSwiper = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" ">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Testimonials
              dp={"https://i.ibb.co.com/pjjYHD45/service-3.jpg"}
              name={"Vlack Marvin"}
              review={
                "Lorem ipsum dolor sit amet, consectetur on pisc ing elit, sed do eiusmod tempor incididis is magna aliqua established fact"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials
              dp={"https://i.ibb.co.com/Yg55f9V/service-1.jpg"}
              name={"Jenny Wilson"}
              review={
                "Lorem ipsum dolor sit amet, consectetur on pisc ing elit, sed do eiusmod tempor incididis is magna aliqua established fact"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials
              dp={"https://i.ibb.co.com/pjjYHD45/service-3.jpg"}
              name={"Vlack Marvin"}
              review={
                "Lorem ipsum dolor sit amet, consectetur on pisc ing elit, sed do eiusmod tempor incididis is magna aliqua established fact"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSwiper;
