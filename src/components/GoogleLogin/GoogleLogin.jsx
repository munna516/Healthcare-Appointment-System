"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const hasShownToast = useRef(false); // 👈 Track if toast was shown
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  useEffect(() => {
    console.log("Ok ", session);
    if (session?.provider === "google" && !hasShownToast.current) {
      router.push("/");
      hasShownToast.current = true; // 👈 Mark toast as shown
      toast.success("Successfully logged in with Google!");
    }
  }, [session]);
  return (
    <div>
      <div
        onClick={handleGoogleSignIn}
        className="flex cursor-pointer items-center justify-center mt-4 text-gray-600  border rounded-lg   hover:bg-gray-200 "
      >
        <div className="px-4 py-2 text-2xl">
          <FcGoogle />
        </div>

        <span className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in with Google
        </span>
      </div>
    </div>
  );
};

export default GoogleLogin;
