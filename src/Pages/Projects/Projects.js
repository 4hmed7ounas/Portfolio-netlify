import React from "react";
import "./Project.css";

const Projects = () => {
  return (
    <div>
      <div style={{ paddingBottom: "30px" }}>
        <div id="Projects">
          <div
            className="d-flex"
            style={{
              backgroundColor: "#161922",
              color: "#fdb51b",
              padding: "70px 0px 10px 0px",
            }}
          >
            <h1>
              <b>Projects</b>
            </h1>
          </div>
          <div className="project-container">
            <div class="card-container card-con-1 side-1">
              <div class="card">
                <div class="front-content">
                  <img
                    style={{ objectFit: "fill" }}
                    src="/assets/chatbot.PNG"
                    alt=""
                  />
                </div>
                <div class="content">
                  <p class="heading">GiGo. Chat - AI Chatbot</p>
                  <p>
                    AN AI-Chatbot, developed using Next.js and integrated with
                    the powerful Gemini API. Users can easily train the chatbot
                    on their own datasets, allowing it to cater specifically to
                    the unique needs of individual websites.
                  </p>
                  <a
                    target="_blank"
                    href="https://gi-go.vercel.app/"
                    rel="noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="card-container card-con-2">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/newsapp.PNG" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">News Application - API</p>
                    <p>
                      An Online News App which provides the current online news
                      about the world affairs using ReactJs, JS and Bootstrap.
                      It is a real-time news app. (Special: Dark Mode)
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-container card-con-3">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/pharmacy.PNG" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Pharmacy Management System</p>
                    <p>
                      A Pharmacy Management System that aimed to optimize
                      various aspects of pharmacy operations, including
                      inventory management, prescription tracking, and employees
                      and customer information using .NET Frameworks, SQL and
                      C#.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div>
              <div class="card-container card-con-2">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/amazonclone.PNG" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Amazon Clone Site</p>
                    <p>
                      Developed a fully responsive frontend clone of Amazon
                      using simple reactjs, Bootstrap and js with all animation
                      and gesture.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-container card-con-3">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/topunisite.PNG" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Top University Clone Site</p>
                    <p>
                      Developed a fully responsive frontend clone of Top
                      University using simple nextjs, tailwind css and js.
                    </p>
                    <a
                    target="_blank"
                    href="https://4hmed7ounas.github.io/TopUni/"
                    rel="noreferrer"
                  >
                    Visit Page
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-container card-con-1">
              <div class="card">
                <div class="front-content">
                  <img src="/assets/hblclonesite.png" alt="" />
                </div>
                <div class="content">
                  <p class="heading">HBL Clone Site</p>
                  <p>
                    Developed a fully responsive frontend clone of hbl.com using
                    simple reactjs, tailwind css and js with all animation and
                    gesture (Dark Mode).
                  </p>
                  <a
                    target="_blank"
                    href="https://4hmed7ounas.github.io/HBLClone/"
                    rel="noreferrer"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div class="card-container card-con-1 side-1">
              <div class="card">
                <div class="front-content">
                  <img src="/assets/calculator.PNG" alt="" />
                </div>
                <div class="content">
                  <p class="heading">Calculator App</p>
                  <p>
                    An Online Calculator App that offers features such as
                    addition, subtraction, division, manipulation and squaring
                    using ReactJs, JS and Css.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="card-container card-con-2">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/favpanda.PNG" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">
                      Fav Panda - Food Delivering Application
                    </p>
                    <p>
                      A Data Structures based project which provides a seamless
                      and efficient platform for users to order, and receive
                      their favorite food items from a wide range of restaurants
                      using Graph and File handling.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-container card-con-3">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/music.jpg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Music & Movie Library</p>
                    <p>
                      An OOP project that enables users to design, implement,
                      and interact with a robust software solution for
                      organizing, cataloging, and managing a collection of music
                      and movie titles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div>
              <div class="card-container card-con-2">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/lightseeking.jpg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Light Seeking Robot</p>
                    <p>
                      Circuit Analysis based Light Seeking Robot, moves when
                      sense light using LDR (light sensor). It moves right and
                      left according to the direction and capacity of light.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-container card-con-3">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/linerobot.jpg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">
                      Line Following & Hurdle Detecting Robot
                    </p>
                    <p>
                      The robot crafted using LEGO components, Mindstroms
                      programming and advanced programming techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-container card-con-1">
              <div class="card">
                <div class="front-content">
                  <img src="/assets/MCU.PNG" alt="" />
                </div>
                <div class="content">
                  <p class="heading">6-bit Mini-Computational Unit</p>
                  <p>
                    Digital logic design based project based on registers,
                    multiplexers, decoders and other logic gates performing
                    arithmetic, shift and transfer of bits operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div class="card-container card-con-1 side-1">
              <div class="card">
                <div class="front-content">
                  <img src="/assets/beautySaloon.png" alt="" />
                </div>
                <div class="content">
                  <p class="heading">6-bit Beauty Saloon</p>
                  <p>
                    A 6-bit logical design of a beauty saloon where we select a
                    service and pay for it if there is amount extra from what
                    required it returns the remaining amount else it asks for
                    more and when satisfied store it in a bank by adding it to
                    previous amount.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="card-container card-con-2">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/2bitcomp.jpg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">2-bit binary Comparator</p>
                    <p>
                      Designed (using Logic Works) and implemented (on a
                      breadboard) a 2-bit comparator using seven-segment LEDs.
                      This device can also be scaled up to compare 3-bit, 4-bit,
                      or even more significant numbers.
                    </p>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/posts/ahmed-younas_digitalelectronics-circuitdesign-innovation-activity-7200608080856788992-_jZu?utm_source=share&utm_medium=member_desktop"
                      rel="noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-container card-con-3">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/universaljoint.jpeg" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">3D Universal Joint</p>
                    <p>
                      3D Model of a Universal Joint created using SolidWorks and
                      AutoCad as a university project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-container">
            <div>
              <div class="card-container card-con-2">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/wordInfo.PNG" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">
                      Word Info - Text Manipulation Application
                    </p>
                    <p>
                      A word manipulation website that offers features such as
                      converting text between uppercase and lowercase, providing
                      word and character counts, and estimating the time to read
                      a given paragraph in real-time. (Special: Dark Mode)
                    </p>
                    <a
                      target="_blank"
                      href="https://4hmed7ounas.github.io/WordInfo/"
                      rel="noreferrer"
                    >
                      Visit Page
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-container card-con-3">
                <div class="card">
                  <div class="front-content">
                    <img src="/assets/bee maze.PNG" alt="" />
                  </div>
                  <div class="content">
                    <p class="heading">Bee in the Maze</p>
                    <p>
                      An Assembly Language based project in which a bee move
                      from one starting point to end point from a maze by right,
                      left, up and down keys from keyboard using subroutines,
                      keyboard interrupts, video memory and hardware interrupts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-container card-con-1">
              <div class="card">
                <div class="front-content">
                  <img src="/assets/casino.jpg" alt="" />
                </div>
                <div class="content">
                  <p class="heading">Casino Royal - Number Guessing Game</p>
                  <p>
                    A Programming Fundamentals based project in which a player
                    is tasked with guessing a randomly selected number within a
                    specified range and if guess the right number got 10x of his
                    betting money else he lose the betting price. At the end
                    money transferred to his/her account cutting 5% tax.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
