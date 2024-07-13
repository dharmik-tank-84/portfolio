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
      title: "E-commerce Platform",
      description:
        "Developed a full-fledged e-commerce platform with features like user authentication, product management, and shopping cart.",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB"],
      image: "/images/ecommerce.png",
      link: "https://example.com/ecommerce",
    },
    {
      title: "Portfolio Website",
      description:
        "Created a personal portfolio website to showcase my projects and skills.",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      image: "/images/portfolio.png",
      link: "https://example.com/portfolio",
    },
    {
      title: "Blog Platform",
      description:
        "Built a blog platform where users can write, edit, and publish their articles.",
      technologies: ["Gatsby.js", "GraphQL", "Firebase"],
      image: "/images/blog.png",
      link: "https://example.com/blog",
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
