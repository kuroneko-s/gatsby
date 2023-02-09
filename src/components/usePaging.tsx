import { IUsePaginParams, IPost, PagingResult } from "lib/Interface";
import React, { useState } from "react";

const usePaging = ({ totalCount, nodes }: IUsePaginParams): PagingResult => {
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

  return {
    currentPage,
    currentPageNum,
    result: {
      nodes: pageTotalNodes[currentPage + ""][currentPageNum - 1],
      pageBtn: pageTotalNodes[currentPage + ""],
      pageClickHandler,
      leftArrowHandler,
      rightArrowHandler,
    },
  };
};

export default usePaging;
