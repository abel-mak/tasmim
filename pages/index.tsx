import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import { client } from "../lib/client";
import { fetchMenu } from "../lib/utils";
import Page from "./[slug]";
// import { getStaticProps } from "./[slug]";
export default function Index({ menu, blocks }) {
  return <Page menu={menu} blocks={blocks} />
}

// export const getStaticProps = async () => {
//   const menu = await fetchMenu()
//   return {
//     props: {
//       menu
//     },
//     revalidate: 10,
//   };
// }

export const getStaticProps: GetStaticProps = async () => {
  const menu = await fetchMenu();
  // const { slug } = params;
  // const uri = `/${slug}`;

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
    variables: { uri: '/home' }
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