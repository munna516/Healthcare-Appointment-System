"use client";
import { DoctorCard } from "./DoctorCard";
import { Button } from "../ui/button";
import Link from "next/link";
import SectionSubTitle from "@components/SectionSubTitle/SectionSubTitle";
import { useEffect, useState } from "react";

const TopDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/doctors-cards");
        const data = await response.json();
        setDoctors(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-16">
      <div className=" px-2 flex justify-center items-center flex-col mb-8">
        <SectionSubTitle text={"Doctors"} />
        <h1 className={`text-xl capitalize md:text-4xl font-bold pb-6`}>
          Meet our Doctors
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a6fb]"></div>
        </div>
      ) : (
        <>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))}
          </div>
          <div className="flex justify-center items-center w-full mt-10">
            <Link href="/doctors">
              <Button variant="primary">See All Doctors</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default TopDoctors;
