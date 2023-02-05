import { Link } from "gatsby";
import React from "react";
import { Card } from "style/common";
import styled from "styled-components";

interface ICategoryHeader {
  category: string;
  categoryData: string;
}

const Container = styled(Card)`
  padding-left: 14px;
  padding-right: 14px;

  span {
    margin-right: 6px;
  }
`;

const FullPath = styled(Link)`
  &:hover {
    opacity: 0.7;
  }
`;

export default function CategoryHeader({
  category,
  categoryData,
}: ICategoryHeader) {
  return (
    <Container>
      <FullPath to={`/${category}/${categoryData}`}>
        <FullPath to={`/${category}`}>
          <span>{category}</span>
        </FullPath>
        <span>&#62;</span>
        <FullPath to={`/${categoryData}`}>
          <span>{categoryData}</span>
        </FullPath>
      </FullPath>
    </Container>
  );
}
