import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { CommonPadding } from "style/common";
import { theme } from "theme";
import Footer from "./Footer";
import Header from "./Header";
import MainMenu from "./main/left/MainMenu";
import SubMenu from "./main/right/SubMenu";

interface ILayoutProps {
  children: any;
}

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;

  margin: 0 auto;
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled(CommonPadding)`
  padding-top: 70px;
  padding-bottom: 100px;

  min-height: 88vh;
  position: sticky;

  display: flex;
  flex-direction: row;

  div:first-child {
    flex-grow: 1;
  }

  div:last-child {
    flex-grow: 1;
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
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Wrapper>
          <MainMenu />
          <Content>{children}</Content>
          <SubMenu />
        </Wrapper>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
