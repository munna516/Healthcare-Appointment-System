"use client";
import Image from "next/image";
import { PiHospital } from "react-icons/pi";
import { CiMap } from "react-icons/ci";
import { useEffect, useState } from "react";
import ReviewSection from "./ReviewSection";
import OpeningHours from "./OpeningHours";
import DrPageAppointment from "./DrPageAppointment";

const DoctorPage = ({ params }) => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch(`/api/became-doctor/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch doctor data");
        }
        const data = await response.json();
        setDoctorDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="max-w-7xl w-full mx-auto px-4 pt-24 py-10 flex justify-center items-center h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a6fb]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl w-full mx-auto px-4 pt-24 py-10">
        <div className="text-center py-20">
          <p className="text-red-500 text-xl">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!doctorDetails) {
    return (
      <div className="max-w-7xl w-full mx-auto px-4 pt-24 py-10">
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">Doctor not found</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl w-full mx-auto px-4 pt-24 py-10 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          {/* Picture & Details */}
          <div className="flex flex-col md:flex-row gap-6 p-4">
            <div className="w-full md:max-w-[20rem] rounded-lg overflow-hidden border">
              <Image
                src={doctorDetails?.imageUrl}
                alt={doctorDetails?.fullName}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                style={{ aspectRatio: "1/1" }}
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#00a6fb] mb-2">
                {doctorDetails?.fullName}
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
                  ({doctorDetails?.review || "No reviews yet"})
                </span>
              </p>

              <p className="text-gray-700 mb-2">
                {doctorDetails?.specialization}
              </p>
              <p className="text-gray-700 mb-2">
                {doctorDetails?.experience} years of experience
              </p>
              <p className="text-gray-700 mb-2">Fees: ${doctorDetails?.fee}</p>

              <p className="text-gray-700 mb-2">
                Contact: {doctorDetails?.phone}
              </p>
              <p className="text-gray-700 mb-2">
                Email: {doctorDetails?.email}
              </p>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-white shadow-md mt-6">
            <h2 className="text-xl font-medium mb-4">
              Biography of {doctorDetails?.fullName}
            </h2>
            <hr />
            <h2 className="text-lg font-medium mt-4">About</h2>
            <p className="text-gray-700 mt-2">{doctorDetails?.bio}</p>

            <h2 className="text-lg font-medium mt-4">Location</h2>
            <p className="text-gray-700 mt-2 flex items-center">
              <PiHospital className="text-[#00a6fb] mr-2" size={20} />
              <span>{doctorDetails?.clinic_name || "Private Practice"}</span>
            </p>
            <p className="text-gray-700 mt-2 flex items-center">
              <CiMap className="text-[#00a6fb] mr-2" size={20} />
              <span>{doctorDetails?.address || "Address not specified"}</span>
            </p>
          </div>

          {/* Review Section */}
          {/* <ReviewSection doctorId={params.id} /> */}
        </div>

        <div className="mt-0 lg:mt-4 w-full lg:w-1/3 space-y-6">
          {/* Appointment Form */}
          <DrPageAppointment
            department={doctorDetails?.specialization}
            doctor={doctorDetails?.fullName}
          />

          {/* Static Opening Hours */}
          {/* <OpeningHours /> */}
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
