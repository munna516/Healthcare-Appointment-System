"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

export const Navbar = () => {
  const pathName = usePathname();
  const { data, status } = useSession();

  const logOut = () => {
    signOut({ redirect: false });
    toast.success("Logout Successful");
  };

  return (
    <nav className="bg-slate-200 px-2 py-4 fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link href={"/"} className="text-lg md:text-2xl font-bold uppercase">
          HealthPoint
        </Link>
        <ul className="hidden md:flex space-x-6 text-lg text-[#000000b4]">
          <li className={pathName === "/" ? "text-[#00a6fb] font-bold" : ""}>
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={
              pathName === "/doctors" ? "text-[#00a6fb] font-bold" : ""
            }
          >
            <Link href={"/doctors"}>Doctors</Link>
          </li>
          {status === "authenticated" && (
            <li
              className={
                pathName === "/appointment" ? "text-[#00a6fb] font-bold" : ""
              }
            >
              <Link href={"/appointment"}>Appointment</Link>
            </li>
          )}
          <li
            className={
              pathName === "/became-doctor" ? "text-[#00a6fb] font-bold" : ""
            }
          >
            <Link href={"/became-doctor"}>Became-Doctor</Link>
          </li>

          <li
            className={
              pathName === "/contact" ? "text-[#00a6fb] font-bold" : ""
            }
          >
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {status == "authenticated" ? (
              <Button onClick={() => logOut()} variant="outline">
                Logout
              </Button>
            ) : (
              <div className="flex items-center gap-4">
                <Link href={"/login"}>
                  <Button variant="primary">Login</Button>
                </Link>
                <Link href={"/register"}>
                  <Button variant="outline">Register</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden bg-white text-black">☰</Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-60">
              <ul className="space-y-4 p-4">
                <li>
                  <Link href="/" className="block hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/doctors" className="block hover:underline">
                    Doctors
                  </Link>
                </li>
                {status === "authenticated" && (
                  <li>
                    <Link href="/appointment" className="block hover:underline">
                      Appointment
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/became-doctor" className="block hover:underline">
                    Became-Doctor
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block hover:underline">
                    Contact
                  </Link>
                </li>
                {status == "authenticated" ? (
                  <Button onClick={() => logOut()} variant="outline">
                    Logout
                  </Button>
                ) : (
                  <div className="flex items-center gap-4">
                    <Link href={"/login"}>
                      <Button variant="primary">Login</Button>
                    </Link>
                    <Link href={"/register"}>
                      <Button variant="outline" className="text-blue-400">
                        Register
                      </Button>
                    </Link>
                  </div>
                )}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
