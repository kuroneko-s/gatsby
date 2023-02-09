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
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

interface IPost {
  readonly id: string;
  readonly excerpt: string | null;
  readonly frontmatter: {
    readonly category: string | null;
    readonly categoryData: string | null;
    readonly title: string | null;
    readonly upload: string | null;
    readonly update: string | null;
  } | null;
}

export default function IndexPage({ data }: PageProps<Queries.PostListQuery>) {
  const {
    allMdx: { nodes, totalCount },
  } = data;

  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  // TODO: 길이가 0일때 따로 조치해줘야함
  const totalPage = Math.ceil(totalCount / 100); // 1,2,3,4 ... ( 100개 묶음 )
  const pageTotalNodes: { [key: string]: IPost[][] } = {};

  for (let index = 0; index < totalPage; index++) {
    const startIdx = index * 100;
    const endIdx = (index + 1) * 100;

    const arr: IPost[] = nodes.slice(startIdx, endIdx);
    const innerArr: IPost[][] = [];

    for (let innerIdx = 0; innerIdx < Math.ceil(arr.length / 10); innerIdx++) {
      innerArr.push(arr.slice(innerIdx * 10, (innerIdx + 1) * 10));
    }
    pageTotalNodes[index + 1 + ""] = innerArr;
  }

  const pageClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const targetEl = e.currentTarget;
    setCurrentPageNum(Number(e.currentTarget.dataset.value));

    const els = document.querySelectorAll("[data-value]");
    els.forEach((el) => el.classList.remove("active"));
    targetEl.classList.add("active");

    window.scrollTo(0, 0);
  };

  const leftArrowHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage((cur) => cur - 1);
      setCurrentPageNum((currentPage - 2) * 10 + 1); // 이부분이 왜 -2가 되는진 모르겟음...
    }

    window.scrollTo(0, 0);
  };
  const rightArrowHandler = () => {
    if (currentPage !== totalPage) {
      setCurrentPage((cur) => cur + 1);
      setCurrentPageNum(currentPage * 10 + 1);
    }

    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      {pageTotalNodes[currentPage + ""][currentPageNum - 1].map((node) => (
        <MainContent key={node.id} {...node} />
      ))}
      <PagingBox>
        <PageNum
          className={currentPage === 1 ? "none_click" : ""}
          onClick={leftArrowHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </PageNum>
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
        <PageNum
          className={currentPage === totalPage ? "none_click" : ""}
          onClick={rightArrowHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </PageNum>
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
