"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AppointmentsHistoryPage = () => {
  const { data: session } = useSession(); 
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        
        const response = await fetch(`/api/appointment?email=${encodeURIComponent(session?.user?.email)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }

        const responseData = await response.json(); 
        setAppointments(responseData);
        setLoading(false);

      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (session) { 
      fetchAppointments();
    } else if (session === null) {
      setLoading(false);
    }
  }, [session]); 

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

 

  if (!session?.user) {
    return (
      <div className="text-center py-8">
        <p className="text-lg">Please sign in to view your appointments.</p>
      </div>
    );
  }
  const formatTime = (time24) => {
    if (!time24) return '';

    const [hours, minutes] = time24.split(':');
    let period = 'am';
    let hour12 = parseInt(hours, 10);

    if (hour12 === 0) {
      hour12 = 12;
    } else if (hour12 === 12) {
      period = 'pm';
    } else if (hour12 > 12) {
      hour12 -= 12;
      period = 'pm';
    }

    return `${hour12}:${minutes} ${period}`;
  };
  
  return (
    <div className="mt-5 min-h-screen">
      <div className="mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Appointment History</h1>
        <p className="uppercase font-light">Find all your appointments here!</p>
      </div>
      
      {/* table part  */}
      <div className="w-[90%] mx-auto my-5">
        {appointments.length === 0 ? (
          <div className="text-center py-8 border rounded-md">
            <p className="text-gray-500">No appointments found.</p>
          </div>
        ) : (
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SL. NO.</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead className="text-right">Date</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={appointment._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="uppercase">{appointment.department}</TableCell>
                  <TableCell className="uppercase">{appointment.doctor}</TableCell>
                  <TableCell className="text-right">
                  {new Date(appointment.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </TableCell>
                  <TableCell className="text-right">{formatTime(appointment.time)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default AppointmentsHistoryPage;