import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/4hmed7ounas",
      iconClass: "fa fa-github",
      ariaLabel: "GitHub",
      target: "_blank",
    },
    {
      href: "https://www.linkedin.com/in/ahmed-younas-360b481a5",
      iconClass: "fa fa-linkedin",
      ariaLabel: "LinkedIn",
      target: "_blank",
    },
    {
      href: "mailto:ayds13579@gmail.com",
      iconClass: "fa fa-google",
      ariaLabel: "Google",
    },
    {
      href: "https://www.instagram.com/_u/4hmed7ounas/?utm_source=ig_embed&ig_rid=5062be3e-b373-4031-abdc-90b9fcd93874&ig_mid=DBE56578-126B-47C8-8FA5-0DA964B4C3FA",
      iconClass: "fa fa-instagram",
      ariaLabel: "Instagram",
      target: "_blank",
    },
    {
      href: "https://www.facebook.com/4hmed7ounass/",
      iconClass: "fa fa-facebook",
      ariaLabel: "Facebook",
      target: "_blank",
    },
    {
      href: "https://www.youtube.com/channel/UCFYpnx42kj-hp9Pn7fdg_6w",
      iconClass: "fa fa-youtube",
      ariaLabel: "YouTube",
      target: "_blank",
    },
  ];

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
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              className="footer-icons"
              target={link.target}
              to={link.href}
            >
              <i
                className={link.iconClass}
                aria-hidden="true"
                aria-label={link.ariaLabel}
              ></i>
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
