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