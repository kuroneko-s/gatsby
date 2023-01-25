import React from "react";
import styled from "styled-components";
import GitHistroy from "./GitHistory";

const Conatainer = styled.section`
  height: 100vh;
  background-color: rgba(206, 214, 224, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  align-items: center;
  padding-top: 30px;
`;

const TextStyle = styled.div`
  width: 400px;
  text-align: center;
  padding: 12px 0;
  font-weight: 600;
  font-size: 1.2rem;
`;

const GitHistoryTopTitle = styled(TextStyle)`
  border-bottom: 1px solid black;
`;

const GitHistoryBottomTitle = styled(TextStyle)`
  border-top: 1px solid black;
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
`;

const GitHistoryRight = styled.div`
  width: 200px;
  text-align: right;
`;

export default function GitHistoryContainer() {
  return (
    <Conatainer>
      <Wrapper>
        <GitHistoryTopTitle>2020년</GitHistoryTopTitle>
        <GitHistoryBox>
          <GitHistoryLeft>
            <GitHistroy context="Java" hasBall={true} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="Spring MVC" hasBall={true} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy
              context="JPA & Spring JPA"
              hasBall={true}
              isLeft={false}
            />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy
              context="Spring Security"
              hasBall={true}
              isLeft={false}
            />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="GoLang" hasBall={true} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="React" hasBall={true} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="NextJS" hasBall={true} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="JavaScript" hasBall={true} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="　" hasBall={false} isLeft={false} />
            <GitHistroy context="ElectronJS" hasBall={true} isLeft={false} />
          </GitHistoryLeft>

          <GitHistoryRight>
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy context="JSP" hasBall={true} isLeft={true} />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy context="Spring Boot" hasBall={true} isLeft={true} />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy
              context="Spring Boot Project"
              hasBall={true}
              isLeft={true}
            />
            <GitHistroy
              context="2021년"
              hasBall={false}
              isLeft={true}
              year={"2021"}
            />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy context="JavaScript" hasBall={true} isLeft={true} />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy context="ES6" hasBall={true} isLeft={true} />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy
              context="2022년"
              hasBall={false}
              isLeft={true}
              year={"2022"}
            />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy context="React Native" hasBall={true} isLeft={true} />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
            <GitHistroy
              context="2023년"
              hasBall={false}
              isLeft={true}
              year={"2023"}
            />
            <GitHistroy context="Gatsby" hasBall={true} isLeft={true} />
            <GitHistroy context="　" hasBall={false} isLeft={true} />
          </GitHistoryRight>
        </GitHistoryBox>
      </Wrapper>
    </Conatainer>
  );
}
