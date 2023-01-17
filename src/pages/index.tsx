import React from "react";
import type { PageProps } from "gatsby";
import Title from "../components/Title";
import Layout from "../components/Layout";
import styled from "styled-components";
import GitHistoryContainer from "../components/main/gitHistory/GitHistoryContainer";
import Cover from "../components/main/Cover";

const Content = styled.section`
  height: 100vh;
  background-color: rgba(206, 214, 224, 0.4);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Cover />
      <GitHistoryContainer />

      <Content>
        <h1>Content 3</h1>
      </Content>
    </Layout>
  );
};

export default IndexPage;

export function Head() {
  return <Title title="main page"></Title>;
}
