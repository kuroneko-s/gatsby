import { graphql, PageProps, useStaticQuery } from "gatsby";
import React, { useState, useRef } from "react";
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
  const pageNumBox = useRef(null);
  const {
    allMdx: { nodes, totalCount },
  } = data;

  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // dummy
  const nodeArr = Array.from({ length: 312 })
    .fill(1)
    .map((_, index) => index);

  // TODO: 길이가 0일때 따로 조치해줘야함
  const totalPage = Math.ceil(nodeArr.length / 100); // 1,2,3,4 ... ( 100개 묶음 )
  const pageTotalNodes: { [key: string]: any } = {};

  for (let index = 0; index < totalPage; index++) {
    const startIdx = index * 100;
    const endIdx = (index + 1) * 100;

    const arr = nodeArr.slice(startIdx, endIdx);
    const innerArr = [];

    for (let innerIdx = 0; innerIdx < Math.ceil(arr.length / 10); innerIdx++) {
      innerArr.push(arr.slice(innerIdx * 10, (innerIdx + 1) * 10));
    }
    // @ts-ignore
    pageTotalNodes[index + 1 + ""] = innerArr;
  }

  const pageClickHandler = (e: any) => {
    const targetEl = e.currentTarget;
    setCurrentPageNum(e.currentTarget.dataset.value);

    const els = document.querySelectorAll("[data-value]");
    els.forEach((el) => el.classList.remove("active"));
    targetEl.classList.add("active");
  };

  const leftArrowHandler = (e: any) => {
    if (currentPage !== 1) {
      setCurrentPage((cur) => cur - 1);
      setCurrentPageNum((currentPage - 2) * 10 + 1); // 이부분이 왜 -2가 되는진 모르겟음...
    }
  };

  const rightArrowHandler = (e: any) => {
    if (currentPage !== totalPage) {
      setCurrentPage((cur) => cur + 1);
      setCurrentPageNum(currentPage * 10 + 1);
    }
  };

  return (
    <Layout>
      {nodes.map((node) => (
        <MainContent key={node.id} {...node} />
      ))}
      <PagingBox ref={pageNumBox}>
        <PageNum onClick={leftArrowHandler}>왼쪽</PageNum>
        {pageTotalNodes[currentPage + ""].map((_, index) => {
          return (
            <PageNum
              data-value={(currentPage - 1) * 10 + index + 1}
              key={(currentPage - 1) * 10 + index + 1}
              className={
                currentPageNum === (currentPage - 1) * 10 + index + 1
                  ? "active"
                  : ""
              }
              onClick={pageClickHandler}
            >
              {(currentPage - 1) * 10 + index + 1}
            </PageNum>
          );
        })}
        <PageNum onClick={rightArrowHandler}>오른쪽</PageNum>
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
