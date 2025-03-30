import { FaHome } from "react-icons/fa";
const { default: Link } = require("next/link");

function SidebarContent() {
    return (
      <div className="space-y-4 p-4">
        <div className="mb-6 px-4">
          <h2 className="text-lg font-semibold">
            <Link href={"/dashboard"}>Dashboard</Link>
          </h2>

        </div>
        <nav className="space-y-1">
          <Link
            href="/dashboard/userProfile"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-blue-500"
          >
            User Profile
          </Link>
          <Link
            href="/dashboard/doctorRequests"
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-blue-500"
          >
            Doctor Request
          </Link>
          <Link
            href="/dashboard/patientReviews"
            className="flex items-center gap-3 rounded-lg px-4 pb-20 text-muted-foreground transition-all hover:text-blue-500"
          >
            Patient Review
          </Link>
          <Link 
            className="flex items-center gap-3 rounded-lg px-4 py-2 text-black transition-all hover:text-blue-500" 
            href={"/"}><FaHome/> Home</Link>
        </nav>
      </div>
    );
  }

  export default SidebarContent;