import AboutUs from "@/components/AboutUs/AboutUs";
import EmergencyContact from "@/components/EmergencyContact/EmergencyContact";
import FaqSection from "@/components/FaqSection/FaqSection";
import Hero from "@/components/Hero/Hero";
import MakeAppointmentCard from "@/components/MakeAppointmentCard/MakeAppointmentCard";
import OurServices from "@/components/OurServices/OurServices";
import PostArticle from "@/components/Post&Articles/PostArticles";
import WhatOurClientSays from "@/components/WhatOurClientSays/WhatOurClientSays";
import WorkingProcess from "@/components/WorkingProcess/WorkingProcess";
import { TopDoctors } from "@/components/TopDoctors/TopDoctors";

export default function Home() {
  return (
    <div className="space-y-20 mb-14">
      <Hero />
      <AboutUs />
      <MakeAppointmentCard />
      <OurServices />
      <TopDoctors />
      <WorkingProcess />
      <WhatOurClientSays />
      <PostArticle></PostArticle>
      <EmergencyContact />
      <FaqSection />
    </div>
  );
}
