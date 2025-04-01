"use client";
import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { useState } from "react";
import DoctorInfo from "./DoctorInfo";

const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    email: "johndoe@email.com",
    specialty: "Cardiologist",
    experience: "10 years",
    status: "Pending",
  },
  {
    id: 2,
    name: "Dr. Sarah Smith",
    email: "sarah@email.com",
    specialty: "Dermatologist",
    experience: "7 years",
    status: "Pending",
  },
];

export default function DoctorRequests() {
  const [doctorList, setDoctorList] = useState(doctors);

  const handleApproval = (id, status) => {
    setDoctorList((prev) =>
      prev.map((doc) => (doc.id === id ? { ...doc, status } : doc))
    );
  };

  return (
    <div className="max-w-6xl w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Doctor Requests</h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Specialty</th>
              <th className="p-3">Experience</th>
              <th className="p-3">Doctor Details</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctorList.map((doctor) => (
              <tr key={doctor.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{doctor.name}</td>
                <td className="p-3">{doctor.email}</td>
                <td className="p-3">{doctor.specialty}</td>
                <td className="p-3">{doctor.experience}</td>
                <td className="p-3 text-[#00a6fb] cursor-pointer">
                    <Dialog>
                        <DialogTrigger className="hover:underline">Read More</DialogTrigger>
                        <DoctorInfo doctor={doctor}/>
                    </Dialog>
                </td>
                <td
                  className={`p-3 font-semibold ${
                    doctor.status === "Approved"
                      ? "text-green-600"
                      : doctor.status === "Rejected"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {doctor.status}
                </td>
                <td className="p-3 flex space-x-2">
                  {doctor.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApproval(doctor.id, "Approved")}
                        className="px-4 py-2 bg-[#00a6fb] text-white rounded hover:bg-[#006699]"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleApproval(doctor.id, "Rejected")}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {
                    doctor.status === "Approved" 
                    ?  
                    <Button disabled >Approved</Button>
                    : doctor.status === "Rejected" &&
                    <Button disabled >Rejected</Button>
                  }
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
