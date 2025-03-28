"use client";

import React, { useState } from "react";
import { DoctorCard } from "@/components/TopDoctors/DoctorCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchDoctors } from "@/lib/fetchDoctors";
export default function Doctors() {
  const [page, setPage] = useState(1);
  // const limit = 5;
  const { data, error, isLoading } = useQuery({
    // queryKey: ["doctors", page],
    // queryFn: () => fetchDoctors({ page, limit }),
    queryFn: () => fetchDoctors(),
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching doctors: {error.message}</p>;
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-2 py-12">
      <div>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
          {data.map((doctor) => (
            <DoctorCard key={doctor.uid} doctor={doctor} />
          ))}
        </div>
        <div className="flex justify-center items-center w-full mt-14 space-x-4">
          <Button
            variant="outline"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>

          <Button
            variant="outline"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === data?.totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
