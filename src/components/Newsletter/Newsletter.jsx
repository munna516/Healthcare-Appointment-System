"use client";
import toast from "react-hot-toast";

const Newsletter = ({
  title = "Subscribe for the Exclusive Updates!",
  buttonText = "Subscribe",
  placeholder = "Your Email Address",
  className = "",
}) => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-[90%] mx-auto my-10 ${className}`}
    >
      <div className="w-full py-10 px-8 bg-blue-500 text-white rounded-lg md:rounded-full p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg md:text-2xl font-bold text-center md:text-left">
          {title}
        </h2>
        <form
          onSubmit={handleSubscribe}
          className="flex items-center bg-white rounded-full p-1 w-full md:w-2/5"
        >
          <input
            type="email"
            placeholder={placeholder}
            className="px-4 py-2 text-gray-700 rounded-full focus:outline-none w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
