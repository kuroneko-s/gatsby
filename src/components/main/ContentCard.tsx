import React from "react";
import styled from "styled-components";
import { IPost } from "pages";
import { Card } from "style/common";
import useTime from "lib/Time";
import { Link } from "gatsby";

const Container = styled(Card)`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  padding: 0 18px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;

  font-size: 0.8rem;
  color: gray;

  span:not(:last-child) {
    margin-right: 10px;
  }
`;

const Upload = styled.span``;

const Update = styled.span``;

const Category = styled.span`
  a {
    color: gray;
  }
  a:hover {
    color: black;
  }

  span {
    margin-right: 0 !important;
  }
`;

const ReadTime = styled.span``;

const Contents = styled.div`
  margin-top: 7px;
  font-size: 0.9rem;
  p {
    margin-bottom: 7px;
  }
`;

const Cotnent = styled.p`
  line-height: 1.3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Button = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.bgColor};
  cursor: pointer;
  border: none;

  padding: 7px 11px;
  border-radius: 4px;

  font-size: 0.75rem;

  &:hover {
    background-color: #cfcece;
  }
`;

export default function Content({
  title,
  category,
  categoryData,
  content,
  date,
  update,
}: IPost) {
  const now = Date.now();
  const beforeUpload = now - date;
  const beforeUpdate = now - update;

  const uploadDate = useTime(beforeUpload);
  let updateDate;

  if (!!update) {
    updateDate = useTime(beforeUpdate);
  }

  const detailBtnHandler = () => {
    console.log(date, update);
  };

  return (
    <Container>
      <Wrapper>
        <Header>
          <Upload>
            {uploadDate?.result
              ? `${uploadDate?.text}전에 게시됨`
              : "업로드 일자 갱신 실패"}
          </Upload>
          {!!update && updateDate?.result ? (
            <Update>{`${updateDate.text}전에 업데이트됨`}</Update>
          ) : null}
          <Category>
            <span>
              <Link to={`/${category}`}>{category}</Link>
            </span>
            /
            <span>
              <Link to={`/${category}/${categoryData}`}>{categoryData}</Link>
            </span>
          </Category>
          <ReadTime>15일안에 읽을수있음(150000자)</ReadTime>
        </Header>
        <Contents>
          <p>{title}</p>
          <Cotnent>{content}</Cotnent>
        </Contents>
        <Button onClick={detailBtnHandler}>자세히보기</Button>
      </Wrapper>
    </Container>
  );
}
