import React from "react";
import "./Activities.css";

const Activities = () => {
  const iframeData = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7258298707652083712",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256573179056312320",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7249187797520011265",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7247123887442825218",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7235047590227021825",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7233512287431491585",
    "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7223763050707750913",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7214184382935269376",
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7205997616059322368",
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
};

export default Activities;
