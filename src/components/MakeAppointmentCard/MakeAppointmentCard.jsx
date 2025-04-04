"use client";
import { Button } from "@components/ui/button";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";

const MakeAppointmentCard = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const router = useRouter();

  const doctors = [
    "Cardiology",
    "Ophthalmology",
    "Pediatric",
    "Radiology",
    "Urology",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleNavigate = () => {

    router.push('/appointment');
  };

  return (
    <div className="w-[90%] mx-auto mt-16">
      <div className="bg-[#00a6fb] rounded-lg px-6 py-6 shadow-lg">
        <div className="text-wrap  flex">
          <h1 className="font-bold mb-10 text-white  lg:text-lg capitalize pl-4  mx-auto border-l-2 text-center">
            Book Your Appointment Now
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
        >
          <input
            type="text"
            placeholder="Name.."
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="flex-grow px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="date"
            placeholder="mm/dd/yyyy"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 relative flex-grow"
          />

          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
            className="flex-grow px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Choose Doctors
            </option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>

          <Button
            type="submit"
            variant="default"
            onClick={handleNavigate} 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md"
          >
            Make Appointment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MakeAppointmentCard;
