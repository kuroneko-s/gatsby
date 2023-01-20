import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Container = styled.nav`
  background-color: "inherit";

  position: fixed;
  padding: 85px 30px 10px 30px;
  opacity: 0.22;
  width: 12%;
  height: 81%;
  z-index: 2;

  &:hover {
    opacity: 0.7;
  }
`;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Item = styled.li`
  cursor: pointer;

  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: 1.5px;

  padding: 16px 5px;
  border-radius: 4px;

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
