"use client";

import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

const DrPageAppointment = ({ doctorId }) => {
  const [formData, setFormData] = useState({
    doctorId: doctorId,
    name: "",
    email: "",
    issue: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <div className="py-8 px-6 rounded-lg bg-[#00a6fb]">
      <h2 className="text-2xl font-medium text-center mb-6 text-white">
        Make An Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <div className="space-y-2 w-full">
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2 w-full">
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <div className="space-y-2 w-full">
            <input
              id="date"
              name="date"
              placeholder="Select Date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2 w-full">
            <select
              id="time"
              name="time"
              placeholder="Select Time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
              required
            >
              <option value="">Select a time slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="space-y-2 w-full">
          <input
            id="description"
            name="description"
            placeholder="Description of Health Issue"
            type="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="group w-full mt-6 px-4 py-3 flex items-center justify-center bg-white text-[#00a6fb] font-medium rounded-full hover:text-white hover:bg-[#2ac28e]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Book Appointment
          <IoIosArrowDropright
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-0 group-hover:translate-x-10"
            size={20}
          />
        </button>
      </form>
    </div>
  );
};

export default DrPageAppointment;
