"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "src/lib/convertToSubcurrency";
import toast from "react-hot-toast";

const CheckoutPage = ({ amount, appointmentDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setErrorMessage("Failed to initialize payment. Please try again.");
          toast.error("Payment initialization failed");
        }
      })
      .catch(err => {
        console.error("Error fetching payment intent:", err);
        setErrorMessage("Failed to initialize payment. Please try again.");
        toast.error("Payment initialization failed");
      });
  }, [amount]);

  const savePaymentToDatabase = async (paymentIntentId) => {
    try {
      const response = await fetch("/api/payment-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentIntentId,
          appointmentId: appointmentDetails._id,
          patientName: appointmentDetails.patientName,
          doctor: appointmentDetails.doctor,
          department: appointmentDetails.department,
          appointmentDate: appointmentDetails.date,
          appointmentTime: appointmentDetails.time,
          amount: amount,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => {
          throw new Error(`Server error: ${response.status}`);
        });
        throw new Error(errorData.message || "Failed to record payment");
      }

      const data = await response.json().catch(() => {
        return { success: true };
      });
      return data;
    } catch (error) {
      console.error("Error saving payment:", error);
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      const { error: submitError } = await elements.submit();

      if (submitError) {
        setErrorMessage(submitError.message);
        toast.error(submitError.message || "Payment submission failed");
        setLoading(false);
        return;
      }

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        redirect: 'if_required', 
        confirmParams: {
          return_url: window.location.href, 
        },
      });

      if (error) {
        setErrorMessage(error.message);
        toast.error(error.message || "Payment failed");
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        try {
          await savePaymentToDatabase(paymentIntent.id);
          
          toast.success("Payment successful!");
          setPaymentSuccess(true);
          
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (saveError) {
          console.error("Error saving payment details:", saveError);
          toast.error("Payment was successful but we couldn't save your records. Please contact support.");
        }
      }
    } catch (err) {
      console.error("Payment process error:", err);
      setErrorMessage("An unexpected error occurred. Please try again.");
      toast.error("Payment process failed");
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center p-4">
        {errorMessage ? (
          <div className="text-red-500">{errorMessage}</div>
        ) : (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        )}
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="bg-green-50 p-4 rounded-md">
        <p className="text-green-600 font-medium text-center">
          Payment completed successfully!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;