import Image from "next/image";

const AboutVisuals = () => {
    return (
        <div className="relative w-full">
            <div className="relative">
            <Image 
                src={"https://i.ibb.co.com/gbL0KB9Y/about-img1.jpg"}
                width={330}
                height={400}
                alt="doctors surgery image"
                className="lg:w-[400px] rounded-xl">
            </Image>
            <Image
                src={"https://i.ibb.co.com/Hpzbmtvd/about-shape1.png"}
                width={80}
                height={80}
                alt="rounded shape image"
                className="hidden animate-spin-slow md:block absolute top-[3rem] md:top-8 md:right-0 lg:right-[6rem]">
            </Image>
            <div className="absolute h-[350px] md:top-[40%] top-0 left-[16%] 
                md:left-[45%] lg:w-[300px] lg:h-[350px]">
                <Image 
                    src={"https://i.ibb.co.com/8n49vy0B/about-img2.jpg"}
                    width={280}
                    height={460}
                    alt="doctor with happy patient"
                    className="rounded-xl z-50"
                    >
                </Image>
                <div className="absolute inset-0 z-10 right-0">
                    <iframe
                    width="280"
                    src="https://www.youtube.com/embed/Bv-J4XSRLx4?si=udOSx7g1i2FFPsWo" // Replace with your YouTube video
                    title="YouTube video"
                    allowFullScreen
                    className="h-full rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AboutVisuals;