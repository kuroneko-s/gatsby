import { graphql, PageProps } from "gatsby";
import React from "react";
import Title from "components/Title";
import Layout from "components/Layout";
import MainContent from "components/main/ContentCard";
import usePaging from "components/usePaging";
import Paging from "components/Paging";

export default function IndexPage({ data }: PageProps<Queries.PostListQuery>) {
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
  query PostList {
    allMdx(sort: { frontmatter: { upload: DESC } }) {
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

export function Head() {
  return <Title title="Main"></Title>;
}
