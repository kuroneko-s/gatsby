import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  padding-bottom: 8px;
  margin-bottom: 8px;

  &:not(:last-child) {
    border-bottom: 1px dashed gray;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 3px;
  color: black;
`;

const Small = styled.p`
  font-size: 0.68rem;
  margin-bottom: 3px;
  margin-top: 5px;
  color: gray;
`;

interface IHistoryItem {
  readonly id: string;
  readonly frontmatter: {
    readonly category: string | null;
    readonly categoryData: string | null;
    readonly title: string | null;
    readonly upload: string | null;
  } | null;
}

export default function HistoryItem({ frontmatter, id }: IHistoryItem) {
  return (
    <Container>
      <Link to={`/blog/${id}`}>
        <Title>{frontmatter?.title}</Title>
        <Small>
          {frontmatter?.category}/{frontmatter?.categoryData}
        </Small>
        <Small>{frontmatter?.upload}</Small>
      </Link>
    </Container>
  );
}
