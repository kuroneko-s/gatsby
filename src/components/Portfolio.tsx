import React from "react";
import styled from "styled-components";
import { GithubContributions } from "react-github-graph";
import { Link } from "gatsby";

const Container = styled.section`
  height: 100vh;
  background-color: rgba(206, 214, 224, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: rgba(241, 242, 246, 1);
  padding: 20px;
  border-radius: 8px;

  h2 {
    margin-bottom: 12px !important;
  }
`;

const Palette = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: end;
`;

const LinkWrapper = styled.div`
  text-align: end;
  margin-top: 11px;
`;

export default function Portfolio() {
  return (
    <Container>
      <Wrapper>
        <GithubContributions username="kuroneko-s" />
        <Palette>
          <span style={{ marginRight: "2px" }}>Less</span>
          <svg
            width="10"
            height="10"
            className="d-inline-block"
            style={{ marginRight: "2px" }}
          >
            <rect
              width="10"
              height="10"
              className="ContributionCalendar-day"
              data-level="0"
              rx="2"
              ry="2"
              style={{ fill: "#161b22" }}
            ></rect>
          </svg>
          <svg
            width="10"
            height="10"
            className="d-inline-block"
            style={{ marginRight: "2px" }}
          >
            <rect
              width="10"
              height="10"
              className="ContributionCalendar-day"
              data-level="1"
              rx="2"
              ry="2"
              style={{ fill: "#0e4429" }}
            ></rect>
          </svg>
          <svg
            width="10"
            height="10"
            className="d-inline-block"
            style={{ marginRight: "2px" }}
          >
            <rect
              width="10"
              height="10"
              className="ContributionCalendar-day"
              data-level="2"
              rx="2"
              ry="2"
              style={{ fill: "#006d32" }}
            ></rect>
          </svg>
          <svg
            width="10"
            height="10"
            className="d-inline-block"
            style={{ marginRight: "2px" }}
          >
            <rect
              width="10"
              height="10"
              className="ContributionCalendar-day"
              data-level="3"
              rx="2"
              ry="2"
              style={{ fill: "#26a641" }}
            ></rect>
          </svg>
          <svg
            width="10"
            height="10"
            className="d-inline-block"
            style={{ marginRight: "2px" }}
          >
            <rect
              width="10"
              height="10"
              className="ContributionCalendar-day"
              data-level="4"
              rx="2"
              ry="2"
              style={{ fill: "#39d353" }}
            ></rect>
          </svg>
          <span>More</span>
        </Palette>
        <LinkWrapper>
          <a href="https://github.com/kuroneko-s">github: kuroneko-s</a>
        </LinkWrapper>
      </Wrapper>
    </Container>
  );
}
