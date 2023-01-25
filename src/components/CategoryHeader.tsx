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

export default function CategoryHeader({
  category,
  categoryData,
}: ICategoryHeader) {
  return (
    <Container>
      <span>{category}</span>
      <span>&#62;</span>
      <span>{categoryData}</span>
    </Container>
  );
}
