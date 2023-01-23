import React from "react";
import styled from "styled-components";
import { CommonPadding } from "../style/common";
import Footer from "./Footer";
import Header from "./Header";
import MainMenu from "./MainMenu";
import SubMenu from "./SubMenu";

interface ILayoutProps {
  children: any;
}

const Container = styled.main`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled(CommonPadding)`
  min-height: 86vh;

  display: flex;
  flex-direction: row;

  div:first-child {
    flex-grow: 1;
    max-width: 250px;
  }

  div:last-child {
    flex-grow: 1;
    max-width: 250px;
  }

  div:nth-child(2) {
    flex-grow: 2;
  }
`;

const Content = styled.div`
  max-width: 720px;
  margin: 0 12px;
`;

export default function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Header />
      <Wrapper>
        <MainMenu />
        <Content>{children}</Content>
        <SubMenu />
      </Wrapper>
      <Footer />
    </Container>
  );
}
