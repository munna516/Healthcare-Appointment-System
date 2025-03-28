import Image from "next/image";
//

const HeroVisuals = () => {
  return (
    <div className="relative flex-1">
      <div className="bg-[#dcf2f4] w-[250px] h-[250px] rounded-lg md:w-full p-12 md:h-[500px]">
        <div className="bg-[#2ac28e] top-[10%] left-[10%] rounded-lg w-[200px] h-[200px] absolute md:w-full md:h-[400px]">
          <Image
            src="https://i.ibb.co.com/CKf3rMP4/hero-removebg-preview.png"
            alt="Doctor"
            width={400}
            height={400}
            className="absolute w-[250px] h-[250px] md:w-full bottom-0 z-10 md:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVisuals;
