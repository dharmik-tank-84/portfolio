"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/app/page.module.css";
import { Oswald } from "next/font/google";
import { Roboto } from "next/font/google";

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

export default function page() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center justify-between h-[80px] py-4 px-8">
        <p className={`text-4xl ${oswald.className} cursor-pointer`}>
          Dharmik Tank
        </p>
        <ul className={`flex gap-5 ${roboto.className}`}>
          <li className="text-xl">
            <Link
              className={` link ${pathname === "/" ? `${style.active}` : ""}`}
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
