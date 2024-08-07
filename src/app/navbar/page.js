"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import style from "@/app/page.module.css";
import { Roboto } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between h-[80px] py-4 px-8">
        <p className={`text-4xl ${roboto.className} cursor-pointer`}>
          Dharmik Tank
        </p>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`${roboto.className} ${
            menuOpen ? "flex flex-col" : "invisible md:visible md:flex"
          } md:flex-row gap-5 absolute md:relative top-[100px] md:top-auto right-0 w-full md:w-auto bg-gray-100 md:bg-transparent shadow-md md:shadow-none pb-4 md:pb-0 pl-8 md:pl-0 z-50`}
        >
          <li className="text-xl">
            <Link
              className={`link ${pathname === "/" ? `${style.active}` : ""}`}
              href="/"
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
