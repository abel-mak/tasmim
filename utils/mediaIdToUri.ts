import { gql } from "@apollo/client";
import { client } from "../lib/client";

export default async function mediaIdToUri(id: number) {
  const { data } = await client.query({
    query: gql`
      query NewQuery($id: Int) {
        mediaItems(where: { id: $id }) {
          edges {
            node {
              srcSet
              sourceUrl
            }
          }
        }
      }
    `,
    variables: {
      id,
    },
  });
  const edges: any[] = data.mediaItems.edges;
  if (edges.length) {
    // console.log(edges[0].node?.sourceUrl);
    return edges[0].node?.sourceUrl;
  }
}
