import React from "react";
import styled from "styled-components";
import Advertise from "./Advertise";
import History from "./History";

const Container = styled.div`
  height: 100%;
  top: 10px;
  position: sticky;
  max-width: 250px;
`;

export default function SubMenu() {
  return (
    <Container className="sub_menu">
      <History />
      <Advertise />
    </Container>
  );
}
