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
  padding-bottom: 90px;
  padding-left: 12px;

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

  // PC
  @media screen and (min-width: 1201px) {
    .main_menu {
      .history,
      .advertise {
        display: none;
      }
    }
  }

  // Tablet
  @media screen and (max-width: 1200px) {
    .sub_menu {
      display: none;
    }

    .profile {
      flex-basis: 250px;
    }
  }

  // Full size Phone
  @media screen and (max-width: 580px) {
    flex-direction: column;
    position: relative;

    padding-right: 12px;
    padding-top: 50px;

    div:first-child {
      flex-grow: unset;
    }

    div:last-child {
      flex-grow: unset;
    }

    .main_menu {
      width: auto;
      max-width: 100%;
    }

    .sub_menu {
      display: block;

      .advertise {
        display: block;
      }
    }
  }
`;

const Content = styled.div`
  margin: 0px 12px;

  @media screen and (max-width: 1200px) {
    max-width: auto;
  }

  @media screen and (min-width: 1201px) {
    max-width: 720px;
  }

  // Full size Phone
  @media screen and (max-width: 580px) {
    margin: 5px 0 0 0;
  }
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
