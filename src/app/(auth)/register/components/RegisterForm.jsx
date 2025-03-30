"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageFile = form.image.files[0];

    if (password.length < 6) {
      setErrorMessage("password should be 6 characters");
      return;
    }
    const regularExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!regularExp.test(password)) {
      setErrorMessage("must have one uppercase, lowercase & digit");
      return;
    }
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        setLoading(false);
        toast.error("Image upload failed");
      }

      const data = await response.json();
      const image = data?.data?.url;
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            password,
            image,
          }),
        });
        if (res.status === 400) {
          toast.error("This email is already registered");
        }
        if (res.status === 200) {
          toast.success("Registration Successful. Please Login");
          router.push("/login");
        }
      } catch (error) {
        toast.error("Authentication failed, try again");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    } finally {
      setLoading(false);
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
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Select Image
          </label>
          <input
            required
            type="file"
            id="image"
            name="image"
            accept="image/*"
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
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Register"
            )}
          </button>
        </div>
      </form>
    </>
  );
}
