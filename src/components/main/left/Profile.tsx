import React from "react";
import styled from "styled-components";
import { Card } from "style/common";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled(Card)`
  width: 250px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 14px;

  // Full size Phone
  @media screen and (max-width: 580px) {
    width: 100%;

    flex-direction: row;
    padding: 6px 0px;
  }
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

  // Full size Phone
  @media screen and (max-width: 580px) {
    p {
      display: none;
    }
  }
`;

const ImgWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 18px;

  // Full size Phone
  @media screen and (max-width: 580px) {
    width: 80px;
    height: 80px;
  }
`;

const InfoWrapper = styled.div`
  margin-top: 12px;
  padding: 0 12px;

  // Full size Phone
  @media screen and (max-width: 580px) {
    margin-top: 0px;
    p {
      margin-top: 0px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
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

  @media screen and (max-width: 580px) {
    li {
      padding: 9px;
    }
  }
`;

const BtnWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 4px;
  border: #d5d5d5 1px solid;
  padding: 11px 48px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #ebebeb;
  }

  @media screen and (max-width: 580px) {
    padding: 11px 0px;
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
    <Container className="profile">
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
        <a href="https://github.com/kuroneko-s" target={"_blank"}>
          <BtnWrapper>동혁's Git</BtnWrapper>
        </a>
      </InfoWrapper>
    </Container>
  );
}
