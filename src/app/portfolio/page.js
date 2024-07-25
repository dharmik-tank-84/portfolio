import { Poppins } from "next/font/google";
import "animate.css/animate.css";

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
    },
    {
      title: "Portfolio Website",
      description:
        "Created a personal portfolio website to showcase my projects and skills.",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://www.google.com",
    },
    {
      title: "Expesify",
      description: "today money transfer note and firebase authentication",
      technologies: ["React.js ", "firebase", "react-router-dom", "Mui"],
      link: "https://expesify-f678f.web.app/",
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
                <h2 className="text-2xl  mb-2">{project.title}</h2>
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
