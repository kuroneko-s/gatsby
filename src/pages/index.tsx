import type { PageProps } from "gatsby";

import React from "react";
import Title from "../components/Title";
import Layout from "../components/Layout";
import GitHistoryContainer from "../components/main/gitHistory/GitHistoryContainer";
import Cover from "../components/main/Cover";
import Portfolio from "../components/main/Portfolio";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Cover />
        <GitHistoryContainer />
        <Portfolio />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export function Head() {
  return <Title title="main page"></Title>;
}
