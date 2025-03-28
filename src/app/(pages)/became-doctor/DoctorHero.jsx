import Image from "next/image";

const DoctorHero = () => {
    return (
    <div className="bg-blue-200 pt-2 md:pt-6 px-2 mb-12 md:mb-24">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <Image
            src={"https://i.ibb.co.com/d4KxJwWQ/bannernew.png"}
            width={600}
            height={400}
            alt="doctors image"
            className="flex-1 md:w-[400px] lg:w-full"/>
            <div className="md:flex-1">
                <h1 className="text-2xl md:text-3xl px-2 md:px-0 pb-4 font-bold lg:text-5xl text-[#000000bd]">Become a Doctor...<span className="text-[#00a6fb] font-bold">!</span></h1>
                <p className="text-[#000000bd] xl:text-lg lg:w-[90%] p-2 md:p-0">
                At HEALTH<span className="text-[#00a6fb] font-bold">POINT</span>, we are committed to protecting your privacy and personal information This privacy policy explains Howe collect, use, and share your information when you use our services. By using our services, you agree to the terms of this privacy and share policy.
                </p>
            </div>
        </div>
    </div>
    );
};

export default DoctorHero;