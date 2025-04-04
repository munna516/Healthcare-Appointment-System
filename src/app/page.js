import AboutUs from "@components/AboutUs/AboutUs";
import EmergencyContact from "@components/EmergencyContact/EmergencyContact";
import FaqSection from "@components/FaqSection/FaqSection";
import Hero from "@components/Hero/Hero";
import MakeAppointmentCard from "@components/MakeAppointmentCard/MakeAppointmentCard";
import Newsletter from "@components/Newsletter/Newsletter";
import OurServices from "@components/OurServices/OurServices";
import PostArticle from "@components/Post&Articles/PostArticles";
import TopDoctors from "@components/TopDoctors/TopDoctors";
import WhatOurClientSays from "@components/WhatOurClientSays/WhatOurClientSays";
import WorkingProcess from "@components/WorkingProcess/WorkingProcess";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <MakeAppointmentCard />
      <OurServices />
      <TopDoctors />
      <WorkingProcess />
      <WhatOurClientSays />
      <PostArticle />
      <EmergencyContact />
      <FaqSection />
      <Newsletter />
    </div>
  );
}
