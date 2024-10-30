"use client";
import Image from "next/image";
import logo from "./images/dharmik_image.png";
import { Poppins } from "next/font/google";
import "animate.css/animate.css";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // const toRotate = ["Web Developer", "Full Stack Developer", "Web Designer"];
  const toRotate = ["Web Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <>
      <div
        className={`flex z-50 flex-col-reverse md:flex-row overflow-hidden px-8 py-4`}
      >
        <div
          className={`flex-1  flex animate__animated justify-center animate__fadeInLeft flex-col items-center md:items-start ${poppins.className}`}
        >
          <p className="text-4xl md:text-5xl">Dharmik Tank</p>
          <p className="text-lg md:text-xl">I&apos;m {text}</p>
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
