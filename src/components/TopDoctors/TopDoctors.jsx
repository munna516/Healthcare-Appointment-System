import SectionSubTitle from "../SectionSubTitle/SectionSubTitle";
import { DoctorCard } from "./DoctorCard";
import { Button } from "../ui/button";
import Link from "next/link";
import SectionTitle from "../sectionTitle/SectionTitle";

const TopDoctors = () => {
  const doctors = [
    {
      uid: "cardio_jsmith",
      photo_url: "https://i.ibb.co.com/cFx5cYx/download.jpg",
      bio: "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in treating heart-related conditions.",
      services: ["Heart Check-up", "ECG", "Cardiac Surgery"],
      name: "Dr. John Smith",
      title: "MD",
      degrees: ["MBBS", "MD", "FACS"],
      specialty: "Cardiology",
      experience: 15,
      fees: {
        online: 70,
        offline: 100,
      },
      contact: {
        phone: "+1-123-456-7890",
        email: "dr.johnsmith@example.com",
      },
      location: {
        clinic_name: "Heart Care Center",
        address: "123 Main St, New York, NY 10001",
      },
      status: "verified",
    },
    {
      uid: "gyno_emiller",
      photo_url: "https://i.ibb.co.com/8c1tz58/Option-3-1024x683.jpg",
      bio: "Dr. Emily Miller specializes in obstetrics and gynecology with a focus on minimally invasive procedures.",
      services: ["Prenatal Care", "Pap Smear", "Laparoscopy"],
      name: "Dr. Emily Miller",
      title: "MD",
      degrees: ["MBBS", "MD", "FACOG"],
      specialty: "Gynecology",
      experience: 12,
      fees: {
        online: 80,
        offline: 120,
      },
      contact: {
        phone: "+1-234-567-8901",
        email: "dr.emily@example.com",
      },
      location: {
        clinic_name: "Women's Wellness Clinic",
        address: "456 Oak Ave, Los Angeles, CA 90001",
      },
      status: "verified",
    },
    {
      uid: "neuro_rpatel",
      photo_url: "https://i.ibb.co.com/rc5FgXt/HKstrategies-755-1-1024x683.jpg",
      bio: "Dr. Raj Patel is a neurologist specializing in epilepsy and movement disorders.",
      services: ["EEG", "EMG", "Migraine Treatment"],
      name: "Dr. Raj Patel",
      title: "MD",
      degrees: ["MBBS", "MD", "FAAN"],
      specialty: "Neurology",
      experience: 10,
      fees: {
        online: 90,
        offline: 140,
      },
      contact: {
        phone: "+1-345-678-9012",
        email: "dr.raj@example.com",
      },
      location: {
        clinic_name: "NeuroCare Associates",
        address: "789 Pine St, Chicago, IL 60601",
      },
      status: "verified",
    },
    {
      uid: "nephro_swilliams",
      photo_url: "https://i.ibb.co.com/PCk7sdJ/pexels-photo-1462980.jpg",
      bio: "Dr. Sarah Williams is a nephrologist with expertise in kidney transplants and chronic kidney disease.",
      services: ["Dialysis", "Kidney Biopsy", "Hypertension Management"],
      name: "Dr. Sarah Williams",
      title: "MD",
      degrees: ["MBBS", "MD", "FASN"],
      specialty: "Nephrology",
      experience: 14,
      fees: {
        online: 85,
        offline: 130,
      },
      contact: {
        phone: "+1-456-789-0123",
        email: "dr.sarah@example.com",
      },
      location: {
        clinic_name: "Renal Health Center",
        address: "321 Elm St, Houston, TX 77002",
      },
      status: "verified",
    },
  ];
  return (
    <div className="max-w-7xl w-full mx-auto mt-40">
      <div className=" px-2 flex justify-center items-center flex-col mb-8">
        <SectionSubTitle text={"Doctors"} />
        <SectionTitle text={"Meet our Doctors"} />
      </div>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.uid} doctor={doctor} />
        ))}
      </div>
      <div className="flex justify-center items-center w-full mt-14">
        <Link href="/doctors">
          <Button variant="primary">See All Doctors</Button>
        </Link>
      </div>
    </div>
  );
};

export default TopDoctors;
