import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div
    id="Contact"
    className="d-flex"
    style={{
      padding: "100px 0",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div style={{ color: "#FDB51B" }}>
      <h1>
        <b>Contact me</b>
      </h1>
    </div>
    <div className="form-bg">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="d-flex"
        style={{ flexDirection: "column" }}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label style={{ color: "#F6EEE1" }} htmlFor="name">
          Name:
        </label>
        <input
          className="input-style"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label style={{ color: "#F6EEE1" }} htmlFor="email">
          Email:
        </label>
        <input
          className="input-style"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label style={{ color: "#F6EEE1" }} htmlFor="message">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="sub-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
    <div className="else">
      <h1>
        <b>OR</b>
      </h1>
      <span>
        Stay connected with me on social media for the latest updates and
        engaging conversations! Let's explore together. Find me here:
      </span>
      <div>
        <Link
          className="contact-icons"
          target="_blank"
          to="https://github.com/4hmed7ounas"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </Link>
        <Link
          className="contact-icons"
          target="_blank"
          to="https://www.linkedin.com/in/ahmed-younas-360b481a5"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </Link>
        <Link className="contact-icons" to="mailto:ayds13579@gmail.com">
          <i className="fa fa-google" aria-hidden="true"></i>
        </Link>
        <Link
          className="contact-icons"
          target="_blank"
          to="https://www.instagram.com/_u/4hmed7ounas/?utm_source=ig_embed&ig_rid=5062be3e-b373-4031-abdc-90b9fcd93874&ig_mid=DBE56578-126B-47C8-8FA5-0DA964B4C3FA"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Link>
        <Link
          className="contact-icons"
          target="_blank"
          to="https://www.facebook.com/4hmed7ounass/"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>
        <Link
          className="contact-icons"
          target="_blank"
          to="https://www.youtube.com/channel/UCFYpnx42kj-hp9Pn7fdg_6w"
        >
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Contact