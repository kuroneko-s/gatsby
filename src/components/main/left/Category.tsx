import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Card } from "style/common";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

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

  li {
    padding-top: 6px;
    padding-bottom: 6px;
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
  [key: string]: number;
}

interface ICategory {
  [key: string]: IItem;
}

export default function Category() {
  const {
    allMdx: { nodes },
  } = useStaticQuery<Queries.ProfileInfoQuery>(graphql`
    query ProfileInfo {
      allMdx {
        nodes {
          frontmatter {
            category
            categoryData
          }
        }
      }
    }
  `);

  const result = nodes.reduce((acc, cur) => {
    const categoryKey = cur.frontmatter?.category!;
    const itemKey = cur.frontmatter?.categoryData!;

    if (acc.hasOwnProperty(categoryKey)) {
      const item = acc[categoryKey];

      acc = {
        ...acc,
        [categoryKey]: {
          ...item,
          [itemKey]: (item[itemKey] ?? 0) + 1,
        },
      };
    } else {
      acc = {
        ...acc,
        [categoryKey]: {
          [itemKey]: 1,
        },
      };
    }

    return acc;
  }, {} as ICategory);

  return (
    <Container>
      <Wrapper>
        <Title>카테고리</Title>
        <CategoryMenu>
          {Object.entries(result).map((arr, index) => {
            return (
              <div key={index}>
                <Link to={`/${arr[0]}`}>
                  <CategoryTitle>{arr[0]}</CategoryTitle>
                </Link>

                {Object.entries(arr[1]).map((entrie, index) => {
                  return (
                    <Link to={`/${arr[0]}/${entrie[0]}`} key={index}>
                      <CategoryItem>
                        <p>{entrie[0]}</p>
                        <Count>{entrie[1]}</Count>
                      </CategoryItem>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </CategoryMenu>
      </Wrapper>
    </Container>
  );
}
