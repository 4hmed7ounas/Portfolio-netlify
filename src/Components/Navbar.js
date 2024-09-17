// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {

  return (
    <nav
      id="nav"
      className="navbar navbar-expand-lg navbar-dark content"
      style={{
        backgroundColor: "rgba(22, 25, 34, 0.8)",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        transition: "0.3s linear",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand Active" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                <i class="fa fa-home" aria-hidden="true"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                <i class="fa fa-user-o" aria-hidden="true"></i>About me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Resume">
                <i class="fa fa-address-card" aria-hidden="true"></i>Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">
                <i class="fa fa-laptop" aria-hidden="true"></i>Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Activities">
                <i class="fa fa-newspaper-o" aria-hidden="true"></i>Activities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Extra">
                <i class="fa fa-archive" aria-hidden="true"></i>Extra
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>Contact me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                target="_blank"
                to="https://www.educative.io/profile/view/6719310291664896"
              >
                <i class="fa fa-pencil" aria-hidden="true"></i>Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
