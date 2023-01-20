import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { CommonPadding, IconComponent } from "../style/common";

const Container = styled.footer`
  width: 100%;
  height: 80px;

  background-color: rgba(116, 125, 140, 1);
  bottom: 0;
`;

const Wrapper = styled(CommonPadding)`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

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
      <Wrapper>
        <Content>
          <p>email: choidh.dev@gmail.com</p>
          <p>
            git:{" "}
            <Link to="https://github.com/kuroneko-s">
              github.com/kuroneko-s
            </Link>
          </p>
        </Content>
        <Content>
          <IconComponent />
        </Content>
      </Wrapper>
    </Container>
  );
}
