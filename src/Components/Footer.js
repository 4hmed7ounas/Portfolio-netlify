import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGoogle, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/4hmed7ounas",
      icon: <FaGithub />,
      ariaLabel: "GitHub",
      target: "_blank",
    },
    {
      href: "https://www.upwork.com/freelancers/~01d3d4b667f04e2f64?mp_source=share",
      icon: <FaUpwork />,
      ariaLabel: "Upwork",
      target: "_blank",
    },
    {
      href: "https://www.linkedin.com/in/ahmed-younas-360b481a5",
      icon: <FaLinkedin />,
      ariaLabel: "LinkedIn",
      target: "_blank",
    },
    {
      href: "mailto:ayds13579@gmail.com",
      icon: <FaGoogle />,
      ariaLabel: "Google",
    },
    {
      href: "https://www.instagram.com/_u/4hmed7ounas/",
      icon: <FaInstagram />,
      ariaLabel: "Instagram",
      target: "_blank",
    },
    {
      href: "https://www.facebook.com/4hmed7ounass/",
      icon: <FaFacebook />,
      ariaLabel: "Facebook",
      target: "_blank",
    },
    {
      href: "https://www.youtube.com/channel/UCFYpnx42kj-hp9Pn7fdg_6w",
      icon: <FaYoutube />,
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
              aria-label={link.ariaLabel}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
