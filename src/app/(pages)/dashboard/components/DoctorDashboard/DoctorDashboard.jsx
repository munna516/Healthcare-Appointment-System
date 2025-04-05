import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHome } from "react-icons/fa";

export default function DoctorDashboard() {
  const pathName = usePathname();
  return (
    <div>
      <nav className="space-y-5">
        {/* Doctor dashboard option/routes  */}
        <Link
          href="/dashboard/doctor-profile"
          className={`flex items-center justify-center border-2 rounded-lg px-4 py-1  font-bold ${
            pathName === "/dashboard/doctor-profile"
              ? "bg-white text-[#00a6fb] "
              : ""
          }`}
        >
          Doctor Profile
        </Link>

        {/* <Link
          href="/dashboard/doctor-availability"
          className={`flex items-center justify-center border-2 rounded-lg px-4 py-1  font-bold ${
            pathName === "/dashboard/doctor-availability"
              ? "bg-white text-[#00a6fb] "
              : ""
          }`}
        >
          Doctor Availability
        </Link> */}
{/* 
        <Link
          href="/dashboard/appointment-reschedule"
          className={`flex items-center justify-center border-2 rounded-lg px-4 py-1  font-bold ${
            pathName === "/dashboard/appointment-reschedule"
              ? "bg-white text-[#00a6fb] "
              : ""
          }`}
        >
          Appointment Reschedule
        </Link> */}

      

        <Link
          href="/dashboard/appointment-remain"
          className={`flex items-center justify-center border-2 rounded-lg px-4 py-1  font-bold ${
            pathName === "/dashboard/appointment-remain"
              ? "bg-white text-[#00a6fb] "
              : ""
          }`}
        >
          Appointment Remain
        </Link>

        {/* <Link
          className="flex items-center justify-center  gap-3 rounded-lg px-4  font-bold text-lg text-white"
          href={"/"}
        >
          <FaHome /> Home
        </Link> */}
      </nav>
    </div>
  );
}
