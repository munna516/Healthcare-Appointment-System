import AboutUs from "@components/AboutUs/AboutUs";
import EmergencyContact from "@components/EmergencyContact/EmergencyContact";
import FaqSection from "@components/FaqSection/FaqSection";
import Hero from "@components/Hero/Hero";
import MakeAppointmentCard from "@components/MakeAppointmentCard/MakeAppointmentCard";
import Newsletter from "@components/Newsletter/Newsletter";
import OurServices from "@components/OurServices/OurServices";
import PostArticle from "@components/Post&Articles/PostArticles";
import TopDoctors from "@components/TopDoctors/TopDoctors";
import { Button } from "@components/ui/button";
import WhatOurClientSays from "@components/WhatOurClientSays/WhatOurClientSays";
import WorkingProcess from "@components/WorkingProcess/WorkingProcess";
import Link from "next/link";

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

      <div className="fixed bottom-10 right-7 z-50">
        <Button
          className="shadow-lg italic hover:bg-primary/40 transition-colors duration-200 w-full text-wrap p-6"
          variant="outline"
        >
          <Link href="/ai-support">
        Need Help From <br /> Our AI Assistant? </Link>
        </Button>
    </div>
    </div>
  );
}
