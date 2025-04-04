import PropTypes from "prop-types";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";

export const DoctorCard = ({ doctor }) => {
  //!! Convert review to number if it's a string
  const rating =
    typeof doctor?.review === "string"
      ? parseFloat(doctor?.review)
      : doctor?.review || 5;

  // Calculate stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="shadow-md rounded-3xl hover:shadow-lg transition-shadow duration-300">
      <div className="bg-[#00a6fb] p-4 rounded-t-3xl rounded-bl-3xl flex justify-center items-center">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <Image
            src={
              doctor?.imageUrl ||
              "https://i.ibb.co.com/99wyhKnb/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default.jpg"
            }
            alt={doctor?.fullName || "Doctor Image"}
            width={150}
            height={150}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="bg-[#00a6fb] rounded-tl-3xl rounded-b-3xl text-center">
        <div className="bg-white rounded-tr-3xl rounded-b-3xl p-4 space-y-2">
          <h1 className="text-xl font-bold text-gray-800">
            {doctor?.fullName}
          </h1>
          <p className="text-gray-600">{doctor?.specialization}</p>

          {/* Star Rating Display */}
          <div className="flex items-center justify-center space-x-1 py-1">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />
            ))}
            {hasHalfStar && (
              <FaStarHalfAlt className="text-yellow-400 text-sm" />
            )}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar
                key={`empty-${i}`}
                className="text-yellow-400 text-sm"
              />
            ))}
            <span className="text-gray-600 text-sm ml-1">
              ({rating.toFixed(1)})
            </span>
          </div>

          <div className="flex gap-2 items-center justify-center py-2">
            <Button variant="primary" className="px-4 py-2 w-full">
              Appointment
            </Button>
            <Link href={`/doctors/${doctor?._id}`} passHref>
              <Button variant="outline" className="px-4 py-2">
                View
              </Button>
            </Link>
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
    specialty: PropTypes.string,
    review: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};
