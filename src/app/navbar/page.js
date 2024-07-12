"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/app/page.module.css";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function page() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center justify-between py-4 px-4">
        <p className={`text-2xl ${roboto.className} cursor-pointer`}>
          Dharmik Tank
        </p>
        <ul className="flex gap-3">
          <li>
            <Link
              className={`link ${pathname === "/" ? `${style.active}` : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/about" ? `${style.active}` : ""
              }`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/skill" ? `${style.active}` : ""
              }`}
              href="/skill"
            >
              Skill
            </Link>
          </li>
          <li>
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
