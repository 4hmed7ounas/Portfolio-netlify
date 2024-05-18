import "./Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <div id="Portfolio">
        <div className="container-1">
          <h1 className="summary-heading">
            <b>
              Hey all! 👋🏻 <br /> I'm Ahmed Younas
            </b>
          </h1>
          <div className="summary-content">
            <span>
              A motivated and determined individual with a strong passion for{" "}
              <b color="#fdb51b">Web Development</b>, <b>Circuit Design</b>, and{" "}
              <b>Artificial Intelligence</b>. Committed to using AI/ML to tackle
              real-world challenges and make meaningful contributions to
              society.
            </span>
          </div>
          <div
            className="portfolio port-design d-flex"
            style={{ flexDirection: "column", paddingTop: "10px" }}
          >
            <span>ROBOTISIST</span>
            <span>DEVELOPER</span>
            <span>DESIGNER</span>
            <span>Free-Lancer</span>
          </div>
          <div>
            <Link className="read-more" to="/About">
              <i class="fa fa-external-link" aria-hidden="true"></i>Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
