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
<<<<<<< HEAD
      {/* make appointment card section   */}
      <MakeAppointmentCard></MakeAppointmentCard>
      {/* OurServices part */}
      <OurServices/>
      {/* Top Doctor part - change position as required */}
      <TopDoctors/>
      {/* Working Process part */}
=======
      <MakeAppointmentCard />
      <OurServices />
>>>>>>> 58a710ee4d59426592fd4d16cdb47885021d8104
      <WorkingProcess />
      <WhatOurClientSays />
      <PostArticle></PostArticle>
      <EmergencyContact />
      <FaqSection />
    </div>
  );
}
