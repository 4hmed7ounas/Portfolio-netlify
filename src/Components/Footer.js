import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div>
          <h6>
            Made by{" "}
            <Link
            target="_blank"
            to="https://www.linkedin.com/in/ahmed-younas-360b481a5"
          >
            Ahmed Younas
          </Link>
          </h6>
        </div>
        <div>
          <span>Copyright © {currentYear}</span>
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
            to="https://www.instagram.com/_u/4hmed7ounas/?utm_source=ig_embed&ig_rid=5062be3e-b373-4031-abdc-90b9fcd93874&ig_mid=DBE56578-126B-47C8-8FA5-0DA964B4C3FA"
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
