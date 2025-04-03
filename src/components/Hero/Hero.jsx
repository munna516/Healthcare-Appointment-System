import HeroTextInfo from "./HeroTextInfo";
import HeroVisuals from "./HeroVisuals";

const Hero = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/8QhjTFt/blue-medical-care-service-background-with-cross-cardio-graph-1017-44793.jpg')] bg-cover w-full lg:h-[700px] mb-24 p-4 md:p-12 xl:p-20">
            <div className="mt-20 max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-4">
                {/* hero info part */}
                <HeroTextInfo></HeroTextInfo>
                {/* hero visual part */}
                <HeroVisuals/>
            </div>
        </div>
    );
};

export default Hero;