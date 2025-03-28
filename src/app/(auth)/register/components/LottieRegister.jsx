"use client";
import Lottie from "lottie-react";
import RegistrationLottie from "/public/assets/LottieFiles/RegistrationLottie.json";

export default function LottieRegister() {
  return (
    <div className="lg:w-1/2 flex justify-center mx-auto">
      <Lottie animationData={RegistrationLottie}></Lottie>
    </div>
  );
}
