import React, { useState, useEffect } from "react";
import "./About.css";
import "./Skills.css";
import "./work.css";
import "./GitHub.css";
import ContributionGraph from "./GitHubContribution.js";
import { Link } from "react-router-dom";

export default function About() {
  const [index] = useState(0);
  const [x] = useState(0);
  const [name] = useState([
    "CS Junior",
    "Free-lancer",
    "Web Developer",
    "Robotic Engineer",
    "Circuit Designer",
  ]);
  const [currentTitle, setCurrentTitle] = useState("");

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
                  , with a strong passion for web development. With hands-on
                  experience in HTML, CSS, JavaScript, C#, ASP.NET, MySQL,
                  ReactJS, and NodeJS. I craft creative web applications. From
                  dynamic front-end interfaces to powerful back-end systems, I
                  bring ideas to life. Additionally, I've dived into
                  Python/C/C++ programming, using these languages to build
                  efficient and high-performance codes. Beyond my web
                  development skills, I have a keen interest in exploring
                  diverse areas of technology. I find joy in delving into the
                  worlds of robotics and circuit analysis, and I've even taken
                  on freelance projects in electrical circuit and digital logic
                  design on{" "}
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
                src={"/assest/Ahmed-11.png"}
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
            <li>
              <img src="/assest/c++.png" alt="C++" />
            </li>
            <li>
              <img src="/assest/python.png" alt="Python" />
            </li>
            <li>
              <img src="/assest/html.png" alt="HTML" />
            </li>
            <li>
              <img src="/assest/css.png" alt="CSS" />
            </li>
            <li>
              <img src="/assest/js.png" alt="JavaScript" />
            </li>
            <li>
              <img src="/assest/figma.png" alt="Figma" />
            </li>
            <li>
              <img src="/assest/react.png" alt="React" />
            </li>
            <li>
              <img src="/assest/mongo.png" alt="MongoDB" />
            </li>
            <li>
              <img src="/assest/node.png" alt="Node.js" />
            </li>
            <li>
              <img src="/assest/bootstrap.png" alt="Bootstrap" />
            </li>
            <li>
              <img src="/assest/asp.png" alt="ASP.NET" />
            </li>
            <li>
              <img src="/assest/csharp.png" alt="C#" />
            </li>
            <li>
              <img src="/assest/sql.png" alt="SQL" />
            </li>
            <li>
              <img src="/assest/circuits.png" alt="Circuits" />
            </li>
            <li>
              <img src="/assest/solidworks.png" alt="SolidWorks" />
            </li>
            <li>
              <img src="/assest/autocad.png" alt="AutoCAD" />
            </li>
            <li>
              <img src="/assest/ms.png" alt="MS Office" />
            </li>
            <li>
              <img src="/assest/linux.png" alt="Linux" />
            </li>
            <li>
              <img src="/assest/vscode.png" alt="Visual Studio Code" />
            </li>
            <li>
              <img src="/assest/cisco.png" alt="Cisco" />
            </li>
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
                <div className="single-sec">
                  <div className="summary-details">
                    <h1 className="summary-heading">
                      <b>Web Developer & Designer</b>
                    </h1>
                    <div className="summary-content">
                      <span>Freelance | Self-Employed</span>
                      <br />
                      <span>2023 - Present</span>
                    </div>
                  </div>
                  <div className="summary-img">
                    <img src="/assest/fiverr.png" alt="" />
                  </div>
                </div>
                <div className="single-sec">
                  <div className="summary-details">
                    <h1 className="summary-heading">
                      <b>Digital Circuit Designer</b>
                    </h1>
                    <div className="summary-content">
                      <span>Freelance | Self-Employed</span>
                      <br />
                      <span>2022 - Present</span>
                    </div>
                  </div>
                  <div className="summary-img">
                    <img src="/assest/dldfiverr.png" alt="" />
                  </div>
                </div>
                <div className="single-sec">
                  <div className="summary-details">
                    <h1 className="summary-heading">
                      <b>Web Dev intern at CodeClause</b>
                    </h1>
                    <div className="summary-content">
                      <span>Worked as a Web Development Intern</span>
                      <br />
                      <span>Aug 2023 - Sept 2023</span>
                    </div>
                  </div>
                  <div className="summary-img">
                    <img src="/assest/codeclause.png" alt="" />
                  </div>
                </div>
                <div className="single-sec">
                  <div className="summary-details">
                    <h1 className="summary-heading">
                      <b>Web Dev intern at CodSoft</b>
                    </h1>
                    <div className="summary-content">
                      <span>Worked as a Web Development Intern</span>
                      <br />
                      <span>Aug 2023 - Sept 2023</span>
                    </div>
                  </div>
                  <div className="summary-img">
                    <img src="/assest/codsoft.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="github">
        <div style={{ padding: "40px 0" }}>
          <h2>
            <b>GitHub Contributions</b>
          </h2>
          <ContributionGraph username={"4hmed7ounas"} />
        </div>
      </div>
    </div>
  );
}
