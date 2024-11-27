"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { tangerine } from "@/components/layouts/Banner/Banner";

const Navbar = () => {
  const [isOpenDrawer, setIsOpenDrwer] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
      title: "Hotels",
      path: "/hotels",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <div className="w-full fixed z-10 py-4 bg-accent select-none shadow-accent/60">
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
          {/* Profile Image */}
          <div className="relative">
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
    </div>
  );
};

export default Navbar;
