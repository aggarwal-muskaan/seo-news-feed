import Head from "next/head";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function Sports(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return (
    <>
      <Head>
        <title>Sports News</title>
        <meta
          name="description"
          content="Get every bit of Sports related to India - LatestNews"
          key="desc"
        />
      </Head>
      {props.news.length ? <Layout news={detailedNews} /> : <ErrorPage />}
    </>
  );
}

export default Sports;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top-headlines?category=sports&country=in&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  if (data.status === "error") return { props: { news: [] } };

  return { props: { news: data.articles }, revalidate: 21600 };
}
