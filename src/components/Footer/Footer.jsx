"use client";
import React from "react";
import { BsRobot } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathName = usePathname();
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
  return pathName.includes("/dashboard") ? (
    " "
  ) : (
    <div className="bg-[url('https://i.ibb.co/vCkxccPR/bgtwo.png')] bg-cover w-full bg-bottom">
      <div className="max-w-7xl w-full mx-auto gap-6 px-2 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {/* About */}
        <div className="col-span-1 sm:col-span-2 text-center lg:text-left">
          <Link href="/">
            <p className="text-2xl md:text-4xl font-bold mb-4">
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
          {/* Icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 text-gray-600 py-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-[#00a6fb] transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl hover:text-[#00a6fb] transition duration-300" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-2xl hover:text-[#00a6fb] transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-[#00a6fb] transition duration-300" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-[#00a6fb] transition duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-[#00a6fb] transition duration-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 text-center lg:text-left">
          <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-[#00a6fb] hover:underline transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="col-span-1 text-center lg:text-left">
          <h1 className="text-xl font-semibold mb-4">Useful Links</h1>
          <ul className="space-y-2">
            {usefulLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-[#00a6fb] hover:underline transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Lets Talk */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-1 flex flex-col  items-center text-center space-y-4">
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
      </div>
      <hr />
      <div className="text-center py-8 text-gray-500">
        &copy; {new Date().getFullYear()} HealthPoint. All rights reserved.
      </div>
    </div>
  );
};
