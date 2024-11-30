import { Poppins } from "next/font/google";
import Image from "next/image";
// import whatsapp from "../images/whatsapp.png";
// import linkedin from "../images/linkedin.png";
// import github from "../images/github.png";
// import skype from "../images/skype.png";
// import twitter from "../images/twitter.png";
// import instagram from "../images/instagram.png";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const contactInfo = [
  { title: "Phone No", value: "+91 90816 96490" },
  { title: "Email", value: "dharmiktank84@gmail.com" },
  { title: "Location", value: "Surat, Gujarat" },
];

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dharmik-tank-395591256/",
    image: "img/linkedin.png",
  },
  {
    name: "GitHub",
    link: "https://github.com/dharmik-tank-84",
    image: "img/github.png",
  },
  {
    name: "Skype",
    link: "skype:live:.cid.4339708a02abfa5e",
    image: "img/skype.png",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/+919081696490",
    image: "img/whatsapp.png",
  },
  {
    name: "Twitter",
    link: "https://x.com/tank_dharm13385",
    image: "img/twitter.png",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_dharmik_tank/",
    image: "img/instagram.png",
  },
];

const page = () => {
  return (
    <div
      className={`p-8 ${poppins.className} animate__animated animate__fadeIn`}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 gap-4">
        {contactInfo.map((info, index) => (
          <li key={index} className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl">{info.title}</h3>
            <p className="text-gray-600">{info.value}</p>
          </li>
        ))}
      </ul>

      <div>
        <h2 className="text-3xl text-black underline underline-offset-8 mb-6">
          Social Media
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {socialMediaLinks.map((media, index) => (
            <li key={index} className="p-4 bg-white shadow rounded-lg">
              <a href={media.link} target="_blank" rel="noopener noreferrer">
                <Image
                  alt={media.name}
                  src={media.image}
                  layout="responsive"
                  objectFit="contain"
                  width={100}
                  height={100}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
