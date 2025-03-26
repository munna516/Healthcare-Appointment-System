"use client";

import Lottie from "lottie-react";
import loginLottie from "/public/assets/LottieFiles/LoginLottie.json";

export default function LottieLogin() {
  return (
    <div className="lg:w-1/2 flex justify-center items-center">
      <Lottie animationData={loginLottie}></Lottie>
    </div>
  );
}
