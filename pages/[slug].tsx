import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { BlockRenderer } from "../components/block-renderer";
import { Navbar } from "../components/navbar";
import { client } from "../lib/client";
import { fetchMenu } from "../lib/utils";
// import { getAllPostsWithSlug, getPostAndMorePosts } from "../lib/api";

export default function Page({ menu, blocks }) {
  // const router = useRouter();

  return (
    <div>
      <Navbar menu={menu} />
      <BlockRenderer blocks={blocks}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params
}) => {
  const menu = await fetchMenu();
  const { slug } = params;
  const uri = `/${slug}`;

  const { data } = await client.query({
    query: gql`
    query NewQuery ($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Page {
          id
          blocks(postTemplate: false)
        }
      }
    }`,
    variables: { uri }
  })
  const { blocks } = data.nodeByUri

  return {
    props: {
      menu,
      blocks
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async function () {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        pages {
          nodes {
            uri
            slug
          }
        }
      }
    `
  })
  const paths = data.pages.nodes.map((page: any) => {
    const res = { params: { slug: page.slug } };
    return res
  });
  return {
    paths,
    fallback: false,
  }
}