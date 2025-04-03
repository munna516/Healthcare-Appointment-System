"use client"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const LastWeekAppointment = () => {
    const data = [
        { day: "Monday", value: 5 },
        { day: "Tuesday", value: 8 },
        { day: "Wednesday", value: 6 },
        { day: "Thursday", value: 10 },
        { day: "Friday", value: 7 },
        { day: "Saturday", value: 3 },
        { day: "Sunday", value: 4 },
      ];
    const COLORS = ["#00eeff", "#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"];
    return (
        <Card className="p-6 shadow-lg">
      <CardContent>
        <h2 className="text-xl font-semibold text-gray-600 text-center mb-4">
          Last Week&apos;s Appointments
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    );
};

export default LastWeekAppointment;