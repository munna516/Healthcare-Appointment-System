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
// import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@components/ui/button";
import toast from "react-hot-toast";

const GiveReview = () => {
  const { data: session } = useSession();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState({});
  const [submitting, setSubmitting] = useState({});

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

        // Initialize reviews state with empty strings for each appointment
        const initialReviews = {};
        responseData.forEach((appointment) => {
          initialReviews[appointment._id] = "";
        });
        setReviews(initialReviews);

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

  const handleReviewChange = (appointmentId, value) => {
    setReviews((prev) => ({
      ...prev,
      [appointmentId]: value,
    }));
  };

  const handleSubmitReview = async (appointmentId) => {
    setSubmitting((prev) => ({ ...prev, [appointmentId]: true }));

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointmentId,
          userId: session?.user?.id,
          userEmail: session?.user?.email,
          reviewText: reviews[appointmentId],
          department: appointments.find((a) => a._id === appointmentId)
            ?.department,
          doctor: appointments.find((a) => a._id === appointmentId)?.doctor,
          date: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setReviews((prev) => ({
        ...prev,
        [appointmentId]: "",
      }));

      toast.success("Login Successful");
    } catch (err) {
      console.error("Error submitting review:", err);
      toast.error("Error, Please Try Again");
    } finally {
      setSubmitting((prev) => ({ ...prev, [appointmentId]: false }));
    }
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
          Please sign in to write reviews for your appointments.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-5 min-h-screen">
      <div className="mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Give Review</h1>
        <p className="uppercase font-light">Write your review here!</p>
      </div>

      <div className="w-[90%] mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {appointments.length === 0 ? (
          <div className="col-span-full text-center py-8 border rounded-md">
            <p className="text-gray-500">No appointments found to review.</p>
          </div>
        ) : (
          appointments.map((appointment) => (
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
                  <Textarea
                    placeholder="Write your review about this appointment..."
                    className="min-h-24 w-full"
                    value={reviews[appointment._id]}
                    onChange={(e) =>
                      handleReviewChange(appointment._id, e.target.value)
                    }
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  className="w-full bg-[#00a6fb] hover:bg-blue-500 text-white font-medium py-3 px-4 rounded-[12px] transition duration-300"
                  onClick={() => handleSubmitReview(appointment._id)}
                  disabled={submitting[appointment._id]}
                >
                  {submitting[appointment._id]
                    ? "Submitting..."
                    : "Submit Review"}
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default GiveReview;
