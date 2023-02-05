import Layout from "components/Layout";
import { graphql, PageProps } from "gatsby";
import React from "react";
import MainContent from "components/main/ContentCard";
import Title from "components/Title";

export default function CategoryData({
  data,
}: PageProps<Queries.CategoryDataListQuery>) {
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
  query CategoryDataList(
    $frontmatter__categoryData: String
    $frontmatter__category: String
  ) {
    allMdx(
      limit: 10
      filter: {
        frontmatter: {
          categoryData: { eq: $frontmatter__categoryData }
          category: { eq: $frontmatter__category }
        }
      }
      sort: { frontmatter: { upload: DESC } }
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

export function Head({ params }: PageProps<Queries.CategoryDataListQuery>) {
  const titleArr = [...params.frontmatter__categoryData.toLowerCase()];
  titleArr.splice(0, 1, titleArr[0].toUpperCase());

  return <Title title={titleArr.join("")}></Title>;
}
