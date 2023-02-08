import { graphql, PageProps, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import Title from "components/Title";
import Layout from "components/Layout";
import MainContent from "components/main/ContentCard";
import styled from "styled-components";

const PagingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PageNum = styled.p`
  padding: 5px;
  font-weight: 600;
`;

export default function IndexPage({ data }: PageProps<Queries.PostListQuery>) {
  const {
    allMdx: { nodes, totalCount },
  } = data;

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.floor(312 / 10) + 1;
  let page = 1;

  const pageClickHandler = (e: any) => {
    setCurrentPage(e.currentTarget.dataset.value);
  };

  console.log(nodes);

  return (
    <Layout>
      {nodes.map((node) => (
        <MainContent key={node.id} {...node} />
      ))}
      <PagingBox>
        {Array.from({ length: maxPage })
          .fill(1)
          .map((_, index) => {
            return (
              <PageNum
                dataset-value={index + 1}
                key={index + 1}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </PageNum>
            );
          })}
      </PagingBox>
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
