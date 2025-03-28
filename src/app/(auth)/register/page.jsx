

import dynamic from "next/dynamic";
import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

// Dynamically import components that use browser APIs with SSR disabled
const GoogleLogin = dynamic(
  () => import("@components/GoogleLogin/GoogleLogin"),
  { ssr: false }
);

const LottieRegister = dynamic(() => import("./components/LottieRegister"), {
  ssr: false,
});

export default function Register() {
  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] mt-36 mb-14">
        <div className="md:flex w-full mx-auto overflow-hidden rounded-lg shadow-lg border-2 lg:max-w-4xl">
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-xl text-center text-gray-600">
              Registration an Account
            </p>

            <GoogleLogin />

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase">
                or Registration with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <RegisterForm />

            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500">Already have account? </p>
              <Link href="login">
                <p className="font-bold text-blue-500 hover:underline uppercase">
                  Login
                </p>
              </Link>
            </div>
          </div>

          <LottieRegister />
        </div>
      </div>
    </>
  );
}
