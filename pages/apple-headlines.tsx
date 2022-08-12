import Head from "next/head";
import Layout from "../components/Layout";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function AppleNews(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return (
    <>
      <Head>
        <title>Everything about Apple</title>
        <meta
          name="description"
          content="Know latest insights of Apple - LatestNews"
          key="desc"
        />
      </Head>
      <Layout news={detailedNews} />
    </>
  );
}

export default AppleNews;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/everything?q=Apple&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { props: { news: data.articles } };
}
