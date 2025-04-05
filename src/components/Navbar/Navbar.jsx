"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@components/ui/avatar";

export const Navbar = () => {
  const pathName = usePathname();
  const { data, status } = useSession();
  // console.log("This is form Navbar : ", data);
  
  const logOut = () => {
    signOut({ callbackUrl: "/" });
    toast.success("Logout Successful");
  };

  return pathName.includes("/dashboard") ? (
    ""
  ) : (
    <nav className="bg-slate-200 px-4 py-4 fixed top-0 left-0 z-50 w-full">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        <Link
          href={"/"}
          className="text-xl md:text-2xl font-extrabold uppercase"
        >
          Health<span className="text-[#00a6fb]">Point</span>
        </Link>
        <ul className="hidden md:flex space-x-6 text-lg text-[#000000b4]">
          <li
            className={
              pathName === "/"
                ? "text-[#00a6fb] font-bold border-b-2 border-[#00a6fb] px-1"
                : ""
            }
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={
              pathName === "/doctors"
                ? "text-[#00a6fb] font-bold border-b-2 border-[#00a6fb] px-1"
                : ""
            }
          >
            <Link href={"/doctors"}>Doctors</Link>
          </li>
          {status === "authenticated" && (
            <li
              className={
                pathName === "/appointment"
                  ? "text-[#00a6fb] font-bold border-b-2 border-[#00a6fb] px-1"
                  : ""
              }
            >
              <Link href={"/appointment"}>Appointment</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li
              className={
                pathName === "/ai-support"
                  ? "text-[#00a6fb] font-bold border-b-2 border-[#00a6fb] px-1"
                  : ""
              }
            >
              <Link href={"/ai-support"}>AI Health Assistant</Link>
            </li>
          )}
          <li
            className={
              pathName === "/became-doctor"
                ? "text-[#00a6fb] font-bold border-b-2 border-[#00a6fb] px-1"
                : ""
            }
          >
            <Link href={"/became-doctor"}>Became-Doctor</Link>
          </li>
          <li
            className={
              pathName === "/blog"
                ? "text-[#00a6fb] font-bold border-b-2 border-[#00a6fb] px-1"
                : ""
            }
          >
            <Link href={"/blog"}>Blogs</Link>
          </li>

          <li
            className={
              pathName === "/contact"
                ? "text-[#00a6fb] font-bold border-b-2 border-[#00a6fb] px-1"
                : ""
            }
          >
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            {status == "authenticated" ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        className="border-2 rounded-full border-blue-500"
                        referrerPolicy="no-referrer" 
                        src={data?.user.image}
                        alt="User"
                      />
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem className="text-blue-500  font-bold hover:text-red-500">
                      {data?.user?.name}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-blue-500 cursor-pointer font-bold">
                      <Link href={"/dashboard"}>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => logOut()}
                      className="text-red-500 cursor-pointer font-bold"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link href={"/login"}>
                  <Button variant={pathName === "/login" ? "primary" : "ghost"}>
                    Login
                  </Button>
                </Link>
                <Link href={"/register"}>
                  <Button
                    variant={pathName === "/register" ? "primary" : "ghost"}
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className=" md:hidden">
                  <AvatarImage
                    className="border-2 md:hidden rounded-full border-blue-500"
                    src={data?.user.image}
                    referrerPolicy="no-referrer" 
                    alt="User"
                  />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem
                  onClick={() => console.log("Go to Dashboard")}
                >
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SheetTrigger asChild>
              <Button className="md:hidden bg-white text-black">☰</Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-60">
              <ul className="space-y-4 p-4">
                <li>
                  <Link
                    href="/"
                    className="block text-[#00a6fb]  hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/doctors"
                    className="block text-[#00a6fb] hover:underline"
                  >
                    Doctors
                  </Link>
                </li>
                {status === "authenticated" && (
                  <li>
                    <Link
                      href="/appointment"
                      className="block text-[#00a6fb] hover:underline"
                    >
                      Appointment
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/became-doctor"
                    className="block text-[#00a6fb] hover:underline"
                  >
                    Became-Doctor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="block text-[#00a6fb] hover:underline"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block text-[#00a6fb] hover:underline"
                  >
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
                      <Button
                        variant={pathName === "/login" ? "primary" : "ghost"}
                      >
                        Login
                      </Button>
                    </Link>
                    <Link href={"/register"}>
                      <Button
                        variant={pathName === "/register" ? "primary" : "ghost"}
                      >
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
