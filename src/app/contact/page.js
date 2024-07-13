import { Poppins } from "next/font/google";
import Image from "next/image";
import whatsapp from "../images/whatsapp.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import skype from "../images/skype.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <>
      <div
        className={`p-8 ${poppins.className} animate__animated animate__fadeIn`}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
          <li className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl ">Phone No</h3>
            <p className="text-gray-600">+91 90816 96490</p>
          </li>
          <li className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl ">Email</h3>
            <p className="text-gray-600 whitespace-nowrap overflow-hidden">
              dharmiktank84@gmail.com
            </p>
          </li>
          <li className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl ">Location</h3>
            <p className="text-gray-600">Surat, Gujarat</p>
          </li>
        </ul>
        <div>
          <h2 className="text-3xl  text-black underline underline-offset-8 mb-6 ">
            Social Media
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            <li className="p-4 bg-white shadow rounded-lg">
              <a
                href="https://www.linkedin.com/in/dharmik-tank-395591256/"
                target="_blank"
              >
                <Image alt="linkedin" src={linkedin} />
              </a>
            </li>
            <li className="p-4 bg-white shadow rounded-lg">
              <a href="https://github.com/dharmik-tank-84" target="_blank">
                <Image alt="github" src={github} />
              </a>
            </li>
            <li className="p-4 bg-white shadow rounded-lg">
              <a href="skype:live:.cid.4339708a02abfa5e" target="_blank">
                <Image alt="skype" src={skype} />
              </a>
            </li>
            <li className="p-4 bg-white shadow rounded-lg">
              <a href="https://wa.me/+919081696490" target="_blank">
                <Image alt="whatsapp" src={whatsapp} />
              </a>
            </li>
            <li className="p-4 bg-white shadow rounded-lg">
              <a href="https://x.com/tank_dharm13385" target="_blank">
                <Image alt="twitter" src={twitter} />
              </a>
            </li>
            <li className="p-4 bg-white shadow rounded-lg">
              <a
                href="https://www.instagram.com/_dharmik_tank/"
                target="_blank"
              >
                <Image alt="instagram" src={instagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
