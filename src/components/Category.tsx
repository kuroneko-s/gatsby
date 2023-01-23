import React from "react";
import styled from "styled-components";
import { Card } from "../style/common";

const Container = styled(Card)`
  width: 100%;
  overflow: hid;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-top: 14px;
`;

const Wrapper = styled.div`
  width: 80%;
  padding: 10px 24px;
`;

const Title = styled.p`
  font-size: 0.7rem;
`;

const CategoryMenu = styled.ul`
  font-size: 0.8rem;
  font-weight: 500;

  li:first-child {
    padding-bottom: 12px;
  }

  li:nth-child(2n + 1) {
    padding-top: 12px;
  }
`;

const CategoryTitle = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
`;

const CategoryItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 12px;
  border-left: 1px solid black;
`;

const Count = styled.p`
  padding: 5px;
  border-radius: 7px;
  background-color: ${(props) => props.theme.bgColor};
`;

interface IItem {
  name: string;
  count: number;
}

interface ICategory {
  category: string;
  data: IItem[];
}

const sampleData: ICategory[] = [
  {
    category: "Code",
    data: [
      {
        name: "java",
        count: 5,
      },
      {
        name: "javascript",
        count: 15,
      },
    ],
  },
  {
    category: "Book",
    data: [
      {
        name: "java",
        count: 5,
      },
      {
        name: "javascript",
        count: 15,
      },
      {
        name: "시스템 구조",
        count: 1,
      },
    ],
  },
  {
    category: "알고리즘",
    data: [
      {
        name: "정렬",
        count: 1,
      },
    ],
  },
];

export default function Category() {
  return (
    <Container>
      <Wrapper>
        <Title>카테고리</Title>
        <CategoryMenu>
          {sampleData.map((category, index) => {
            return (
              <>
                <CategoryTitle>{category.category}</CategoryTitle>
                {category.data.map((item, idx) => {
                  return (
                    <CategoryItem key={idx}>
                      <p>{item.name}</p>
                      <Count>{item.count}</Count>
                    </CategoryItem>
                  );
                })}
              </>
            );
          })}
        </CategoryMenu>
      </Wrapper>
    </Container>
  );
}
