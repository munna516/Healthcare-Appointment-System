
import Image from "next/image";
import { Button } from "../ui/button";
import CountPart from "@components/Counting/CountPart";
import Link from "next/link";

const HeroTextInfo = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center">
        <h4 className="text-xl font-bold pb-4 text-[#0282a9]">
          welcome to HealthPoint
        </h4>
        <Image
          src={
            "https://i.ibb.co.com/LhZL9qxp/blue-stethoscope-isolated-on-a-white-background-3d-image-2-BEKA6-F-removebg-preview.png"
          }
          width={70}
          height={70}
          alt="doctors equipment image"
        />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-6">
        Your Health, Your Schedule Book Appointments Hassle-Free!
      </h1>
      <p className="text-[#000000c3] text-lg pb-6">
        Finding the right doctor has never been easier. Book appointments with
        top healthcare professionals in just a few clicks. No long waits, no
        hassle—just quality care at your convenience.
      </p>
      <Link href={"/appointment"}>
      <Button  variant="primary" className="mb-3">
        Meet a Doctor
      </Button>
      </Link>
      
      <CountPart />
    </div>
  );
};

export default HeroTextInfo;
