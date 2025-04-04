"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import toast from "react-hot-toast";

const TimeSelect = ({
  name,
  required = true,
  className = "",
  style = {},
  value = "",
  onChange = () => {},
}) => {
  const timeSlots = [];

  // Generate time slots from 12:00 PM to 8:00 PM in 30-minute intervals
  for (let hour = 12; hour <= 20; hour++) {
    timeSlots.push({
      value: `${hour.toString().padStart(2, "0")}:00`,
      label: `${hour === 12 ? 12 : hour - 12}:00 ${hour < 12 ? "AM" : "PM"}`,
    });

    if (hour < 20) {
      timeSlots.push({
        value: `${hour.toString().padStart(2, "0")}:30`,
        label: `${hour === 12 ? 12 : hour - 12}:30 ${hour < 12 ? "AM" : "PM"}`,
      });
    }
  }

  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent ${className}`}
      style={style}
    >
      <option value="" disabled>
        Select a time
      </option>
      {timeSlots.map((slot) => (
        <option key={slot.value} value={slot.value}>
          {slot.label}
        </option>
      ))}
    </select>
  );
};

const DrPageAppointment = ({ department, doctor }) => {
  const { data: session } = useSession();
  const [selectedTime, setSelectedTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    setIsLoading(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: session?.user?.name,
          email: session?.user?.email,
          phone: form.phone.value,
          department: department,
          doctor: doctor,
          date: form.date.value,
          time: form.time.value,
          message: form.message.value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to book appointment");
      }

      toast.success("Appointment booked successfully");
      form.reset();
      setSelectedTime("");
    } catch (error) {
      toast.error(
        error.message || "An error occurred. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-8 px-6 rounded-lg bg-[#00a6fb]">
      <h2 className="text-2xl font-medium text-center mb-6 text-white">
        Make An Appointment
      </h2>

      <form onSubmit={handleBooking} className="space-y-4">
        <div className="space-y-2 w-full">
          <input
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            value={session?.user?.name || ""}
            readOnly
            className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent bg-gray-100 cursor-not-allowed"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
          <div className="space-y-2 w-full">
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={session?.user?.email || ""}
              readOnly
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent bg-gray-100 cursor-not-allowed"
              required
            />
          </div>

          <div className="space-y-2 w-full">
            <input
              id="phone"
              name="phone"
              placeholder="Phone"
              type="tel"
              title="Please enter a valid phone number (10-15 digits)"
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
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2 w-full">
            <TimeSelect
              name="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-2 w-full">
          <textarea
            id="message"
            name="message"
            placeholder="Description of Health Issue"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent min-h-[100px]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group w-full mt-6 px-4 py-3 flex items-center justify-center bg-white text-[#00a6fb] font-medium rounded-full hover:text-white hover:bg-[#2ac28e]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
        >
          {isLoading ? "Booking..." : "Book Appointment"}
          <IoIosArrowDropright
            className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
            size={20}
          />
        </button>
      </form>
    </div>
  );
};

export default DrPageAppointment;
