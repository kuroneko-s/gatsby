import { IPagingParams } from "lib/Interface";
import React from "react";
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

export default function Paging({ result, totalCount }: IPagingParams) {
  const {
    currentPage,
    currentPageNum,
    result: { pageClickHandler, pageBtn, leftArrowHandler, rightArrowHandler },
  } = result;

  return (
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
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </PageNum>
      {pageBtn.map((_, index) => {
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
        className={
          currentPage === Math.ceil(totalCount / 100) ? "none_click" : ""
        }
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
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </PageNum>
    </PagingBox>
  );
}
