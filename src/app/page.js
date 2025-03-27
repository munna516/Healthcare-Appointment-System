import AboutUs from "@/components/AboutUs/AboutUs";
import FaqSection from "@/components/FaqSection/FaqSection";
import Hero from "@/components/Hero/Hero";
import MakeAppointmentCard from "@/components/MakeAppointmentCard/MakeAppointmentCard";
import OurServices from "@/components/OurServices/OurServices";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";

export default function Home() {
  return (
    <div className="space-y-20 mb-14">
      {/* Hero section should implement here */}
      <Hero/>
      {/* About Section Implement Here */}
      <AboutUs />
      {/* make appointment card section   */}
      <MakeAppointmentCard></MakeAppointmentCard>
      {/* OurServices part */}
      <OurServices/>
      {/*  */}
      <WorkingProcess />
      {/* FAQ section */}
      <FaqSection></FaqSection>
    </div>
  );
}
