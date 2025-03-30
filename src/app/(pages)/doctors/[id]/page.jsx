"use client";
import Image from "next/image";
import { PiHospital } from "react-icons/pi";
import { CiMap } from "react-icons/ci";
import ReviewSection from "./ReviewSection";
import OpeningHours from "./OpeningHours";
import DrPageAppointment from "./DrPageAppointment";

const DoctorPage = ({ params }) => {
  const doctorDetails = {
    uid: "cardio_jsmith",
    photo_url: "https://i.ibb.co.com/cFx5cYx/download.jpg",
    bio: "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in treating heart-related conditions.",
    services: ["Heart Check-up", "ECG", "Cardiac Surgery"],
    name: "Dr. John Smith",
    review: 4.5,
    title: "MD",
    degrees: ["MBBS", "MD", "FACS"],
    specialty: "Cardiology",
    experience: 15,
    fees: {
      online: 70,
      offline: 100,
    },
    contact: {
      phone: "+1-123-456-7890",
      email: "dr.johnsmith@example.com",
    },
    location: {
      clinic_name: "Heart Care Center",
      address: "123 Main St, New York, NY 10001",
    },
    status: "verified",
  };

  return (
    <>
      <div className="max-w-7xl mt-20 w-full mx-auto px-4 py-10 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          {/* Picture & Details */}
          <div className="flex flex-col md:flex-row gap-6 p-4">
            <div className="w-full md:max-w-[20rem] rounded-lg overflow-hidden border">
              <Image
                src={doctorDetails?.photo_url}
                alt="Doctor"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                style={{
                  aspectRatio: "1/1",
                }}
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#00a6fb] mb-2">
                {doctorDetails?.name}
              </h1>
              <p className="text-xl text-gray-700 mb-4 flex items-center">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = doctorDetails?.review || 0;
                  return (
                    <span key={star} className="relative">
                      <span className="text-gray-300">★</span>
                      {rating >= star ? (
                        <span className="text-yellow-400 absolute inset-0">
                          ★
                        </span>
                      ) : rating >= star - 0.5 ? (
                        <span className="text-yellow-400 absolute inset-0 w-1/2 overflow-hidden">
                          ★
                        </span>
                      ) : null}
                    </span>
                  );
                })}
                <span className="ml-2 text-sm text-gray-600">
                  ({doctorDetails?.review})
                </span>
              </p>

              <p className="text-gray-700 mb-2">{doctorDetails?.title}</p>
              <p className="text-gray-700 mb-2">{doctorDetails?.specialty}</p>
              <p className="text-gray-700 mb-2">
                {doctorDetails?.experience} years of experience
              </p>
              <p className="text-gray-700 mb-2">
                Fees: ${doctorDetails?.fees?.online} - $
                {doctorDetails?.fees?.offline}
              </p>

              <p className="text-gray-700 mb-2">
                Contact: {doctorDetails?.contact?.phone}
              </p>
              <p className="text-gray-700 mb-2">
                Email: {doctorDetails?.contact?.email}
              </p>
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-md mt-6">
            <h2 className="text-xl font-medium mb-4">
              Biography of {doctorDetails?.name}
            </h2>
            <hr />
            <h2 className="text-lg font-medium mt-4">About</h2>
            <p className="text-gray-700 mt-2">{doctorDetails?.bio}</p>
            <h2 className="text-lg font-medium mt-4">Education and Degrees</h2>
            <ul className="list-disc list-inside mt-2 mb-4">
              {doctorDetails?.degrees?.map((degree, index) => (
                <li key={index} className="text-gray-700">
                  {degree}
                </li>
              ))}
            </ul>
            <hr />
            <div>
              <h2 className="text-lg font-medium mt-4">Services</h2>
              <ul className="list-disc list-inside mt-2 mb-4">
                {doctorDetails?.services?.map((service, index) => (
                  <li key={index} className="text-gray-700">
                    {service}
                  </li>
                ))}
              </ul>
              <h2 className="text-lg font-medium mt-4">Location</h2>
              <p className="text-gray-700 mt-2 flex items-center">
                <PiHospital className="text-[#00a6fb] mr-2" size={20} />
                <span>{doctorDetails?.location?.clinic_name}</span>
              </p>
              <p className="text-gray-700 mt-2 flex items-center">
                <CiMap className="text-[#00a6fb] mr-2" size={20} />
                <span>{doctorDetails?.location?.address}</span>
              </p>
            </div>
          </div>
          {/* Review Section */}
          <ReviewSection doctorId={doctorDetails?.uid} />
        </div>
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Appointment Form */}
          <DrPageAppointment doctorId={params.id} />

          {/* Static Opening Hours */}
          <OpeningHours />
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
