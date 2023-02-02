import React from "react";
import styled from "styled-components";
import { Card } from "style/common";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled(Card)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 8px;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const ImgWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 18px;
`;

const InfoWrapper = styled.div`
  margin-top: 12px;
`;

const Info = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  li {
    padding: 15px;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;

    p:last-child {
      margin-top: 8px;
    }
  }
`;

const BtnWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 4px;
  border: #d5d5d5 1px solid;
  padding: 11px 48px;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;

export default function Profile() {
  const {
    allMdx: { nodes },
  } = useStaticQuery<Queries.PostHistoryListQuery>(graphql`
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

  const postCnt = nodes?.length;
  const categoryCnt = new Set(
    ...nodes.map((node) => node.frontmatter?.category)
  )?.size;
  const tags = new Set(...nodes.map((node) => node.frontmatter?.categoryData))
    ?.size;

  return (
    <Container>
      <ProfileWrapper>
        <ImgWrapper>
          <StaticImage src="../../../images/chyoki.png" alt="profile" />
        </ImgWrapper>
        <p>최동혁</p>
        <p>주니어 개발자</p>
      </ProfileWrapper>
      <InfoWrapper>
        <Info>
          <li>
            <p>Post</p>
            <p>{postCnt ?? 0}</p>
          </li>
          <li>
            <p>Category</p>
            <p>{categoryCnt ?? 0}</p>
          </li>
          <li>
            <p>Tag</p>
            <p>{tags ?? 0}</p>
          </li>
        </Info>
      </InfoWrapper>
      <a href="https://github.com/kuroneko-s" target={"_blank"}>
        <BtnWrapper>동혁's Git</BtnWrapper>
      </a>
    </Container>
  );
}
