import React from "react";
import styled from "styled-components";
import { Card } from "../../../style/common";
import HistoryItem from "./HistoryItem";

const Container = styled(Card)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-left: 12px;
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

export interface IHistory {
  title: string;
  category: string;
  date: string;
}

// max length 5
const SampleData: IHistory[] = [
  {
    title: "제목",
    category: "자바",
    date: "2023-01-24 12:18",
  },
  {
    title: "제목",
    category: "자바",
    date: "2023-01-24 12:18",
  },
  {
    title: "제목",
    category: "자바",
    date: "2023-01-24 12:18",
  },
  {
    title: "제목",
    category: "자바",
    date: "2023-01-24 12:18",
  },
  {
    title: "제목",
    category: "자바",
    date: "2023-01-24 12:18",
  },
];

export default function History() {
  return (
    <Container>
      <Title>최근글</Title>
      {SampleData.map((data) => (
        <HistoryItem {...data} />
      ))}
    </Container>
  );
}
