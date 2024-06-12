import { gql } from "@apollo/client";
import { client } from "./client";

export const fetchMenu = async () => {
  const { data } = await client.query({
    query: gql`
    query NewQuery {
      menuItems {
        nodes {
          uri
          label
          order
        }
      }
    }
    `
  })
  const menu = Array.from(data.menuItems.nodes).sort((a: any, b: any) => a.order - b.order);
  return menu

}