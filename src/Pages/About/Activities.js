import React from "react";
import "./Activities.css"

export default function Activities() {
  const iframeData = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7201280687264452610",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7200608074796089344",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198500184341770240",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7172120637434413056",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7169050453203267584",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7161081780781883394",
  ];

  return (
    <div id="Activities">
      <div
        className="d-flex"
        style={{
          padding: "65px 0",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#FDB51B" }}>
          <h1>
            <b>Activities</b>
          </h1>
        </div>
        <div className="activity-bg">
          {iframeData.map((src, index) => (
            <iframe
              key={index}
              src={src}
              allowFullScreen
              title="Embedded post"
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
}
