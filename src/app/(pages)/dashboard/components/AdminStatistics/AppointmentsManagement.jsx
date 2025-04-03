import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@components/ui/button";
import { Check, Clock, X } from "lucide-react";

const appointments = [
  { id: 1, patient: "John Doe", doctor: "Dr. Smith", time: "10:30 AM", status: "Pending" },
  { id: 2, patient: "Alice Brown", doctor: "Dr. Miller", time: "11:00 AM", status: "Confirmed" },
  { id: 3, patient: "Michael Lee", doctor: "Dr. Wilson", time: "11:30 AM", status: "Canceled" },
];

const statusColors = {
  Pending: "bg-yellow-500 text-white",
  Confirmed: "bg-green-500 text-white",
  Canceled: "bg-red-500 text-white",
};

export default function AppointmentsDashboard() {
  return (
    <Card className="p-4 shadow-xl">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Appointments Management</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patient}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>
                  <Badge className={`px-2 py-1 ${statusColors[appointment.status]}`}>{appointment.status}</Badge>
                </TableCell>
                <TableCell className="flex gap-2">
                  {appointment.status === "Pending" && (
                    <Button size="sm" variant="success">
                      <Check className="w-4 h-4" />
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Clock className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive">
                    <X className="w-4 h-4" />
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
