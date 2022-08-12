import Head from "next/head";
import Layout from "../components/Layout";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function Business(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return (
    <>
      <Head>
        <title>Weather news</title>
        <meta
          name="description"
          content="Weather news from LatestNews"
          key="desc"
        />
      </Head>
      <Layout news={detailedNews} />
    </>
  );
}

export default Business;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/everything?q=weather&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { props: { news: data.articles } };
}
