import PropTypes from "prop-types";
import { Button } from "../ui/button";
import Image from "next/image";

export const DoctorCard = ({ doctor }) => {
  return (
    <div className="shadow-lg rounded-3xl">
      <div className="bg-[#00a6fb] p-4 rounded-t-3xl rounded-bl-3xl flex justify-center items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <Image
            src={doctor?.photo_url}
            alt={doctor?.name || "Doctor Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="bg-[#00a6fb] rounded-tl-3xl rounded-b-3xl text-center">
        <div className="bg-white rounded-tr-3xl rounded-b-3xl p-4 space-y-2">
          <h1 className="text-xl font-bold">{doctor?.name}</h1>
          <p className="text-gray-600">{doctor?.title}</p>
          <p className="pb-4">⭐⭐⭐⭐⭐ {doctor?.review}</p>
          <div className="flex items-center justify-between gap-4">
            <Button variant="primary" className="w-full">Appointment</Button>
            <Button variant="outline">View</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    photo_url: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    review: PropTypes.string,
  }),
};

// {
//       uid: "cardio_jsmith",
//       photo_url: "https://i.ibb.co.com/cFx5cYx/download.jpg",
//       bio: "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in treating heart-related conditions.",
//       services: ["Heart Check-up", "ECG", "Cardiac Surgery"],
//       name: "Dr. John Smith",
//       title: "MD",
//       degrees: ["MBBS", "MD", "FACS"],
//       specialty: "Cardiology",
//       experience: 15,
//       fees: {
//         online: 70,
//         offline: 100,
//       },
//       contact: {
//         phone: "+1-123-456-7890",
//         email: "dr.johnsmith@example.com",
//       },
//       location: {
//         clinic_name: "Heart Care Center",
//         address: "123 Main St, New York, NY 10001",
//       },
//       status: "verified",
//     },