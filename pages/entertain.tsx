import Head from "next/head";
import Layout from "../components/Layout";
import ErrorPage from "../components/ErrorPage";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function Entertain(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return (
    <>
      <Head>
        <title>News on Entertainment</title>
        <meta
          name="description"
          content="Get fresh articles on entertainment- LatestNews"
          key="desc"
        />
      </Head>
      {props.news.length ? <Layout news={detailedNews} /> : <ErrorPage />}
    </>
  );
}

export default Entertain;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/everything?q=entertain&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  if (data.status === "error") return { props: { news: [] } };

  return { props: { news: data.articles }, revalidate: 43200 };
}
