import { MDXProvider } from "@mdx-js/react";
import CategoryHeader from "components/CategoryHeader";
import Layout from "components/Layout";
import Title from "components/Title";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { Card } from "style/common";
import styled from "styled-components";
import Code from "components/code";

const Content = styled(Card)`
  margin-top: 12px;
`;

const Wrapper = styled.div`
  margin-left: 14px;
  margin-right: 14px;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const preToCodeBlock = (preProps: any) => {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.type === "code"
  ) {
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props;
    const match = className.match(/language-([\0-\uFFFF]*)/);

    return {
      codeString: codeString.trim(),
      className,
      language: match != null ? match[1] : "",
      ...props,
    };
  }
  return undefined;
};

export default function PostDetail({
  data,
  children,
}: PageProps<Queries.PostDetailQuery>) {
  const components = {
    pre: (preProps: any) => {
      const props = preToCodeBlock(preProps);

      if (props) {
        return <Code {...props} />;
      } else {
        return <pre {...preProps} />;
      }
    },
  };

  console.log(data);

  const { mdx } = data;

  return (
    <Layout>
      <CategoryHeader
        category={data.mdx?.frontmatter?.category!}
        categoryData={data.mdx?.frontmatter?.categoryData!}
      />
      <Content>
        <Wrapper className="mdx">
          <PostHeader>
            <p>
              <span>게시자 - {mdx?.frontmatter?.author}</span> /{" "}
              <span>게시일 - {mdx?.frontmatter?.upload}</span> /{" "}
              <span>수정일 - {mdx?.frontmatter?.update}</span>
            </p>
          </PostHeader>
          <MDXProvider components={components}>
            <div>{children}</div>
          </MDXProvider>
        </Wrapper>
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

export function Head(props: any) {
  return <Title title={props.pageContext.frontmatter.title}></Title>;
}
