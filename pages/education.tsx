import React from "react";
import Layout from "../components/Layout";
import { filterValidNews } from "../util/filterValidNews";
import { TPageProps } from "../util/types";

function Education(props: TPageProps) {
  const detailedNews = filterValidNews(props.news);
  return <Layout news={detailedNews} />;
}

export default Education;

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/everything?q=education&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { props: { news: data.articles } };
}