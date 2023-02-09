import Layout from "components/Layout";
import { graphql, PageProps } from "gatsby";
import React from "react";
import MainContent from "components/main/ContentCard";
import Title from "components/Title";
import usePaging from "components/usePaging";
import Paging from "components/Paging";

export default function CategoryDataIndex({
  data,
}: PageProps<Queries.CategoryDataListQuery>) {
  const { allMdx } = data;
  const result = usePaging(allMdx);

  return (
    <Layout>
      {result.result.nodes.map((node) => (
        <MainContent key={node.id} {...node} />
      ))}
      <Paging result={result} totalCount={allMdx.totalCount} />
    </Layout>
  );
}

export const query = graphql`
  query CategoryDataList($frontmatter__categoryData: String) {
    allMdx(
      filter: {
        frontmatter: { categoryData: { eq: $frontmatter__categoryData } }
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
      totalCount
    }
  }
`;

export function Head({ params }: PageProps<Queries.CategoryDataListQuery>) {
  const titleArr = [...params.frontmatter__categoryData.toLowerCase()];
  titleArr.splice(0, 1, titleArr[0].toUpperCase());

  return <Title title={titleArr.join("")}></Title>;
}
