import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Title from "../components/Title";
import Layout from "../components/Layout";
import styled from "styled-components";

interface ITextProps {
  fontSize: string;
  fontWeight: string;
}

const Content = styled.section`
  height: 100vh;
  background-color: rgba(206, 214, 224, 0.4);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Container_1 = styled(Content)`
  padding-right: 30px;
  padding-top: 105px;
`;

const Container_2 = styled(Content)`
  align-items: center;
  padding-top: 30px;
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

const GitHistoryTitle = styled.div`
  width: 400px;
  border-bottom: 1px solid black;
  text-align: center;
  padding: 15px 0;
`;

const GitHistoryBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
`;

const GitHistoryLeft = styled.div`
  width: 200px;
  border-right: 1px solid black;
  text-align: left;

  div {
    position: relative;
    padding: 30px 0;
  }
`;

const GitHistoryRight = styled.div`
  width: 200px;
  text-align: right;

  div {
    position: relative;
    padding: 30px 0;
  }
`;

interface IBallProps {
  right?: boolean;
  left?: boolean;
}

const Ball = styled.span<IBallProps>`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  border: 3px solid black;
  ${(props) => (props.left ? "left: -11px;" : "right: -11px;")}
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container_1>
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
          Java =&gt; JavascriMainTextt 전향중
        </Text>
        <WorkHistory fontSize="1.05rem" fontWeight="400">
          <ul>
            <li>2020년 11월 22일: FISystem 입사</li>
          </ul>
        </WorkHistory>
      </Container_1>

      <Container_2>
        <GitHistoryTitle>2019년</GitHistoryTitle>
        <GitHistoryBox>
          <GitHistoryLeft>
            <div>
              1<Ball left={false} />
            </div>
            <div></div>
            <div>3</div>
            <div></div>
            <div>5</div>
            <div></div>
            <div>7</div>
            <div></div>
            <div>9</div>
            <div></div>
            <div>11</div>
            <div></div>
            <div>13</div>
            <div></div>
            <div>15</div>
            <div></div>
            <div>17</div>
          </GitHistoryLeft>
          <GitHistoryRight>
            <div></div>
            <div>
              2<Ball left />
            </div>
            <div></div>
            <div>4</div>
            <div></div>
            <div>6</div>
            <div></div>
            <div>8</div>
            <div></div>
            <div>10</div>
            <div></div>
            <div>12</div>
            <div></div>
            <div>14</div>
            <div></div>
            <div>16</div>
            <div></div>
          </GitHistoryRight>
        </GitHistoryBox>
      </Container_2>

      <Content>
        <h1>Content 3</h1>
      </Content>
    </Layout>
  );
};

export default IndexPage;

export function Head() {
  return <Title title="main page"></Title>;
}
