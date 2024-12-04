"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { tangerine } from "@/components/layouts/Banner/Banner";
import { useSession, signOut } from "next-auth/react";

const navlinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "All Rooms",
    path: "/allRooms",
  },
  {
    title: "Add Rooms",
    path: "/createRooms",
  },
  {
    title: "Hotels",
    path: "/hotels",
  },
  {
    title: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const [isOpenDrawer, setIsOpenDrwer] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const session = useSession();
  console.log(session);
  return (
    <nav className="w-full fixed z-10 py-4 bg-accent select-none shadow-accent/60">
      <div className="md:container md:mx-auto mx-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Hamburger icon */}
          {isOpenDrawer ? (
            <div
              onClick={() => setIsOpenDrwer(!isOpenDrawer)}
              className="text-2xl md:hidden block"
            >
              <IoCloseOutline />
            </div>
          ) : (
            <div
              onClick={() => setIsOpenDrwer(!isOpenDrawer)}
              className="text-2xl md:hidden block"
            >
              <HiBars3BottomLeft />
            </div>
          )}
          {/* Logo */}
          <h2
            className={`text-5xl font-bold text-primary cursor-pointer active:scale-95 ${tangerine.className}`}
          >
            Book<span className="text-secondary">It</span>
          </h2>
        </div>
        <div className="flex items-center gap-10">
          {/* Nav Links for mid+large screen*/}
          <div className="hidden md:block">
            <ul className="flex gap-x-8">
              {navlinks.map((link) => (
                <li
                  className="font-medium text-primary hover:text-secondary"
                  key={link.path}
                >
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Login sign in */}
          <div className="flex items-center gap-4">
            {/* Links to login and sign-up */}
            <Link href={"/login"}>
              <button className="px-4 py-2 text-sm text-white bg-green-500 rounded hover:bg-green-600">
                Login
              </button>
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
          {/* Profile Image */}
          <div className="relative ">
            <Image
              className="rounded-full"
              alt="profile photo"
              src={"https://picsum.photos/200"}
              width={40}
              height={40}
            />
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={`absolute text-2xl -right-2 -bottom-2 cursor-pointer text-primary duration-200 ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            >
              <IoMdArrowDropdownCircle />
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`h-screen absolute md:hidden top-[4.5rem] bg-primary w-2/3 p-5 duration-200 ease-in-out transform ${
          isOpenDrawer ? "left-0" : "-left-64"
        }`}
      >
        <ul className="flex flex-col gap-y-4">
          {navlinks.map((link) => (
            <li
              className="font-medium text-accent hover:text-secondary"
              key={link.path}
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
