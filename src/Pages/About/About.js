import React, { useState, useEffect } from "react";
import "./About.css";
import "./Skills.css";
import "./work.css";
import "./GitHub.css";
import ContributionGraph from "./GitHubContribution.js";
import { Link } from "react-router-dom";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAssemblyscript,
  SiAutocad,
  SiBootstrap,
  SiCisco,
  SiCplusplus,
  SiCsharp,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiDart, DiDotnet } from "react-icons/di";
import { GiCircuitry } from "react-icons/gi";
import { TiVendorMicrosoft } from "react-icons/ti";

const About = () => {
  const [index] = useState(0);
  const [x] = useState(0);
  const [name] = useState([
    "CS Junior",
    "Free-lancer",
    "Web Developer",
    "Flutter Developer",
    "Robotic Engineer",
    "Circuit Designer",
  ]);
  const [currentTitle, setCurrentTitle] = useState("");
  const skills = [
    { component: <SiCplusplus size={50} color="#F6EEE1" />, name: "C++" },
    { component: <FaPython size={50} color="#F6EEE1" />, name: "Python" },
    { component: <DiDart size={50} color="#F6EEE1" />, name: "Dart" },
    { component: <FaHtml5 size={50} color="#F6EEE1" />, name: "HTML5" },
    { component: <FaCss3 size={50} color="#F6EEE1" />, name: "CSS3" },
    { component: <FaJs size={50} color="#F6EEE1" />, name: "JavaScript" },
    { component: <SiFlutter size={50} color="#F6EEE1" />, name: "Flutter" },
    { component: <FaFigma size={50} color="#F6EEE1" />, name: "Figma" },
    { component: <FaReact size={50} color="#F6EEE1" />, name: "React" },
    { component: <RiNextjsFill size={50} color="#F6EEE1" />, name: "Next.js" },
    {
      component: <SiAssemblyscript size={50} color="#F6EEE1" />,
      name: "AssemblyScript",
    },
    { component: <SiMongodb size={50} color="#F6EEE1" />, name: "MongoDB" },
    { component: <FaNodeJs size={50} color="#F6EEE1" />, name: "Node.js" },
    {
      component: <SiTailwindcss size={50} color="#F6EEE1" />,
      name: "TailwindCSS",
    },
    { component: <SiBootstrap size={50} color="#F6EEE1" />, name: "Bootstrap" },
    { component: <FaGithub size={50} color="#F6EEE1" />, name: "GitHub" },
    { component: <DiDotnet size={50} color="#F6EEE1" />, name: ".NET" },
    { component: <SiCsharp size={50} color="#F6EEE1" />, name: "C#" },
    { component: <SiMysql size={50} color="#F6EEE1" />, name: "MySQL" },
    { component: <FaWordpress size={50} color="#F6EEE1" />, name: "WordPress" },
    {
      component: <GiCircuitry size={50} color="#F6EEE1" />,
      name: "Circuit Design",
    },
    { component: <SiAutocad size={50} color="#F6EEE1" />, name: "AutoCAD" },
    {
      component: <TiVendorMicrosoft size={50} color="#F6EEE1" />,
      name: "Microsoft",
    },
    { component: <FaLinux size={50} color="#F6EEE1" />, name: "Linux" },
    { component: <SiCisco size={50} color="#F6EEE1" />, name: "Cisco" },
  ];

  const workExperience = [
    {
      title: "Trainee Mobile App Developer",
      company: "Grootcore Systems",
      duration: "Jun 2024 - Present",
      image: "/assets/mobiletrainee.png",
    },
    {
      title: "Internee Front-end Developer",
      company: "EntraCloud",
      duration: "Jun 2024 - Aug 2024",
      image: "/assets/front-end.png",
    },
    {
      title: "Internee Graphic Designer",
      company: "EntraCloud",
      duration: "Jun 2024 - Aug 2024",
      image: "/assets/graphic-design.png",
    },
    {
      title: "Digital Circuit Designer",
      company: "Freelance | Self-Employed",
      duration: "Jan 2022 - Present",
      image: "/assets/dldfiverr.png",
    },
    {
      title: "Web Developer & Designer",
      company: "Freelance | Self-Employed",
      duration: "Jan 2023 - Present",
      image: "/assets/fiverr.png",
    },
    {
      title: "Web Dev intern at CodeClause",
      company: "Worked as a Web Development Intern",
      duration: "Aug 2023 - Sept 2023",
      image: "/assets/codeclause.png",
    },
    {
      title: "Web Dev intern at CodSoft",
      company: "Worked as a Web Development Intern",
      duration: "Aug 2023 - Sept 2023",
      image: "/assets/codsoft.jpg",
    },
  ];

  useEffect(() => {
    let intervalId;

    const typeWriter = () => {
      let currentIndex = index;
      let currentX = x;

      intervalId = setInterval(() => {
        const newTitle = name[currentX].slice(0, currentIndex);
        setCurrentTitle("I'm " + newTitle);

        if (currentIndex >= name[currentX].length) {
          currentIndex = 0;
          currentX = (currentX + 1) % name.length;
        } else {
          currentIndex++;
        }
      }, 250);

      return () => clearInterval(intervalId);
    };

    typeWriter();

    return () => clearInterval(intervalId);
  }, [index, x, name]);

  return (
    <div>
      <div className="d-flex resume-btn-style">
        <Link className="inner-Resume" to="/Resume">
          <h3>Resume!</h3>
        </Link>
      </div>
      <div id="About"></div>
      <div className="d-flex" style={{ backgroundColor: "#F6EEE1" }}>
        <div style={{ margin: "60px 0" }}>
          <div className="container" style={{ width: "100%" }}>
            <div className="about-content">
              <div>
                <h1 id="heading" className="heading">
                  {currentTitle}
                </h1>
              </div>
              <div>
                <h3 className="summary-heading">
                  <b>Based in Lahore, Pakistan</b>
                </h3>
              </div>
              <div className="summary-content">
                <span>
                  A third-year Computer Science student at{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.nu.edu.pk/"
                  >
                    FAST NUCES
                  </a>
                  , with a strong passion for web and mobile app development &
                  designing. With hands-on experience in HTML, CSS, JavaScript,
                  Flutter, Dart, C#, ASP.NET, MySQL, ReactJS, and NodeJS. I
                  craft creative web applications. From dynamic front-end
                  interfaces to powerful back-end systems, I bring ideas to
                  life. Additionally, I've dived into Python/C/C++ programming,
                  using these languages to build efficient and high-performance
                  codes. Beyond my web development skills, I have a keen
                  interest in exploring diverse areas of technology. I find joy
                  in delving into the worlds of robotics and circuit analysis,
                  and I've even taken on freelance projects in electrical
                  circuit and digital logic design on{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.fiverr.com/s/jjv68bG"
                  >
                    FIVERR
                  </a>
                  . Let's shape the future of the web, robotics, and the digital
                  world together.
                </span>
              </div>
              <div className="d-flex">
                <a
                  className="about-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/ahmed-younas-360b481a5"
                >
                  <i className="fa fa-search"></i> LinkedIn Profile Link
                </a>
              </div>
            </div>
            <div className="about-img" style={{ backgroundColor: "#161922" }}>
              <img
                className="img-2"
                style={{ width: "100%" }}
                src={"/assets/Ahmed-11.png"}
                alt=""
              />
              <div className="image-summary">
                <span>
                  <i className="fa fa-home"></i> Lahore, Pakistan <br />
                  <a href="tel:03125824019">
                    <i className="fa fa-phone"></i> +923125824019
                  </a>{" "}
                  <br />
                  <a href="mailto:ayds13579@gmail.com">
                    <i className="fa fa-envelope"></i> ayds13579@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Skills">
        <div className="skills">
          <div className="d-flex" style={{ color: "#FDB51B" }}>
            <h1>
              <b>Skills & Expertise</b>
            </h1>
          </div>
          <div className="skill-container">
            {skills.map((skill, index) => (
              <li>
                <div key={index} className="skill">
                  {skill.component}
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
      <div id="Work"></div>
      <div className="d-flex" style={{ backgroundColor: "#F6EEE1" }}>
        <div style={{ margin: "60px 0" }}>
          <div className="container" style={{ width: "100%" }}>
            <div className="work-content">
              <div className="d-flex" style={{ color: "#161922" }}>
                <h1>
                  <b>Work & Experience</b>
                </h1>
              </div>
              <div>
                {workExperience.map((work, index) => (
                  <div key={index} className="single-sec">
                    <div className="summary-details">
                      <h1 className="summary-heading">
                        <b>{work.title}</b>
                      </h1>
                      <div className="summary-content">
                        <span>{work.company}</span>
                        <br />
                        <span>{work.duration}</span>
                      </div>
                    </div>
                    <div className="summary-img">
                      <img src={work.image} alt={work.title} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="github">
        <div style={{ padding: "40px 0" }}>
          <h2>
            <b style={{ color: "#f6eee1" }}>GitHub Contributions</b>
          </h2>
          <ContributionGraph username={"4hmed7ounas"} />
        </div>
      </div>
    </div>
  );
};

export default About;
