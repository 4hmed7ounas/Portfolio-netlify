import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { GraphQLClient, gql } from "graphql-request";
import "./GitHub.css";

const fetchContributions = async (username, token) => {
  const endpoint = "https://api.github.com/graphql";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    query ($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    username: username,
    from: new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    ).toISOString(),
    to: new Date().toISOString(),
  };

  const data = await graphQLClient.request(query, variables);
  const contributions =
    data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week) => week.contributionDays
    );
  return contributions;
};

const ContributionGraph = ({ username }) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = "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"; // Replace with your GitHub token
        const contributions = await fetchContributions(username, token);
        setContributions(contributions);
      } catch (err) {
        setError("Failed to fetch contributions");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <CalendarHeatmap
        startDate={
          new Date(new Date().setFullYear(new Date().getFullYear() - 1))
        }
        endDate={new Date()}
        values={contributions.map(({ date, contributionCount }) => ({
          date,
          count: contributionCount,
        }))}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
      />
    </div>
  );
};

export default ContributionGraph;

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
