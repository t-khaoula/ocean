"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Navlink } from "@/constants/Navlink";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none"
        onClick={toggleMenu}
      >
        {!isOpen ? <Menu /> : <X />}
      </div>
      <figure
        className={`absolute rounded-md right-2 origin-top ${
          isOpen
            ? "top-20 scale-y-100 opacity-100 visible"
            : "scale-y-50 opacity-0 hidden"
        } w-auto transition-all bg-slate-800 z-50`}
      >
        <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
          {Navlink.map((link, index) => (
            <Link
              key={index}
              href={`#$(link)`}
              className="py-1 px-2 transition-all rounded-md hover:bg-slate-700 hover:text-sky-400"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </nav>
      </figure>
    </>
  );
};
