import AboutService from "@components/AboutUs/AboutService";
import Image from "next/image";
import { FiPhoneCall, FiMail } from "react-icons/fi";


export default function EmergencyContact() {
  const image = "https://i.ibb.co.com/tTR8FJPt/pic.png";
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="w-[90%] mx-auto px-4 flex flex-col lg:flex-row items-center md:justify-start md:items-start justify-between">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-4 ">
          <h4 className=" text-blue-500 font-semibold">
            <span className="border-l-2 border-blue-500 pl-4 font-bold text-xl ">
              Emergency HelpLine
            </span>
          </h4>
          <h2 className="text-3xl font-bold">Need Emergency Contact</h2>
          <p className="text-gray-600 text-sm">
            In times of medical emergencies, quick and reliable communication is
            essential. Our 24/7 emergency helpline ensures that you can reach us
            anytime for immediate assistance, whether for urgent care, hospital
            inquiries, or emergency support.
          </p>
          <div className="space-y-2 text-gray-700">
            <div>
              <AboutService service={"24/7 Contact Our Hospital."} />
              <AboutService service={"24 Hours Open Our Hospital."} />
              <AboutService service={"Emergency Contact Our Phone Number."} />
            </div>
          </div>
          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center w-full md:w-1/2">
              <FiPhoneCall className="text-blue-500 text-2xl mr-3" />
              <div>
                <p className="text-gray-600 text-sm">Phone Number</p>
                <p className="text-lg font-semibold text-gray-800">
                  +880 13 2525 065
                </p>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center w-full md:w-1/2">
              <FiMail className="text-blue-500 text-2xl mr-3" />
              <div>
                <p className="text-gray-600 text-sm">Quick Your Email</p>
                <p className="text-lg font-semibold text-gray-800">
                  help.info@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={image}
            alt="Emergency Contact"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
