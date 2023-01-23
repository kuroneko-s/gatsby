import styled from "styled-components";

export const CommonPadding = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Card = styled.div`
  padding: 20px 0;
  border-radius: 7px;

  background-color: ${(props) => props.theme.cardColor};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`;
