import { Poppins } from "next/font/google";
import "animate.css/animate.css";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  const webSkills = [
    { name: "React.js", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Intermediate" },
    { name: "HTML5", level: "Advanced" },
    { name: "React Router Dom", level: "Intermediate" },
    { name: "Redux-Toolkit", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
  ];

  const uiDesignSkills = [
    { name: "CSS3", level: "Advanced" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "SCSS", level: "SCSS" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "jQuery", level: "Advanced" },
    { name: "Material UI", level: "Intermediate" },
  ];

  const tools = [
    { name: "Git & GitHub", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
  ];
  return (
    <>
      <div
        className={`p-8 ${poppins.className} animate__animated animate__fadeIn`}
      >
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-2xl text-black mb-6 underline underline-offset-8">
              Web Skills
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {webSkills.map((skill, index) => (
                <li key={index} className="p-4 bg-white shadow rounded-lg">
                  <h3 className="text-xl">{skill.name}</h3>
                  <p className="text-gray-600">{skill.level}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl text-black mb-6 underline underline-offset-8">
              UI Design
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {uiDesignSkills.map((skill, index) => (
                <li key={index} className="p-4 bg-white shadow rounded-lg">
                  <h3 className="text-xl ">{skill.name}</h3>
                  <p className="text-gray-600">{skill.level}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl text-black mb-6 underline underline-offset-8">
              Tools
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <li key={index} className="p-4 bg-white shadow rounded-lg">
                  <h3 className="text-xl ">{tool.name}</h3>
                  <p className="text-gray-600">{tool.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
