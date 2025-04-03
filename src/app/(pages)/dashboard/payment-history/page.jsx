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

const PaymentHistoryPage = () => {
  const { data: session } = useSession(); 
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(payments)
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch(`/api/payment-details?email=${encodeURIComponent(session?.user?.email)}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch payment history");
        }

        const responseData = await response.json(); 
        setPayments(responseData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching payment history:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (session) {
      fetchPayments();
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
        <p className="text-lg">Please sign in to view your payment history.</p>
      </div>
    );
  }

  return (
    <div className="mt-5 min-h-screen">
      <div className="mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Payment History</h1>
        <p className="uppercase font-light">Find all your payment transactions here!</p>
      </div>
      
      {/* table part  */}
      <div className="w-[90%] mx-auto my-5">
        {payments.length === 0 ? (
          <div className="text-center py-8 border rounded-md">
            <p className="text-gray-500">No payments found.</p>
          </div>
        ) : (
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SL. NO.</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Intent ID</TableHead>
                <TableHead >Payment Date</TableHead>
                <TableHead >Department</TableHead>
                <TableHead className="text-right">Doctor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow key={payment._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="uppercase">৳{payment.amount}</TableCell>
                  <TableCell className="uppercase">{payment.paymentIntentId}</TableCell>
                  <TableCell >
                    {new Date(payment.paymentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </TableCell>

                  <TableCell className="uppercase">{payment.department}</TableCell>
                  <TableCell className="text-right uppercase">{payment.doctor}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
