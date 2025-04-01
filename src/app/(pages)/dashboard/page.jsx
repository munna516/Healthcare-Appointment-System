import { getServerSession } from "next-auth";
import AdminStatistics from "./components/AdminStatistics/AdminStatistics";
import DoctorStatistics from "./components/DoctorStatistics/DoctorStatistics";
import PatientStatistics from "./components/PatientStatistics/PatientStatistics";

const dashboard = async () => {
  const session = await getServerSession();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/role?email=${session?.user?.email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();

  if (!data?.role) {
    console.error("Role not found in response");
    return null;
  }

  const role = data.role;
  return role == "admin" ? (
    <AdminStatistics />
  ) : role == "patient" ? (
    <PatientStatistics />
  ) : (
    <DoctorStatistics />
  );
};

export default dashboard;
