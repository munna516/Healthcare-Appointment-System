import DoctorForm from "./DoctorForm";
import DoctorHero from "./DoctorHero";
import OurRulesAndPolicy from "./OurRulesAndPolicy";

export default function BecameDoctor() {
  return (
    <div className="mb-12 mt-20 md:mb-24">
      {/* Hero section */}
      <DoctorHero />
      <div className="flex gap-6 flex-col lg:flex-row justify-between max-w-7xl w-full mx-auto">
        <OurRulesAndPolicy />
        <DoctorForm />
      </div>
    </div>
  );
}
