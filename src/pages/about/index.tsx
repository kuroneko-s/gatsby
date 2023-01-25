import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";

const Wrapper = styled.section`
  padding-right: 30px;
  padding-top: 75px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
`;

const Text = styled.p`
  margin-top: 8px;
  font-size: 1.1rem;
  font-weight: 600;
`;

export default function About() {
  return (
    <Layout>
      <Wrapper>
        <Title>About</Title>
        <br />
        <Text>소개 설명</Text>
        <Text>짧게</Text>
        <Text>적어두는</Text>
        <Text>화면</Text>
        <Text>내용은</Text>
        <Text>나중에</Text>
      </Wrapper>
    </Layout>
  );
}
