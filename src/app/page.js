import Image from "next/image";
import logo from "./images/dharmik_image.png";
import style from "@/app/page.module.css";
import { Poppins } from "next/font/google";
import "animate.css/animate.css";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className={`flex overflow-hidden ${style.home_page_height}`}>
        <div
          className={`flex-1 pl-8 flex animate__animated justify-center animate__fadeInLeft flex-col ${poppins.className} `}
        >
          <p className="text-5xl">Dharmik Tank</p>
          <p>I&apos;m Web Developer</p>
        </div>
        <div className="flex-1 flex animate__animated animate__fadeInRight items-center justify-center py-4 ">
          <Image
            alt="dharmik img"
            src={logo}
            className="border-[10px] shadow-2xl shadow-slate-600 pt-2 border-black rounded-full"
            width={300}
            priority={true}
          />
        </div>
      </div>
    </>
  );
}
