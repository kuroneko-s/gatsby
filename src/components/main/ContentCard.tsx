import React from "react";
import styled from "styled-components";
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

const Button = styled(Link)`
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

interface IContent {
  readonly id: string;
  excerpt: string | null;
  frontmatter: {
    readonly category: string | null;
    readonly categoryData: string | null;
    readonly upload: string | null;
    readonly update: string | null;
    readonly title: string | null;
  } | null;
}

export default function Content({ excerpt, frontmatter, id }: IContent) {
  const upload = new Date(frontmatter?.upload!).getTime();
  const update = new Date(frontmatter?.update!).getTime();

  const now = Date.now();
  const beforeUpload = now - upload;
  const beforeUpdate = now - update;

  const uploadDate = useTime(beforeUpload);
  let updateDate;

  if (!!update) {
    updateDate = useTime(beforeUpdate);
  }

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
              <Link to={`/${frontmatter?.category}`}>
                {frontmatter?.category}
              </Link>
            </span>
            /
            <span>
              <Link
                to={`/${frontmatter?.category}/${frontmatter?.categoryData}`}
              >
                {frontmatter?.categoryData}
              </Link>
            </span>
          </Category>
          <ReadTime>15일안에 읽을수있음(150000자)</ReadTime>
        </Header>
        <Contents>
          <p>{frontmatter?.title}</p>
          <Cotnent>{excerpt}</Cotnent>
        </Contents>
        <Button to={`/blog/${id}`}>자세히보기</Button>
      </Wrapper>
    </Container>
  );
}
