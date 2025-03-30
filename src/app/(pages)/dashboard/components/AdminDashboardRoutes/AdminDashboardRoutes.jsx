"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

const AdminDashboardRoutes = () => {
    const pathName = usePathname();
    return (
        <nav className="space-y-5">
            <Link
          href="/dashboard/userProfile"
          className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
            pathName === "/dashboard/userProfile"
              ? "bg-white text-[#00a6fb]"
              : ""
          }`}
        >
          User Profile
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
          href="/dashboard/patientReviews"
          className={`flex items-center justify-center text-lg border-2 rounded-lg px-4 py-1  font-bold ${
            pathName === "/dashboard/patientReviews"
              ? "bg-white text-[#00a6fb] "
              : ""
          }`}
        >
          Patient Review
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
        <Link
            className="flex pt-20 items-center justify-center gap-3 rounded-lg px-4  font-bold text-lg text-white"
            href={"/"}
          >
            <FaHome /> Home
          </Link>
        </nav>
    );
};

export default AdminDashboardRoutes;