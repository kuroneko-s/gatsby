import React from "react";
import styled from "styled-components";
import { Card } from "style/common";

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

  background-color: red;
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

const BtnWrapper = styled.div``;

export default function Profile() {
  return (
    <Container>
      <ProfileWrapper>
        <ImgWrapper>Image</ImgWrapper>
        <p>최동혁</p>
        <p>주니어 개발자</p>
      </ProfileWrapper>
      <InfoWrapper>
        <Info>
          <li>
            <p>Post</p>
            <p>0</p>
          </li>
          <li>
            <p>Category</p>
            <p>0</p>
          </li>
          <li>
            <p>Tag</p>
            <p>0</p>
          </li>
        </Info>
      </InfoWrapper>
      <BtnWrapper>
        <p>Git</p>
      </BtnWrapper>
    </Container>
  );
}
