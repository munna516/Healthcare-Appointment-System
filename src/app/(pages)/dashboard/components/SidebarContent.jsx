"use client";

import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import AdminDashboardRoutes from "./AdminDashboardRoutes/AdminDashboardRoutes";
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
      
        {
          role === "admin" 
           ? 
           //  admin dashboard routes
          <AdminDashboardRoutes/>
           :
           role === "patient"
           ?
          //  patients dashboard routes
           <nav className="space-y-5">
          {/* Patient dashboard option/routes */}
          <Link
            href="/dashboard/patient-profile"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/patient-profile"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Patient Profile
          </Link>
          <Link
            className="flex pt-20 items-center justify-center  gap-3 rounded-lg px-4  font-bold text-lg text-white"
            href={"/"}
          >
            <FaHome /> Home
          </Link>
           </nav>
           :
          //  doctors dashboard routes
          <nav className="space-y-5">
          {/* Doctor dashboard option/routes  */}
          <Link
            href="/dashboard/doctor-profile"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/doctor-profile"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Doctor Profile
          </Link>
  
          <Link
            className="flex items-center justify-center  gap-3 rounded-lg px-4  font-bold text-lg text-white"
            href={"/"}
          >
            <FaHome /> Home
          </Link>
          </nav>
        } 
    </div>
  );
}

export default SidebarContent;
