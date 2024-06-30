import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";

function Github() {
  return (
    <div className="github">
      <div className="github-calendar-container">
        <h1 className="github-title">
          Days I <strong>Code</strong>
        </h1>
        <GitHubCalendar
          username="4hmed7ounas"
          blockSize={14}
          blockMargin={9}
          color="#f6eee1"
          fontSize={14}
        />
      </div>
    </div>
  );
}

export default Github;
