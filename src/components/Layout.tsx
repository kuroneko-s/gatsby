import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: any;
}

const Container = styled.main`
  max-width: 1080px;
  width: 100%;
  height: 300vh;

  margin: 0 auto;
  background-color: rgba(241, 242, 246, 1);
`;

const Content = styled.div`
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
