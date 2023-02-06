import React from "react";
import styled from "styled-components";
import Advertise from "../right/Advertise";
import History from "../right/History";
import Category from "./Category";
import Profile from "./Profile";

const Container = styled.div`
  height: 100%;
  top: 10px;
  position: sticky;
  width: 250px;
  max-width: 250px;
`;

export default function MainMenu() {
  return (
    <Container className="main_menu">
      <Profile />
      <Category />
      <History />
      <Advertise />
    </Container>
  );
}
