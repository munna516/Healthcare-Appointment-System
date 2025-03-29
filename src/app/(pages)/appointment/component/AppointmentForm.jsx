"use client";

import React from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function AppointmentForm() {
  const session = useSession();

  const inputStyle = {
    backgroundColor: "#E0F5FF",
    border: "1px solid #CBD5E0",
    borderRadius: "24px",
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;

    const appointmentData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      department: form.department.value,
      doctor: form.doctor.value,
      date: form.date.value,
      time: form.time.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });
      if (response.ok) {
        toast.success("Appointment booked successfully");
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting appointment:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="md:w-1/2">
        <div className=" ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Book Appointment
          </h2>
          <p className="text-gray-600 mb-8">
            Schedule your visit with our expert healthcare providers in just a
            few clicks. Our team is committed to providing personalized care at
            your convenience. Fill out the form below to secure your appointment
            time.
          </p>

          <div className="border-t border-gray-200 my-6"></div>
          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                readOnly
                value={session.data?.user?.name}
                style={inputStyle}
                className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  readOnly
                  value={session.data?.user?.email}
                  style={inputStyle}
                  className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  style={inputStyle}
                  className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Department
                </label>
                <select
                  id="department"
                  name="department"
                  required
                  style={inputStyle}
                  className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                >
                  <option selected disabled value="">
                    Select a department
                  </option>
                  <option  value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="doctor"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Doctor
                </label>
                <select
                  id="doctor"
                  name="doctor"
                  required
                  style={inputStyle}
                  className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                >
                  <option selected disabled value="">
                    Select a doctor
                  </option>
                  <option value="dr-smith">Dr. Smith</option>
                  <option value="dr-johnson">Dr. Johnson</option>
                  <option value="dr-williams">Dr. Williams</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  style={inputStyle}
                  className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="mm/dd/yyyy"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Select Time
                </label>
                <select
                  id="time"
                  required
                  name="time"
                  style={inputStyle}
                  className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                >
                  <option disabled value="">
                    Select a time
                  </option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                style={inputStyle}
                name="message"
                className="w-full px-4 py-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition "
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00a6fb] hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-[12px] transition duration-300"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
