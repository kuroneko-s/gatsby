import Layout from "components/Layout";
import { graphql, PageProps } from "gatsby";
import React from "react";
import MainContent from "components/main/ContentCard";
import Title from "components/Title";

export default function BlogIndex({ data }: PageProps<Queries.BlogListQuery>) {
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
  query BlogList {
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
  return <Title title={"Blog"}></Title>;
}
