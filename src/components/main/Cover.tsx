import React from "react";
import styled from "styled-components";

interface ITextProps {
  fontSize: string;
  fontWeight: string;
}

const Container = styled.section`
  height: 100vh;
  background-color: rgba(206, 214, 224, 0.4);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  padding-right: 30px;
  padding-top: 105px;
`;

const Text = styled.p<ITextProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  width: 400px;
  text-align: right;
`;

const WorkHistory = styled(Text)`
  text-align: left;
  position: absolute;

  bottom: 160px;
  left: 345px;
  width: 400px;
`;

export default function Cover() {
  return (
    <Container>
      <Wrapper>
        <Text fontSize="3rem" fontWeight="800">
          About Me
        </Text>
        <br />
        <Text fontSize="2rem" fontWeight="600">
          a rittle
        </Text>
        <br />
        <br />
        <Text fontSize="1.25rem" fontWeight="400">
          Test Text
        </Text>
      </Wrapper>
      <WorkHistory fontSize="1.05rem" fontWeight="400">
        <ul>{/* <li>2020년 11월 22일: FISystem 입사</li> */}</ul>
      </WorkHistory>
    </Container>
  );
}
