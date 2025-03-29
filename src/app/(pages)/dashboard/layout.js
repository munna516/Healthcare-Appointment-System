"use client"
import { Toaster } from "react-hot-toast";
import { Dashboard } from "./components/Dashboard";

export default function RootLayout({ children }) {

  return (
      <>
        <Dashboard>{children}</Dashboard>
        <Toaster />
      </>




  );
}
