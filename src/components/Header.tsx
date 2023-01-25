import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { CommonPadding } from "../style/common";
import IconComponent from "./main/MainIcon";

const Container = styled.nav`
  background-color: ${(props) => props.theme.headerColor};
  width: 100%;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-bottom: 8px;
`;

const Wrapper = styled(CommonPadding)`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.div`
  cursor: pointer;

  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 1.5px;

  padding: 5px;
  border-radius: 4px;
  margin-right: 12px;

  &:hover {
    background-color: #eaf0f3eb;
    color: gray;
  }

  transition: all 0.15s ease-in;
`;

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Item>
          <Link to="/">
            <IconComponent />
          </Link>
        </Item>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/blog">Blog</Link>
        </Item>
      </Wrapper>
    </Container>
  );
}
