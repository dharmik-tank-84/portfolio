import Image from "next/image";
import logo from "./images/dharmik_image.png";
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
      <div
        className={`flex flex-col-reverse md:flex-row overflow-hidden px-8 py-4`}
      >
        <div
          className={`flex-1  flex animate__animated justify-center animate__fadeInLeft flex-col items-center md:items-start ${poppins.className}`}
        >
          <p className="text-4xl md:text-5xl">Dharmik Tank</p>
          <p className="text-lg md:text-xl">I&apos;m Web Developer</p>
        </div>
        <div className="flex-1  flex animate__animated animate__fadeInRight items-center justify-center py-4">
          <Image
            alt="dharmik img"
            src={logo}
            className="pt-2 border-[10px] border-black rounded-full"
            width={300}
            priority={true}
          />
        </div>
      </div>
    </>
  );
}
