import React from "react";
import styled from "styled-components";
import Layout from "components/Layout";
import { Card } from "style/common";

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-bottom: 12px;

  padding-left: 12px;
  padding-right: 12px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;

const Contexts = styled.div`
  margin-top: 12px;
  line-height: 24px;

  p:not(:first-child) {
    margin-top: 20px;
  }
`;

export default function About() {
  return (
    <Layout>
      <Container>
        <Title>About.</Title>
        <Contexts>
          <p>
            2021년 대학 졸업생 <br />
            2020년 11월 22일 - 에프아이시스템 취업 <br />
            2021년 1월 1일 ~ 2021년 12월 31일 - 인천공항 상주 유지보수 파견{" "}
            <br />
            (Spring & JSP 메인. 전 시스템 1차 관리)
            <br /> 2022년 1월 1일 ~ - SI 업무
          </p>
          <p>
            Java, JSP, Spring 등으로 백엔드 기반 프로젝트 참여를 희망하였으나,
            현재는 Javascript 및 React를 메인으로 프로젝트를 진행을 희망하고
            있다.
          </p>
        </Contexts>
      </Container>
    </Layout>
  );
}
