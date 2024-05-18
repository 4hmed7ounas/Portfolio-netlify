import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div>
      <footer>
        <div>
          <h6>
            Made by Ahmed Younas with <b>❤</b>
          </h6>
        </div>
        <div>
          <span>Copyright © 2024</span>
        </div>
        <div>
          <Link
            className="footer-icons"
            target="_blank"
            to="https://github.com/4hmed7ounas"
          >
            <i class="fa fa-github" aria-hidden="true"></i>
          </Link>
          <Link
            className="footer-icons"
            target="_blank"
            to="https://www.linkedin.com/in/ahmed-younas-360b481a5"
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
          <Link className="footer-icons" to="mailto:ayds13579@gmail.com">
            <i class="fa fa-google" aria-hidden="true"></i>
          </Link>
          <Link
            className="footer-icons"
            target="_blank"
            to="https://instagram.com/4hmed7ounas/"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </Link>
          <Link
            className="footer-icons"
            target="_blank"
            to="https://www.facebook.com/4hmed7ounass/"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link
            className="footer-icons"
            target="_blank"
            to="https://www.youtube.com/channel/UCFYpnx42kj-hp9Pn7fdg_6w"
          >
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </Link>
        </div>
      </footer>
    </div>
  );
}
