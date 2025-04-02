"use client";
import { Toaster } from "react-hot-toast";
import { Dashboard } from "./components/Dashboard";
import NextAuthProvider from "src/providers/NextAuthProvider";

export default function Layout({ children }) {
  return (
    <>
      <NextAuthProvider>
        <Dashboard>{children}</Dashboard>
        <Toaster />
      </NextAuthProvider>
    </>
  );
}
