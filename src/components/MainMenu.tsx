import React from "react";
import styled from "styled-components";
import Category from "./Category";
import Profile from "./Profile";

const Container = styled.div`
  height: 100%;
  top: 10px;
  position: sticky;
`;

export default function MainMenu() {
  return (
    <Container>
      <Profile />
      <Category />
    </Container>
  );
}
