import SectionSubTitle from "@components/SectionSubTitle/SectionSubTitle";
import AboutVisuals from "./AboutVisuals";
import AboutService from "./AboutService";

const AboutUs = () => {
  return (
    <div className="w-[90%] mx-auto my-16">
      <div className="flex flex-col lg:flex-row justify-between gap-8 ">
        <div className="md:w-1/2 md:mx-auto lg:mx-0">
          <AboutVisuals></AboutVisuals>
        </div>
        <div className="lg:w-1/2 md:text-center lg:text-left lg:mx-0 pt-0 px-2 md:px-0 lg:pt-0 md:pt-32">
          <SectionSubTitle text={"about us"} />
          <h1 className={`text-xl capitalize md:text-4xl font-bold pb-6`}>
            Caring for Your Health, Every Step of the Way.
          </h1>
          <p className="lg:text-lg text-[#000000b4] pb-6">
            Our team is dedicated to providing personalized and comprehensive
            healthcare services to meet the needs of every patient. With a
            strong focus on compassionate care, we connect patients with
            qualified doctors, allowing them to access prescriptions and
            schedule appointments with ease. We believe in making healthcare
            accessible.
          </p>
          <div className="flex gap-6 md:justify-center lg:justify-start mb-8 flex-col md:flex-row">
            <div>
              <AboutService service={"Ambulance Services"} />
              <AboutService service={"Pharmacy on Clinic"} />
              <AboutService service={"24/7 Medical Emergency"} />
            </div>
            <div>
              <AboutService service={"Oxygen on Wheel"} />
              <AboutService service={"On duty Doctors"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
