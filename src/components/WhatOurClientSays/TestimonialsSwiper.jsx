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
              name={"Eleanor V."}
              review={
                "As someone managing a long-term health condition, I need consistent, reliable care. HealthPoint provides exactly that. My doctor is incredibly knowledgeable and always takes the time to discuss my treatment plan thoroughly.I feel genuinely supported and trust them completely with my health."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials
              dp={"https://i.ibb.co.com/Yg55f9V/service-1.jpg"}
              name={"David L."}
              review={
                "I used to dread doctor's appointments, but the team at HealthPoint has completely changed my perspective. From the calm waiting area to the friendly reception and the doctor's reassuring manner, everything helped put me at ease. They explained everything patiently, and I felt truly heard and comfortable throughout my visit."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials
              dp={"https://i.ibb.co.com/pjjYHD45/service-3.jpg"}
              name={"Jessica P."}
              review={
                "From scheduling my appointment to the follow-up call, my entire experience with HealthPoint was seamless and positive. The facility is welcoming and clean, the staff are professional and genuinely friendly, and the medical care I received was top-notch. It's reassuring to know such quality healthcare is available right here."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonials
              dp={"https://i.ibb.co.com/pjjYHD45/service-1.jpg"}
              name={"Sarah K."}
              review={
                "Bringing my daughter to HealthPoint when she was unwell was the best decision. The nurses were so welcoming, and Dr. Chen was incredibly patient, taking the time to explain everything and make my daughter feel comfortable.  You can tell they genuinely care about their patients, young and old."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSwiper;
