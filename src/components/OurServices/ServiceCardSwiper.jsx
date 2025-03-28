"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import ServiceCard from "./ServiceCard";

const ServiceCardSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 }, 
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
            <ServiceCard
                image={"https://i.ibb.co.com/pjjYHD45/service-3.jpg"}
                title={"Holter Heart Surgery"}
                subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing eligitable to the word true"}></ServiceCard>
        </SwiperSlide>
        <SwiperSlide>
            <ServiceCard
            image={"https://i.ibb.co.com/Yg55f9V/service-1.jpg"}
            title={"Holter Heart Surgery"}
            subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing eligitable to the word true"}></ServiceCard>
        </SwiperSlide>
        <SwiperSlide>
            <ServiceCard
            image={"https://i.ibb.co.com/pjjYHD45/service-3.jpg"}
            title={"Holter Heart Surgery"}
            subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing eligitable to the word true"}></ServiceCard>
        </SwiperSlide>
        <SwiperSlide>
            <ServiceCard
            image={"https://i.ibb.co.com/Yg55f9V/service-1.jpg"}
            title={"Holter Heart Surgery"}
            subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing eligitable to the word true"}></ServiceCard>
        </SwiperSlide>
        <SwiperSlide>
            <ServiceCard
            image={"https://i.ibb.co.com/pjjYHD45/service-3.jpg"}
            title={"Holter Heart Surgery"}
            subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing eligitable to the word true"}></ServiceCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceCardSwiper;
