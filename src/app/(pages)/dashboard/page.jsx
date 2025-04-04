// import AdminStatistics from "./components/AdminStatistics/AdminStatistics";
// import DoctorStatistics from "./components/DoctorStatistics/DoctorStatistics";
// import PatientStatistics from "./components/PatientStatistics/PatientStatistics";

//   const role = data.role;
//   return role == "admin" ? (
//     router.replace('/dashboard/admin-profile')
//   ) : role == "patient" ? (
//     router.replace('/dashboard/patient-profile')
//   ) : (
//     router.replace('/dashboard/doctor-profile')

//   );



import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';
import { authOptions } from "src/lib/authOptions";


async function dashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    console.log("No session found, redirecting to login.");
    redirect('/login');
  }

  let roleData;
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL || ''}/api/role?email=${encodeURIComponent(session.user.email)}`;
    console.log(`Workspaceing role from: ${apiUrl}`);

    const res = await fetch(
      apiUrl,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`HTTP error fetching role! Status: ${res.status}. Response: ${errorText}`);
      redirect('/error?code=FETCH_ROLE_FAILED');
    }

    roleData = await res.json();

    if (!roleData?.role) {
      console.error("Role not found in API response data:", roleData);
      redirect('/profile-setup?reason=NO_ROLE');
    }

  } catch (error) {
    console.error("Error during fetch or processing role:", error);
    redirect('/error?code=FETCH_EXCEPTION');
  }

  const role = roleData.role;

  console.log(`User role determined as: ${role}. Redirecting...`);

  if (role === "admin") {
    redirect('/dashboard/admin-profile');
  } else if (role === "patient") {
    redirect('/dashboard/patient-profile');
  } else if (role === "doctor") {
    redirect('/dashboard/doctor-profile');
  } else {
    console.warn(`Unexpected role "${role}" received for user ${session.user.email}`);
    redirect('/dashboard/default');
  }
}

export default dashboard;
