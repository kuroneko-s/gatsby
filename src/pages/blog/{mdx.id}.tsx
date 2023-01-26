import CategoryHeader from "components/CategoryHeader";
import Layout from "components/Layout";
import { graphql, PageProps } from "gatsby";
import React, { useRef } from "react";
import { Card } from "style/common";
import styled from "styled-components";

const Content = styled(Card)`
  margin-top: 12px;
`;
const Wrapper = styled.div`
  margin-left: 14px;
  margin-right: 14px;
`;

interface IPostDetail {
  __params: string;
  id: string;
  frontmatter: {
    readonly author: string;
    readonly category: string;
    readonly categoryData: string;
    readonly title: string;
    readonly upload: string;
    readonly update: string;
  };
}

export default function PostDetail({
  data,
  children,
}: PageProps<Queries.PostDetailQuery>) {
  console.log(children);

  const {
    mdx: {
      frontmatter: { category, categoryData },
    },
  } = data;

  /* const {
    frontmatter: { category, categoryData },
  } = pageContext; */

  return (
    <Layout>
      <CategoryHeader category={category} categoryData={categoryData} />
      <Content>
        <Wrapper className="mdx">{children}</Wrapper>
      </Content>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        author
        category
        categoryData
        title
        upload(formatString: "yyyy-MM-DD hh:mm")
        update(formatString: "yyyy-MM-DD hh:mm")
      }
    }
  }
`;
