import { gql } from "@apollo/client"
// import { client } from "../client"
import Link from "next/link"
import { v4 } from 'uuid';
import { client } from "../lib/client";

const cleanUri = (uri: string) => {
  return uri.replace(/^\/|\/$/g, '') == 'home' ? '/' : uri
}

const getMenu = (menu: any[]) => {
  return <ul className="flex">
    {
      (menu || []).map((item) => {
        return <li key={v4()} className="mx-3 hover:text-orange">
          <Link href={cleanUri(item.uri)} className="">{item.label}</Link>
        </li>
      })
    }
  </ul>
}

export const Navbar = ({ menu }: { menu: any[] }) => {
  // const { data } = await client.query({
  //   query: gql`
  //   query NewQuery {
  //     menuItems {
  //       nodes {
  //         uri
  //         label
  //         order
  //       }
  //     }
  //   }
  //   `
  // })
  // const menu = Array.from(data.menuItems.nodes).sort((a: any, b: any) => a.order - b.order);
  return <div className="h-16 flex items-center justify-center">
    {getMenu(menu)}
  </div>
}