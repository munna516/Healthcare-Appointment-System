"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@components/ui/button";
import { useEffect, useState } from "react";

export default function AppointmentsDashboard() {
    const [doctors, setDoctors] = useState([]);
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/became-doctor");
        const data = await response.json();
        if (data.doctors && Array.isArray(data.doctors)) {
          const registeredDoctors = data.doctors.filter(doctor => doctor.registered == true);
          setDoctors(registeredDoctors);
        } else {
          console.error("Unexpected API response format", data);
        }
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

      } catch (error) {
        console.error(error.message);
      }
    };
    useEffect(() => {
      fetchDoctors();
    }, []);
  return (
    <Card className="p-4 shadow-xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Appointments Management</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Doctor</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Specialization</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor._id}>
                <TableCell>{doctor.fullName}</TableCell>
                <TableCell>{doctor.email}</TableCell>
                <TableCell>{doctor.specialization}</TableCell>
                <TableCell className="flex gap-2">               
                    <Button size="sm" variant="primary">
                        Fire
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
