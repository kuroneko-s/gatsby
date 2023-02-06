import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { CommonPadding } from "style/common";
import IconComponent from "./main/MainIcon";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  height: 80px;

  background-color: ${(props) => props.theme.headerColor};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-top: 8px;
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
