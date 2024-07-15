"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import style from "@/app/page.module.css";
import { Oswald } from "next/font/google";
import { Roboto } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";

const oswald = Oswald({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center justify-between h-[80px] py-4 px-8">
        <p className={`text-4xl ${oswald.className} cursor-pointer`}>
          Dharmik Tank
        </p>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`flex-col md:flex-row gap-5 absolute shadow-md md:shadow-none pb-4 md:pb-0 top-[100px] z-50 pl-8 md:pl-0 md:top-auto right-0 w-full md:w-auto bg-gray-100 md:relative md:flex  ${
            roboto.className
          } ${menuOpen ? "flex" : "hidden"}`}
        >
          <li className="text-xl">
            <Link
              className={`link ${pathname === "/" ? `${style.active}` : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="text-xl">
            <Link
              className={`link ${
                pathname === "/about" ? `${style.active}` : ""
              }`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className="text-xl">
            <Link
              className={`link ${
                pathname === "/skill" ? `${style.active}` : ""
              }`}
              href="/skill"
            >
              Skill
            </Link>
          </li>
          <li className="text-xl">
            <Link
              className={`link ${
                pathname === "/service" ? `${style.active}` : ""
              }`}
              href="/service"
            >
              Service
            </Link>
          </li>
          <li className="text-xl">
            <Link
              className={`link ${
                pathname === "/portfolio" ? `${style.active}` : ""
              }`}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="text-xl">
            <Link
              className={`link ${
                pathname === "/contact" ? `${style.active}` : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
