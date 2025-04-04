import ServiceCardSwiper from "./ServiceCardSwiper";
import SectionSubTitle from "@components/SectionSubTitle/SectionSubTitle";

const OurServices = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/yn0Gx79c/service-bg.jpg')] bg-cover p-4  w-full my-10">
      <div className="w-[90%] mx-auto ">
        <div className="flex justify-center mb-8 items-center flex-col">
          <SectionSubTitle text={"our services"}></SectionSubTitle>
          <h1 className={`text-xl capitalize md:text-4xl font-bold pb-6`}>
          Our medical service
          </h1>
        </div>

        {/* service card */}
        <ServiceCardSwiper></ServiceCardSwiper>
      </div>
    </div>
  );
};

export default OurServices;
