import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-bottom: 3px;
  margin-bottom: 8px;

  &:not(:last-child) {
    border-bottom: 1px dashed gray;
  }
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 3px;
  color: gray;
`;

const Small = styled.p`
  font-size: 0.7rem;
  margin-bottom: 3px;
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

export default function HistoryItem({ frontmatter }: IHistoryItem) {
  return (
    <Container>
      <Title>{frontmatter?.title}</Title>
      <Small>
        {frontmatter?.category}/{frontmatter?.categoryData}
      </Small>
      <Small>{frontmatter?.upload}</Small>
    </Container>
  );
}
