import Head from "next/head";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function Business(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return (
    <>
      <Head>
        <title>Top Business Headlines - India</title>
        <meta
          name="description"
          content="Get top business headlines around India - LatestNews"
          key="desc"
        />
      </Head>
      {props.news.length ? <Layout news={detailedNews} /> : <ErrorPage />}
    </>
  );
}

export default Business;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top-headlines?category=business&country=in&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  if (data.status === "error") return { props: { news: [] } };

  return { props: { news: data.articles }, revalidate: 21600 };
}
