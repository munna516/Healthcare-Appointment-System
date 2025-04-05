"use client";
import { Button } from "@components/ui/button";
import { Dialog, DialogTrigger } from "@components/ui/dialog";
import { useEffect, useState } from "react";
import DoctorInfo from "./DoctorInfo";
import toast from "react-hot-toast";

export default function DoctorRequests() {
  const [doctorList, setDoctorList] = useState([]);
  const fetchDoctors = async () => {
    try {
      const response = await fetch("/api/became-doctor");
      if (!response.ok) {
        throw new Error("Failed to fetch doctors");
      }
      const doctors = await response.json();
      setDoctorList(doctors.doctors);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateDoctorStatus = async (doctorId, newStatus) => {
    try {
      const response = await fetch("/api/update-doctor-status", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: doctorId, registered: newStatus }),
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update doctor");
      }
      toast.success("Doctor request Approved");
      fetchDoctors();
  
    } catch (error) {
      console.error("Error updating doctor status:", error.message);
    }
}

const handleDelete = async (id) => {
  const res = await fetch("/api/remove-doctor", {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  if (res.ok) {
    alert("Doctor deleted successfully!");
    setDoctorList(doctorList.filter((doctor) => doctor._id !== id)); // Update UI
  } else {
    alert(`Error: ${data.error}`);
  }
};

  useEffect(() => {
    fetchDoctors();
  }, []);

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
              <tr key={doctor._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{doctor.fullName}</td>
                <td className="p-3">{doctor.email}</td>
                <td className="p-3">{doctor.specialization}</td>
                <td className="p-3">{doctor.experience}</td>
                <td className="p-3 text-[#00a6fb] cursor-pointer">
                    <Dialog>
                        <DialogTrigger className="hover:underline">Read More</DialogTrigger>
                        <DoctorInfo doctor={doctor}/>
                    </Dialog>
                </td>
                <td className={`${doctor?.registered === true ? "text-green-500": "text-red-500"} font-semibold`}
                >{doctor?.registered === true ? "Approved": "Pending"}</td>
                <td className="p-3 flex space-x-2">
                  
                    <>
                      <button onClick={()=>updateDoctorStatus(doctor._id, true)}
                        className="px-4 py-2 bg-[#00a6fb] text-white rounded hover:bg-[#006699]"
                      >
                        Approve
                      </button>
                      <button
                        onClick={()=>handleDelete(doctor._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
