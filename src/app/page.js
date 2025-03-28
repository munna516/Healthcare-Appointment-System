import AboutUs from "@/components/AboutUs/AboutUs";
import FaqSection from "@/components/FaqSection/FaqSection";
import Hero from "@/components/Hero/Hero";
import MakeAppointmentCard from "@/components/MakeAppointmentCard/MakeAppointmentCard";
import OurServices from "@/components/OurServices/OurServices";
import PostArtilces from "@/components/Post&Articles/PostArtilces";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";
import { TopDoctors } from "@/components/TopDoctors/TopDoctors";

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
      {/* Top Doctor part - change position as required */}
      <TopDoctors/>
      {/* Working Process part */}
      <WorkingProcess />
      {/* FAQ section */}
      <FaqSection></FaqSection>
      {/* Latest post and articles section */}
      <PostArtilces></PostArtilces>
    </div>
  );
}
