import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: rgba(116, 125, 140, 1);
  bottom: 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  height: 120px;

  div {
    :first-child {
      flex-grow: 4;
    }
    :last-child {
      flex-grow: 2;
    }
  }
`;

const Content = styled.div`
  :first-child {
    padding: 0 30px;
  }

  :last-child {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Content>
        <p>email: choidh.dev@gmail.com</p>
        <p>name: 최동혁</p>
      </Content>
      <Content>
        <h1>Image</h1>
        <p>Image description</p>
      </Content>
    </Container>
  );
}
