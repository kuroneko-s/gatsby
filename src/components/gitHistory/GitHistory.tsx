import React from "react";
import styled from "styled-components";

interface IBallProps {
  right?: boolean;
  left?: boolean;
}

interface IGitHistroyProps {
  hasBall: boolean;
  isLeft: boolean;
  context: string;
  year?: string;
}

interface IBoxProps {
  isYear: boolean;
}

const InnerBox = styled.div<IBoxProps>`
  position: relative;
  padding: 15px 0;
  ${(props) =>
    props.isYear
      ? `
      text-align: left; 
      font-weight: 600; 
      left: -28px; 
      font-size: 1.2rem;
      `
      : null}
`;

const Ball = styled.span<IBallProps>`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #b7b78a;
  border: 2px solid #658864;
  ${(props) => (props.left ? "left: -8px;" : "right: -8px;")}
`;

export default function GitHistroy({
  context,
  hasBall,
  isLeft,
  year,
}: IGitHistroyProps) {
  return (
    <InnerBox isYear={!!year}>
      {context}
      {hasBall ? <Ball left={isLeft} /> : null}
    </InnerBox>
  );
}
