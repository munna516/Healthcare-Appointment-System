// import SectionTitle from "@components/SectionTitle/SectionTitle";

import ServiceCardSwiper from "./ServiceCardSwiper";
import SectionSubTitle from "@components/SectionSubTitle/SectionSubTitle";

const OurServices = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/yn0Gx79c/service-bg.jpg')] bg-cover p-4 md:py-12 lg:py-24 h-[750px] w-full">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex justify-center mb-8 items-center flex-col">
          <SectionSubTitle text={"our services"}></SectionSubTitle>
          {/* <SectionTitle text={"our medical service"}></SectionTitle> */}
        </div>

        {/* service card */}
        <ServiceCardSwiper></ServiceCardSwiper>
      </div>
    </div>
  );
};

export default OurServices;
