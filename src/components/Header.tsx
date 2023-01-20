import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { CommonPadding, IconComponent } from "../style/common";

const Container = styled.nav`
  background-color: rgba(255, 0, 0, 0.3);
  width: 100%;
`;

const Wrapper = styled(CommonPadding)`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.div`
  cursor: pointer;

  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: 1.5px;

  padding: 16px 5px;
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
