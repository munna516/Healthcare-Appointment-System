import { FiMapPin, FiPhoneCall, FiMail, FiGlobe } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { PiGreaterThanBold } from "react-icons/pi";

export default function ContactUs() {
  const contactFormImage = "https://i.ibb.co.com/TnX2m24/contact-form.jpg";
  return (
    <section className="mt-20">
      {/* Header Section */}
     <div className="relative h-96 bg-[#1f3b53ef] bg-blend-multiply   bg-[url('https://html.narzotech.com/madifax/images/breadcrumb_bg.jpg')] bg-cover bg-center  text-white px-10 py-20">
     <div className="relative z-10 ">
       <h2 className="text-4xl font-bold">Contact Us</h2>
       <div className='flex mt-3 gap-2 items-center '>
         <Link href="/" className="font-semibold">Home</Link>
         <p><PiGreaterThanBold /></p>
         <p className="font-semibold">Contact</p>
       </div>
     </div>
     </div>
      <div className="max-w-7xl mx-auto px-4 mt-10">
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col ">
            {/* address */}
            <FiMapPin className="bg-pink-500 text-white p-3 rounded-full text-6xl " />
            <h3 className="font-bold mt-3 text-2xl">Office Address</h3>
            <p className="text-sm font-semibold text-gray-600">123 Street, New York, USA</p>
          </div>
          {/* phone */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col ">
            <FiPhoneCall className="bg-blue-500 text-white p-3 rounded-full text-6xl" />
            <h3 className="font-bold text-2xl mt-3">Phone Number</h3>
            <p className="text-sm text-gray-600 font-semibold">+1 800 123 4567</p>
          </div>
          {/* email */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col ">
            <FiMail className="bg-yellow-500 text-white p-3 rounded-full text-6xl" />
            <h3 className="font-bold text-2xl mt-3">Email Address</h3>
            <p className="text-sm text-gray-600 font-semibold">info@example.com</p>
          </div>
          {/* website */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col">
            <FiGlobe className="bg-green-400  text-white p-3 rounded-full text-6xl" />
            <h3 className="font-bold text-2xl mt-3">Website</h3>
            <p className="text-sm text-gray-600 font-semibold">www.example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex  flex-col md:flex-row items-center gap-6">
          <Image src={contactFormImage} alt="Contact" width={400} height={300} className="" />
          <form className="bg-white  md:p-6 rounded-lg w-full  space-y-4">
            {/* name email address */}
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="border p-3 rounded-3xl w-full" />
              <input type="email" placeholder="Email Address" className="border p-3 rounded-3xl w-full" />
            </div>
            {/* phoneNumber subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Phone Number" className="border p-3 rounded-3xl w-full" />
              <input type="email" placeholder="Subject" className="border p-3 rounded-3xl w-full" />
            </div>
            <input type="text" placeholder="Service" className="border p-3 rounded-3xl w-full" />
            <textarea placeholder="Message" className="border p-3 rounded-3xl w-full h-32"></textarea>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-3xl font-semibold hover:bg-green-500">Submit Now</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-10">
          <iframe
            className="w-full h-64 md:h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531685!3d-37.81627917975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c6e0e846b3f4f0!2sNew+York%2C+USA!5e0!3m2!1sen!2s!4v1606893633285!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* subscription */}
        <div className="flex flex-col items-center justify-center md:px-0 py-8 md:py-12 mt-16 w-full">
          <div className="w-full py-11 px-8   bg-blue-500 text-white rounded-lg md:rounded-full p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-lg  md:text-4xl font-bold text-center md:text-left">
              Subscribe for the Exclusive Updates!
            </h2>
            <div className="flex items-center bg-white rounded-full p-1 w-full md:w-2/5">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-2 text-gray-700 rounded-full focus:outline-none w-full"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
