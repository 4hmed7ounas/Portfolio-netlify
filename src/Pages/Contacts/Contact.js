import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleMessageChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch("/api/submitForm", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, message }),
  //   });

  //   if (response.ok) {
  //     alert("Message submitted successfully!");
  //     setEmail("");
  //     setMessage("");
  //   } else {
  //     alert("Issues on backend. Please try again later.");
  //     setEmail("");
  //     setMessage("");
  //   }
  // };

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
          netlify
          className="d-flex"
          style={{ flexDirection: "column" }}
          // onSubmit={handleSubmit}
          // onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
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
            <i class="fa fa-github" aria-hidden="true"></i>
          </Link>
          <Link
            className="contact-icons"
            target="_blank"
            to="https://www.linkedin.com/in/ahmed-younas-360b481a5"
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </Link>
          <Link className="contact-icons" to="mailto:ayds13579@gmail.com">
            <i class="fa fa-google" aria-hidden="true"></i>
          </Link>
          <Link
            className="contact-icons"
            target="_blank"
            to="https://instagram.com/4hmed7ounas/"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </Link>
          <Link
            className="contact-icons"
            target="_blank"
            to="https://www.facebook.com/4hmed7ounass/"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </Link>
          <Link
            className="contact-icons"
            target="_blank"
            to="https://www.youtube.com/channel/UCFYpnx42kj-hp9Pn7fdg_6w"
          >
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
