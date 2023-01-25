import React from "react";
import styled from "styled-components";
import { IHistory } from "./History";

const Container = styled.div`
  padding-bottom: 3px;
  margin-bottom: 8px;

  &:not(:last-child) {
    border-bottom: 1px dashed gray;
  }
`;

const Title = styled.p`
  font-size: 0.78rem;
  margin-bottom: 3px;
  color: gray;
`;

const Category = styled.p`
  font-size: 0.78rem;
  margin-bottom: 3px;
  color: gray;
`;

const Date = styled.p`
  font-size: 0.7rem;
  margin-bottom: 3px;
  color: gray;
`;

export default function HistoryItem({ category, date, title }: IHistory) {
  return (
    <Container>
      <Title>{title}</Title>
      <Category>{category}</Category>
      <Date>{date}</Date>
    </Container>
  );
}
