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
                title={"Telehealth and Online Consultations"}
                subTitle={" Experience the convenience of accessing healthcare from the comfort of your own home. HealthPoint offers secure and confidential online consultations with our doctors and specialists, allowing you to receive medical advice, follow-up care, and prescription refills remotely."}></ServiceCard>
        </SwiperSlide>
        <SwiperSlide>
            <ServiceCard
            image={"https://i.ibb.co.com/Yg55f9V/service-1.jpg"}
            title={"Preventive Health and Wellness Programs"}
            subTitle={"Take proactive steps towards a healthier future with our range of preventive health services. These include health risk assessments, nutritional guidance and customized wellness plans designed to empower you to maintain optimal health and prevent chronic diseases."}></ServiceCard>
        </SwiperSlide>
        <SwiperSlide>
            <ServiceCard
            image={"https://i.ibb.co.com/pjjYHD45/service-3.jpg"}
            title={"Specialized Medical Consultations"}
            subTitle={"Connect with a network of qualified specialists across various medical fields. From cardiology and dermatology to gynecology and orthopedics, HealthPoint facilitates consultations with experts to address your specific health concerns and provide tailored treatment plans."}></ServiceCard>
        </SwiperSlide>
        <SwiperSlide>
            <ServiceCard
            image={"https://i.ibb.co.com/Yg55f9V/service-1.jpg"}
            title={"General Practitioner Consultations"}
            subTitle={"Access comprehensive primary healthcare services with our experienced general practitioners. We offer routine check-ups, diagnosis and treatment of common illnesses, vaccinations and health screenings when needed. Your ongoing health and well-being are our priority."}></ServiceCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceCardSwiper;
