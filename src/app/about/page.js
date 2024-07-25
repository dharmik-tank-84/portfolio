import { Poppins } from "next/font/google";
import "animate.css/animate.css";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row py-[35px] ${poppins.className}`}
      >
        <div className="lg:flex-1 w-full lg:w-auto ">
          <div className="px-8">
            <section className="mb-8 animate__animated animate__fadeInLeft">
              <h1 className="text-2xl text-black mb-4 underline underline-offset-8">
                About Me
              </h1>
              <p>
                Hi, I&apos;m Dharmik Tank, a dedicated React developer with 1
                year of experience building dynamic and responsive web
                applications. I can provide clean code and pixel perfect design.
              </p>
            </section>

            <section className=" mb-8 animate__animated animate__fadeInLeft">
              <h2 className="text-2xl text-black mb-4 underline underline-offset-8">
                Professional Experience
              </h2>
              <ul>
                <li className="mb-4">
                  <h3 className="text-xl underline underline-offset-2">
                    React Js Developer at Pixel Dart IT Solution
                  </h3>
                  <p>
                    Worked on a team to build a large-scale e-commerce platform.
                    Focused on creating reusable React components and
                    integrating RESTful APIs to enhance user experience.
                  </p>
                </li>
              </ul>
            </section>

            <section className=" mb-8 animate__animated animate__fadeInLeft">
              <h2 className="text-2xl text-black mb-4 underline underline-offset-8">
                Education
              </h2>
              <p>Bachelor of Commerce, VNSGU</p>
            </section>
          </div>
        </div>
        <div className="lg:flex-1 w-full lg:w-auto  ">
          <div className="px-8">
            <section className=" mb-8 animate__animated animate__fadeInRight">
              <h2 className="text-2xl text-black mb-4 underline underline-offset-8">
                Certifications
              </h2>
              <p>React Js on Great Learning</p>
            </section>

            <section className=" mb-8 animate__animated animate__fadeInRight">
              <h2 className="text-2xl text-black mb-4 underline underline-offset-8">
                Hobbies and Interests
              </h2>
              <p>When I&apos;m not working, I enjoy gaming.</p>
            </section>

            <section className="animate__animated animate__fadeInRight">
              <h2 className="text-2xl text-black mb-4 underline underline-offset-8">
                Continuous Learning
              </h2>
              <p>
                Passionate about staying current with the latest advancements in
                React and web development. Regularly participate in webinars,
                workshops, and online courses to enhance my skills and
                knowledge.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
