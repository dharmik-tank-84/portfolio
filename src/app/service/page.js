import { Poppins } from "next/font/google";
import "animate.css/animate.css";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic web applications using React.js and other modern technologies.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing user-friendly interfaces with a focus on user experience and accessibility.",
      icon: "🎨",
    },
    {
      title: "Consulting",
      description:
        "Providing expert advice on React.js projects, code reviews, and best practices.",
      icon: "💼",
    },
  ];

  return (
    <>
      <div
        className={`p-8  ${poppins.className} animate__animated animate__fadeIn`}
      >
        <section className="mb-8">
          <h1 className="text-3xl mb-4 text-black underline underline-offset-8">
            My Services
          </h1>
          <p className="text-lg mb-8">
            As a dedicated React.js developer, I offer a range of services to
            help you build and optimize your web applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl  mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
