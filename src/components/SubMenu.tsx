import React from "react";
import styled from "styled-components";
import { Card } from "../style/common";
import Advertise from "./Advertise";
import History from "./History";

const Container = styled.div`
  height: 100%;
  top: 10px;
  position: sticky;
`;

export default function SubMenu() {
  return (
    <Container>
      <History />
      <Advertise />
    </Container>
  );
}
