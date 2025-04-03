"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { Button } from "@components/ui/button";

import convertToSubcurrency from "src/lib/convertToSubcurrency";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "@components/CheckoutPage/CheckoutPage";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const MakePayment = () => {
  const amount = 100;

  const { data: session } = useSession();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState({});
  const [showPayment, setShowPayment] = useState({});

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          `/api/appointment?email=${encodeURIComponent(session?.user?.email)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
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

  const handleMakePayment = async (appointmentId) => {
    setProcessing((prev) => ({ ...prev, [appointmentId]: true }));
    setShowPayment((prev) => ({ ...prev, [appointmentId]: true }));
    setProcessing((prev) => ({ ...prev, [appointmentId]: false }));
  };

  const formatTime = (time24) => {
    if (!time24) return "";

    const [hours, minutes] = time24.split(":");
    let period = "am";
    let hour12 = parseInt(hours, 10);

    if (hour12 === 0) {
      hour12 = 12;
    } else if (hour12 === 12) {
      period = "pm";
    } else if (hour12 > 12) {
      hour12 -= 12;
      period = "pm";
    }

    return `${hour12}:${minutes} ${period}`;
  };

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
        <p className="text-lg">
          Please sign in to make payments for your appointments.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 min-h-screen">
      <div className="mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Make Payment</h1>
        <p className="uppercase font-light">
          Process your appointment payments here!
        </p>
      </div>

      <div className="w-[90%] mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
        {appointments.length === 0 ? (
          <div className="col-span-full text-center py-8 border rounded-md">
            <p className="text-gray-500">No appointments found for payment.</p>
          </div>
        ) : (
          appointments.map((appointment) => {
            const appointmentDetails = {
              _id: appointment._id,
              patientName: session?.user?.name || "Patient",
              doctor: appointment.doctor,
              department: appointment.department,
              date: appointment.date,
              time: appointment.time,
            };

            return (
              <Card key={appointment._id} className="shadow-md">
                <CardHeader>
                  <CardTitle className="uppercase text-lg">
                    {appointment.doctor}{" "}
                  </CardTitle>
                  <CardDescription>
                    <div className="font-light uppercase text-gray-700">
                      {appointment.department}{" "}
                    </div>
                    <div className="text-sm mt-1">
                      {new Date(appointment.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {" at "}
                      {formatTime(appointment.time)}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <div className="text-center py-2 bg-gray-50 rounded-md">
                      <p className="text-gray-700 font-medium">
                        Appointment Fee: ৳100
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Payment Gateway: Stripe
                      </p>
                      {showPayment[appointment._id] && (
                        <Elements
                          stripe={stripePromise}
                          options={{
                            mode: "payment",
                            amount: convertToSubcurrency(amount),
                            currency: "usd",
                          }}
                        >
                          <CheckoutPage 
                            amount={amount} 
                            appointmentDetails={appointmentDetails}
                          />
                        </Elements>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  {!showPayment[appointment._id] && (
                    <Button
                      className="w-full bg-[#00a6fb] hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-[12px] transition duration-300"
                      onClick={() => handleMakePayment(appointment._id)}
                      disabled={processing[appointment._id]}
                    >
                      {processing[appointment._id]
                        ? "Processing..."
                        : "Make Payment"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MakePayment;