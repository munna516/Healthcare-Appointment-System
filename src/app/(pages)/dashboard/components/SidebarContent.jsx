"use client";

import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import AdminDashboardRoutes from "./AdminDashboardRoutes/AdminDashboardRoutes";
import PatientDashboard from "./PatientDashboard/PatientDashboard";
import DoctorDashboard from "./DoctorDashboard/DoctorDashboard";
const { default: Link } = require("next/link");

function SidebarContent() {
  const role = "admin";
  const pathName = usePathname();
  return (
    <div className="space-y-4 p-4 ">
      <div className="mb-6 px-4">
        <h2 className="text-2xl font-extrabold ">
          <Link href={"/dashboard"}>Dashboard</Link>
        </h2>
      </div>
      {role === "admin" ? (
        <AdminDashboardRoutes />
      ) : role === "patient" ? (
        <PatientDashboard />
      ) : (
        <DoctorDashboard />
      )}
    </div>
  );
}

export default SidebarContent;
