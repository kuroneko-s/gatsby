import React from "react";
import styled from "styled-components";
import { Card } from "style/common";

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 14px;
  padding-left: 12px;

  a {
    font-size: 0.8rem;
    font-weight: 800;
  }
`;

const Title = styled.p`
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

export default function Advertise() {
  return (
    <Container>
      <Title>광고</Title>
      <a href={"https://www.youtube.com/@vrecord_choki"}>쵸키 보세요</a>
    </Container>
  );
}
