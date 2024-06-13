import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";

function Github() {
  return (
    <div className="github-calendar">
      <div>
        <h1 style={{ paddingBottom: "20px" }}>
          Days I <strong>Code</strong>
        </h1>
      </div>
      <div>
        <GitHubCalendar
          username="4hmed7ounas"
          blockSize={16}
          blockMargin={10}
          color="#f6eee1;"
          fontSize={16}
        />
      </div>
    </div>
  );
}

export default Github;
