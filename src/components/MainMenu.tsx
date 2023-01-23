import React from "react";
import styled from "styled-components";
import Category from "./Category";
import Profile from "./Profile";

const Container = styled.div``;

export default function MainMenu() {
  return (
    <Container>
      <Profile />
      <Category />
    </Container>
  );
}
