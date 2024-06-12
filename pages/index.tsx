import { fetchMenu } from "../lib/utils";
import Page from "./[slug]";
// import { getStaticProps } from "./[slug]";
export default function Index({ menu }) {
  return <Page menu={menu} />
}

export const getStaticProps = async () => {
  const menu = await fetchMenu()
  return {
    props: {
      menu
    },
    revalidate: 10,
  };
}