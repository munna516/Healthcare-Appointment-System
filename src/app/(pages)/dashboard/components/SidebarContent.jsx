"use client";
import { FaHome } from "react-icons/fa";
import AdminDashboardRoutes from "./AdminDashboardRoutes/AdminDashboardRoutes";
import PatientDashboard from "./PatientDashboard/PatientDashboard";
import DoctorDashboard from "./DoctorDashboard/DoctorDashboard";
import Link from "next/link";
import { useSession } from "next-auth/react";


export default function SidebarContent() {
  const role = "admin";
  // const { data, status } = useSession();

  return (
    <div className="space-y-4 p-4 ">
      <div className="mb-6 px-4">
        <h2 className="text-2xl font-extrabold ">
          <Link href={"/dashboard"}>Dashboard</Link>
        </h2>
      </div>
      <div>
        {role === "admin" ? (
          <AdminDashboardRoutes />
        ) : role === "patient" ? (
          <PatientDashboard />
        ) : (
          <DoctorDashboard />
        )}
      </div>
      <Link
        className="flex items-center justify-center  gap-3 rounded-lg px-4  font-bold text-lg text-white mt-10"
        href={"/"}
      >
        <FaHome /> Home
      </Link>
    </div>
  );
}
