"use client";

import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import AdminDashboardRoutes from "./AdminDashboardRoutes/AdminDashboardRoutes";
const { default: Link } = require("next/link");

function SidebarContent() {
  const role = "patient";
  const pathName = usePathname();
  return (
    <div className="space-y-4 p-4 ">
      <div className="mb-6 px-4">
        <h2 className="text-2xl font-extrabold ">
          <Link href={"/dashboard"}>Dashboard</Link>
        </h2>
      </div>

      {role === "admin" ? (
        //  admin dashboard routes
        <AdminDashboardRoutes />
      ) : role === "patient" ? (
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
            href="/dashboard/make-payment"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/make-payment"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Make Payment
          </Link>

          <Link
            href="/dashboard/give-review"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/give-review"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Give Review
          </Link>

          <Link
            href="/dashboard/appointment-history"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/appointment-history"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Appointment History
          </Link>

          <Link
            href="/dashboard/payment-history"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/give-review"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Payment History
          </Link>

          <Link
            className="flex pt-20 items-center justify-center  gap-3 rounded-lg px-4  font-bold text-lg text-white"
            href={"/"}
          >
            <FaHome /> Home
          </Link>
        </nav>
      ) : (
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
            href="/dashboard/doctor-availability"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/doctor-availability"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Doctor Availability
          </Link>

          <Link
            href="/dashboard/appointment-reschedule"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/appointment-reschedule"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Appointment Reschedule
          </Link>

          <Link
            href="/dashboard/digital-prescription"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/digital-prescription"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Digital Prescription
          </Link>

          <Link
            href="/dashboard/appointment-remain"
            className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
              pathName === "/dashboard/appointment-remain"
                ? "bg-white text-[#00a6fb] "
                : ""
            }`}
          >
            Appointment Remain
          </Link>


          <Link
            className="flex items-center justify-center  gap-3 rounded-lg px-4  font-bold text-lg text-white"
            href={"/"}
          >
            <FaHome /> Home
          </Link>
        </nav>
      )}
    </div>
  );
}

export default SidebarContent;
