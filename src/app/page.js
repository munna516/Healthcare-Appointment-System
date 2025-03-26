import AboutUs from "@/components/AboutUs/AboutUs";
import CountPart from "@/components/Counting/CountPart";
import OurServices from "@/components/OurServices/OurServices";

export default function Home() {
  return (
    <main className="mt-14 space-y-20 mb-14">
      {/* Hero section should implement here */}

      {/* About Section Implement Here */}
      <AboutUs />
      {/* Counting part */}
      <CountPart />
      {/* OurServices part */}
      <OurServices/>
    </main>
  );
}
