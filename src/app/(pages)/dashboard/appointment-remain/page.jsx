"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { IoIosSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import RescheduleModal from "./RescheduleModal";

const AppointmentRemain = () => {
  const { data: session, status } = useSession();
  const [appointments, setAppointments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentId, setAppointmentId] = useState("");
  const handleReschedule = (id) => {
    setAppointmentId(id);
    setIsOpen(true);
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/appointments?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setAppointments(data);
        })
        .catch((err) => console.error("Error fetching appointments:", err));
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-48 bg-gray-200 rounded"></div>
          <p className="text-gray-500 text-lg">Loading your appointments...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-red-500 mb-2">
            Access Denied
          </h3>
          <p className="text-gray-600">
            You need to be logged in to view your appointments.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Your Appointments
          </h2>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search appointments..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <IoIosSearch className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {appointments.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
            <SlCalender className="mx-auto h-12 w-12 text-gray-400" />

            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No appointments scheduled
            </h3>
            <p className="mt-1 text-gray-500">
              You don&apos;t have any upcoming appointments yet.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
                    >
                      Patient
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden sm:table-cell"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider"
                    >
                      Date & Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden md:table-cell"
                    >
                      Contact
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider hidden lg:table-cell"
                    >
                      Message
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appt) => (
                    <tr key={appt._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 capitalize">
                          {appt.name || "N/A"}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-gray-900 capitalize">
                          {appt.department
                            ? appt.department.toLowerCase()
                            : "General"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {appt.date
                            ? new Date(appt.date).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            : "Not set"}
                        </div>
                        <div className="text-sm text-gray-500">
                          {appt.time || "Not specified"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-gray-900">
                          {appt.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {appt.phone || "No phone"}
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="text-sm text-gray-600 max-w-xs truncate">
                          {appt.message || "No message"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleReschedule(appt._id)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Reschedule
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <RescheduleModal
        isOpen={isOpen}
        appointmentId={appointmentId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default AppointmentRemain;
