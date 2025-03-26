"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, email, password });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setErrorMessage("This email is already registered");
      }
      if (res.status === 200) {
        setErrorMessage("");
        router.push("/login");
      }
    } catch (error) {
      setErrorMessage("Error, try again");
      console.log(error);
    }

  };
  return (
    <>
      <form onSubmit={handleRegister}>
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            autoComplete="name"
            required
            name="name"
            className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
        </div>

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
            required
            name="email"
            className="block w-full px-4 py-2 text-gray-700  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
            type="email"
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
          {errorMessage && (
            <p className="mt-2 text-red-400 font-bold">{errorMessage}</p>
          )}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="border-2 rounded-lg py-1 bg-blue-500 text-white font-semibold   text-lg w-full "
          >
            {/* {loading ? (
                        <TbFidgetSpinner className="animate-spin m-auto" />
                      ) : (
                        "Register"
                      )} */}
            Register
          </button>
        </div>
      </form>
    </>
  );
}
