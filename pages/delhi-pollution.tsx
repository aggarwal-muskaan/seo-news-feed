import Head from "next/head";
import Layout from "../components/Layout";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function Pollution(props: TPageProps) {
  const editArray = props.news.slice(1);
  const detailedNews = filterValidNews(editArray);
  return (
    <>
      <Head>
        <title>Pollution - Delhi</title>
        <meta
          name="description"
          content="Know everything on Delhi Pollution - LatestNews"
          key="desc"
        />
      </Head>
      <Layout news={detailedNews} />
    </>
  );
}

export default Pollution;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/everything?q=delhi-pollution&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { props: { news: data.articles } };
}
