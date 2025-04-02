import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function PatientDashboard() {
  const pathName = usePathname();
  return (
    <div>
      <nav className="space-y-5">
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
            pathName === "/dashboard/payment-history"
              ? "bg-white text-[#00a6fb] "
              : ""
          }`}
        >
          Payment History
        </Link>

        {/* <Link
          className="flex pt-20 items-center justify-center  gap-3 rounded-lg px-4  font-bold text-lg text-white"
          href={"/"}
        >
          <FaHome /> Home
        </Link> */}
      </nav>
    </div>
  );
}
