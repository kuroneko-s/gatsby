import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: any;
}

const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  height: 100%;

  margin: 0 auto;
  background-color: #f7f7f7;
`;

const Content = styled.div`
  min-height: 90vh;
  align-self: flex-end;
  padding-left: calc(12% + 60px);
`;

export default function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}
