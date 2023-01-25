import { graphql, PageProps } from "gatsby";
import React from "react";
import Title from "components/Title";
import Layout from "components/Layout";
import MainContent from "components/main/ContentCard";

export default function IndexPage({ data }: PageProps<Queries.PostListQuery>) {
  const {
    allMdx: { nodes },
  } = data;

  return (
    <Layout>
      {nodes.map((node) => (
        <MainContent key={node.id} {...node} />
      ))}
    </Layout>
  );
}

export const query = graphql`
  query PostList {
    allMdx(limit: 10, sort: { frontmatter: { upload: DESC } }) {
      nodes {
        frontmatter {
          category
          categoryData
          title
          upload(formatString: "yyyy-MM-DD hh:mm")
          update(difference: "yyyy-MM-DD hh:mm")
        }
        id
        excerpt
      }
    }
  }
`;

export function Head() {
  return <Title title="Main"></Title>;
}
