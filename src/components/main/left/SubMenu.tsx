import React from "react";
import styled from "styled-components";
import Advertise from "../right/Advertise";
import History from "../right/History";

const Container = styled.div`
  height: 100%;
  top: 10px;
  position: sticky;
  max-width: 250px;
`;

export default function SubMenu() {
  return (
    <Container>
      <History />
      <Advertise />
    </Container>
  );
}
