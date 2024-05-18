import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <div>
        <div style={{ margin: "clamp(0px, 49vw, 75px) 5%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
            }}
          >
            <a
              className="btn"
              download="Ahmed-Younas"
              href="/assest/Ahmed-Younas-Resume.pdf"
            >
              <i class="fa fa-download" aria-hidden="true"></i>Download Resume
            </a>
          </div>
          <img
            style={{ width: "100%" }}
            src="/assest/Ahmed-Younas-Resume.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
