"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminDashboardRoutes = () => {
  const pathName = usePathname();
  return (
    <nav className="space-y-5">
      <Link
        href="/dashboard/userProfile"
        className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
          pathName === "/dashboard/userProfile" ? "bg-white text-[#00a6fb]" : ""
        }`}
      >
        Profile
      </Link>
      <Link
        href="/dashboard/doctorRequests"
        className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
          pathName === "/dashboard/doctorRequests"
            ? "bg-white text-[#00a6fb] "
            : ""
        }`}
      >
        Doctor Request
      </Link>
      <Link
        href="/dashboard/doctor-onboard"
        className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
          pathName === "/dashboard/doctor-onboard"
            ? "bg-white text-[#00a6fb] "
            : ""
        }`}
      >
        Doctor Onboard
      </Link>
      <Link
          href="/dashboard/appointment-reschedule"
          className={`flex items-center justify-center border-2 rounded-lg px-4 py-1  font-bold ${
            pathName === "/dashboard/appointment-reschedule"
              ? "bg-white text-[#00a6fb] "
              : ""
          }`}
        >
          Appointment Reschedule
        </Link>
      <Link
        href="/dashboard/blogWriting"
        className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
          pathName === "/dashboard/blogWriting"
            ? "bg-white text-[#00a6fb] "
            : ""
        }`}
      >
        Blog Writing
      </Link>
    </nav>
  );
};

export default AdminDashboardRoutes;
