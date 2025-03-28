// import SectionTitle from "@components/SectionTitle/SectionTitle";
import TestimonialsSwiper from "./TestimonialsSwiper";
import SectionSubTitle from "@components/SectionSubTitle/SectionSubTitle";

const WhatOurClientSays = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/yn0Gx79c/service-bg.jpg')] bg-cover p-4 pt-12 pb-14 w-full">
      <div className=" w-full mx-auto">
        <div className="flex justify-center mb-6 items-center flex-col">
          <SectionSubTitle text={"Testimonials"}></SectionSubTitle>
          {/* <SectionTitle text={"What Our Client Says"}></SectionTitle> */}
        </div>

        {/* Testimonials card */}
        <TestimonialsSwiper></TestimonialsSwiper>
      </div>
    </div>
  );
};

export default WhatOurClientSays;
