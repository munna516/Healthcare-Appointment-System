import { FiPhoneCall, FiMail } from 'react-icons/fi';
import AboutService from '../AboutUs/AboutService';

export default function EmergencyContact() {

    const image = 'https://i.ibb.co.com/tTR8FJPt/pic.png';
    return (
        <section className="py-12 bg-blue-50">
          
            <div className="container space-y-10  mx-auto px-4 flex flex-col lg:flex-row lg:items-center gap-4 md:justify-start md:items-start justify-between">
                {/* Left Side */}
                <div className="lg:w-1/2 space-y-9 ">
                    <h4 className=" text-blue-500 font-semibold"><span className='border-l-2 border-blue-500 pl-4 font-bold text-xl rounded-sm'>Emergency HelpLine</span></h4>
                    <h2 className="text-3xl font-bold">Need Emergency Contact</h2>
                    <p className="text-gray-600 text-sm">
                    In times of medical emergencies, quick and reliable communication is essential. Our 24/7 emergency helpline ensures that you can reach us anytime for immediate assistance, whether for urgent care, hospital inquiries, or emergency support.
                    </p>
                    <div className="space-y-2 mb-5 text-gray-700">
                        <div>
                            <AboutService service={"24/7 Contact Our Hospital."} />
                            <AboutService service={"24 Hours Open Our Hospital."} />
                            <AboutService service={"Emergency Contact Our Phone Number."} />
                        </div>
                    </div>
                    {/* Contact Cards */}
                    <div className="flex flex-col md:flex-row gap-4 mt-14">
                        <div className="bg-white shadow-md rounded-lg p-4 flex items-center w-full md:w-1/2">
                            <FiPhoneCall className="text-blue-500 text-2xl mr-3" />
                            <div>
                                <p className="text-gray-600 text-sm">Phone Number</p>
                                <p className="text-lg font-semibold text-gray-800">+880 13 2525 065</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4 flex items-center w-full md:w-1/2">
                            <FiMail className="text-blue-500 text-2xl mr-3" />
                            <div>
                                <p className="text-gray-600 text-sm">Quick Your Email</p>
                                <p className="text-lg font-semibold text-gray-800">help.info@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="lg:w-1/2 flex justify-center mt-8 md:mt-0">
                
                    <img src={image} alt="Emergency Contact" width={500} height={400} className="object-contain w-full" />
                </div>
            </div>
        </section>
    );
}
