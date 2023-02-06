import React from "react";
import styled from "styled-components";
import { Card } from "style/common";
import HistoryItem from "./HistoryItem";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-left: 12px;
  padding-right: 12px;
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

export default function History() {
  const {
    allMdx: { nodes },
  } = useStaticQuery<Queries.PostHistoryListQuery>(graphql`
    query PostHistoryList {
      allMdx(limit: 5, sort: { frontmatter: { upload: DESC } }) {
        nodes {
          frontmatter {
            category
            categoryData
            title
            upload(formatString: "yyyy-MM-DD hh:mm")
          }
          id
        }
      }
    }
  `);

  return (
    <Container className="history">
      <Title>최근글</Title>
      {nodes.map((node) => (
        <HistoryItem key={node.id} {...node} />
      ))}
    </Container>
  );
}
