import Layout from "components/Layout";
import { graphql, PageProps } from "gatsby";
import React from "react";
import MainContent from "components/main/ContentCard";
import Title from "components/Title";

export default function CategoryIndex({
  data,
}: PageProps<Queries.CategoryListQuery>) {
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
  query CategoryList($frontmatter__category: String) {
    allMdx(
      limit: 10
      filter: { frontmatter: { category: { eq: $frontmatter__category } } }
    ) {
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
