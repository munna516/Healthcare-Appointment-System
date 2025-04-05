import Image from "next/image";
import AppointmentForm from "./component/AppointmentForm";
import doctorImg from "/public/assets/images/doctor.jpg";

const BookAppointment = () => {
  return (
    <div className="max-w-7xl mt-20 mx-auto px-4 lg:pr-8 lg:pl-0 md:px-2 py-12">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image */}
        <div className="lg:w-1/2 hidden lg:block">
          <div className="h-full rounded-lg overflow-hidden">
            <Image
              src={doctorImg}
              alt="Medical Appointment"
              width={600}
              height={600}
              className="w-full h-full object-cover xl:object-cover lg:object-contain"
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <AppointmentForm />
      </div>
    </div>
  );
};

export default BookAppointment;
