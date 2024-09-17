import React from "react";
import "./Extra.css";

const Extra = () => {
  const certificates = [
    {
      title: "Participation in Web Devathon",
      imageSrc: "/assets/devathon24.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Web Dev Virtual Internship",
      imageSrc: "/assets/codsoft.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Participation in Web Marathon",
      imageSrc: "/assets/NasCon'24.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Basic of HTML & CSS",
      imageSrc: "/assets/softec.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Build a website with WordPress",
      imageSrc: "/assets/wordpresscert.png",
      iconClass: "fa fa-code",
    },
    {
      title: "Basic of HTML & CSS",
      imageSrc: "/assets/htmlcss.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Basic of JavaScript Programming",
      imageSrc: "/assets/js.jpg",
      iconClass: "fa fa-code",
    },
  ];

  const honorsAwards = [
    {
      title: "Academic Brilliance Fall 2021",
      imageSrc: "/assets/academicfall211.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Academic Brilliance Spring 2022",
      imageSrc: "/assets/academicspring221.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Academic Brilliance Fall 2022",
      imageSrc: "/assets/academicfall221.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Dean's list Fall 2021",
      imageSrc: "/assets/fall21.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Dean list Spring 2022",
      imageSrc: "/assets/spring22.jpg",
      iconClass: "fa fa-code",
    },
    {
      title: "Dean list Fall 2022",
      imageSrc: "/assets/fall22.jpg",
      iconClass: "fa fa-code",
    },
  ];

  return (
    <div>
      <div id="Certificates">
        <div>
          <div
            className="d-flex"
            style={{
              backgroundColor: "#161922",
              color: "#fdb51b",
              padding: "70px 0px 10px 0px",
            }}
          >
            <h1>
              <b>Certificates</b>
            </h1>
          </div>
          <div style={{ backgroundColor: "#F6EEE1" }}>
            <div className="container-cert">
              {certificates.map((cert, index) => (
                <div className="card-cert" key={index}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <div className="circles">
                      <div className="c"></div>
                      <div className="c"></div>
                      <div className="c"></div>
                    </div>
                    <i
                      className={cert.iconClass}
                      style={{ color: "#fff" }}
                      aria-hidden="true"
                    ></i>
                    <div className="search-bar">{cert.title}</div>
                  </div>
                  <div>
                    <img src={cert.imageSrc} alt={cert.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="HonorsAwards">
        <div style={{ padding: "50px 0 50px 0" }}>
          <div className="d-flex" style={{ color: "#cc9215" }}>
            <h1>
              <b>Honors & Awards</b>
            </h1>
          </div>
          <div className="container-hon">
            {honorsAwards.map((honor, index) => (
              <div className="card-hon" key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div className="circles">
                    <div className="c"></div>
                    <div className="c"></div>
                    <div className="c"></div>
                  </div>
                  <i
                    className={honor.iconClass}
                    style={{ color: "black" }}
                    aria-hidden="true"
                  ></i>
                  <div className="search-bar">{honor.title}</div>
                </div>
                <div>
                  <img src={honor.imageSrc} alt={honor.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
