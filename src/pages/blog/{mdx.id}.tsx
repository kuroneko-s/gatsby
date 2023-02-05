import CategoryHeader from "components/CategoryHeader";
import Layout from "components/Layout";
import Title from "components/Title";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { Card } from "style/common";
import styled from "styled-components";

const Content = styled(Card)`
  margin-top: 12px;
`;
const Wrapper = styled.div`
  margin-left: 14px;
  margin-right: 14px;
`;

export default function PostDetail({
  data,
  children,
}: PageProps<Queries.PostDetailQuery>) {
  console.log(data);
  return (
    <Layout>
      <CategoryHeader
        category={data.mdx?.frontmatter?.category!}
        categoryData={data.mdx?.frontmatter?.categoryData!}
      />
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
        file {
          childImageSharp {
            gatsbyImageData(height: 400, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export function Head() {
  return <Title title={"Post"}></Title>;
}
