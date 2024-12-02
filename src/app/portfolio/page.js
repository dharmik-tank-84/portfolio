import { Poppins } from "next/font/google";
import "animate.css/animate.css";
import Image from "next/image";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  const projects = [
    {
      title: "Hari Har Enterprise",
      description: "our products service and works",
      technologies: ["React.js"],
      link: "https://hariharenterprise.com/",
      image: "img/hariharenterprise_image.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Created a personal portfolio website to showcase my projects and skills.",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://dharmik-tank.web.app/",
      image: "img/portfolio_image.png",
    },
    {
      title: "Expesify",
      description: "today money transfer note and firebase authentication",
      technologies: ["React.js ", "firebase", "react-router-dom", "Mui"],
      link: "https://expesify-f678f.web.app/",
      image: "img/expesify_image.png",
    },
    {
      title: "Groco-store",
      description: "vegetables and fruits store",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://dharmik-tank-84.github.io/Groco-store/",
      image: "img/Groco-store_image.png",
    },
    {
      title: "Mobile landing page",
      description: "New mobile intro page",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://dharmik-tank-84.github.io/landing-page/",
      image: "img/landing-page_image.png",
    },
    {
      title: "Coffee Shop",
      description: "Coffee Shop and Show Coffee items",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://dharmik-tank-84.github.io/Coffee-Shop/",
      image: "img/Coffee-Shop_image.png",
    },
    {
      title: "Apple Store",
      description: "Top 5 Apple Items and Add to Cart ",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://dharmik-tank-84.github.io/Apple-Store/",
      image: "img/Apple-Store_image.png",
    },
    {
      title: "Parallax Scrolling Effect",
      description: "web page scrolling effect",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://dharmik-tank-84.github.io/Parallax-Scrolling-Effect/",
      image: "img/Parallax-Scrolling-Effect_image.png",
    },
    {
      title: "Tomato Food Order",
      description: "multiple food items and order food",
      technologies: ["React js", "React-router-dom"],
      link: "https://tomato-food-order.web.app/",
      image: "img/tomato-food-order_image.png",
    },
  ];
  return (
    <>
      <div
        className={`p-8 ${poppins.className} animate__animated animate__zoomIn`}
      >
        <section className="mb-8">
          <h1 className="text-3xl mb-4 text-black underline underline-offset-8">
            My Portfolio
          </h1>
          <p className="text-lg mb-8">
            Here are some of the projects I have worked on:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  alt={project.title}
                  src={project.image}
                  layout="responsive"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <h2 className="text-2xl mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className=" bg-black text-gray-100 px-2 py-1 rounded-full text-sm "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-yellow-800 hover:underline"
                  target="_blank"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
