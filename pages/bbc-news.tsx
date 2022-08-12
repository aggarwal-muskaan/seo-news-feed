import Head from "next/head";
import Layout from "../components/Layout";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function BBCnews(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return (
    <>
      <Head>
        <title>BBC News</title>
        <meta
          name="description"
          content="Know BBC top headlines - LatestNews"
          key="desc"
        />
      </Head>
      <Layout news={detailedNews} />
    </>
  );
}

export default BBCnews;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top-headlines?sources=bbc-news&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { props: { news: data.articles } };
}
