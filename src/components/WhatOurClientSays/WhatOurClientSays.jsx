import TestimonialsSwiper from "./TestimonialsSwiper";
import SectionSubTitle from "@components/SectionSubTitle/SectionSubTitle";

const WhatOurClientSays = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/yn0Gx79c/service-bg.jpg')] bg-cover  pt-12 pb-14 w-full ">
      <div className=" w-[90%] mx-auto ">
        <div className="flex justify-center mb-6 items-center flex-col">
          <SectionSubTitle text={"Testimonials"}></SectionSubTitle>
          <h1 className={`text-xl capitalize md:text-4xl font-bold pb-6`}>
          What Our Client Says
          </h1>
        </div>

        {/* Testimonials card */}
        <TestimonialsSwiper></TestimonialsSwiper>
      </div>
    </div>
  );
};

export default WhatOurClientSays;
