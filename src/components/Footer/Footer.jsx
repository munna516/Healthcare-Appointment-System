import React from "react";
import { BsRobot } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongoose } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export const Footer = () => {
  const usefulLinks = [
    {
      id: 1,
      name: "Service & Privacy",
      url: "/Service & Privacy",
    },
    {
      id: 2,
      name: "Team Members",
      url: "/teams",
    },
    {
      id: 3,
      name: "Documentation",
      url: "/docs",
    },
    {
      id: 4,
      name: "GitHub Repo",
      url: "https://github.com/munna516/Healthcare-Appointment-System",
    },
  ];
  const navLinks = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      name: "Appointment",
      url: "/appointment",
    },
  ];
  return (
    <div className="bg-[url('https://i.ibb.co/vCkxccPR/bgtwo.png')] bg-cover w-full bg-bottom">
      <div className="max-w-7xl w-full mx-auto gap-10 px-2 py-28 grid grid-cols-1 sm:grid-cols-4">
        {/* About */}
        <div className="col-span-1 sm:col-span-4 lg:col-span-2 text-center lg:text-left">
          <Link href="/">
            <p className="text-3xl md:text-5xl font-bold mb-4">
              Health<span className="text-[#00a6fb]">Point</span>
            </p>
          </Link>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
            <strong>HealthPoint</strong> is dedicated to providing reliable
            health resources and expert insights to help you live a healthier
            life. We provide world-class doctors in one place. Take help from
            our{" "}
            <span className="inline-block">
              <span className="font-bold flex space-x-1">
                <BsRobot className="text-lg" /> <span>AI-powered</span>
              </span>
            </span>{" "}
            disease identifying system. Book an appointment now!
          </p>
        </div>
        {/* Lets Talk */}
        <div className="hidden lg:flex col-span-1 sm:col-span-4 lg:col-span-2 flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Let&apos;s Talk!</h1>
          <p>
            Have a question or comment? <br /> Let us know.
          </p>
          <Link href="/contact">
            <Button
              variant="primary"
              className="px-8 py-6 rounded-full text-xl"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        {/* Quick Links */}
        <div className="text-center lg:text-left col-span-1 sm:col-span-2 lg:col-span-1">
          <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-gray-800 hover:underline transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Useful Links */}
        <div className="text-center lg:text-left col-span-1 sm:col-span-2 lg:col-span-1">
          <h1 className="text-xl font-semibold mb-4">Useful Links</h1>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-gray-800 hover:underline transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Lets Talk */}
        <div className="flex lg:hidden col-span-1 sm:col-span-4 lg:col-span-2 flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Let&apos;s Talk!</h1>
          <p>
            Have a question or comment? <br /> Let us know.
          </p>
          <Link href="/contact">
            <Button
              variant="primary"
              className="px-8 py-6 rounded-full text-xl"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        {/* Icons */}
        <div className="col-span-1 sm:col-span-4 lg:col-span-2 flex justify-center items-center space-x-6 text-gray-600 py-6">
          <a
            href="https://vercel.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoVercel className="text-2xl hover:text-[#00a6fb] transition duration-300" />
          </a>

          <a
            href="https://github.com/munna516/Healthcare-Appointment-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="text-2xl hover:text-[#00a6fb] transition duration-300" />
          </a>

          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTailwindCssFill className="text-2xl hover:text-[#00a6fb] transition duration-300" />
          </a>

          <a
            href="https://mongoosejs.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMongoose className="text-2xl hover:text-[#00a6fb] transition duration-300" />
          </a>

          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMongodb className="text-2xl hover:text-[#00a6fb] transition duration-300" />
          </a>

          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiNextjsFill className="text-2xl hover:text-[#00a6fb] transition duration-300" />
          </a>
        </div>
      </div>
      <hr />
      <div className="text-center py-8 text-gray-500">
        &copy; {new Date().getFullYear()} HealthPoint. All rights reserved.
      </div>
    </div>
  );
};
