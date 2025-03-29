"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.status === 401) {
        toast.error("Invalid Credentials");
      }
      if (res.status === 200) {
        router.push("/");
        form.reset();
        toast.success("Login Successful");
      }
    } catch (error) {
      toast.error("Error, trrrrry again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            autoComplete="email"
            name="email"
            className="block w-full px-4 py-2 text-gray-700   border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
            required
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between relative">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 "
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-lg absolute top-10 right-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <input
            id="loggingPassword"
            autoComplete="current-password"
            name="password"
            required
            className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type={showPassword ? "text" : "password"}
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="border-2 rounded-lg py-1 bg-blue-500 text-white font-semibold   text-lg w-full "
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </>
  );
}
