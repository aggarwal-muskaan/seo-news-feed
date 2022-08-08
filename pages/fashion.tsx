import React from "react";
import Layout from "../components/Layout";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function FashionTrends(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return <Layout news={detailedNews} />;
}

export default FashionTrends;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/everything?q=fashion-trends&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { props: { news: data.articles } };
}
