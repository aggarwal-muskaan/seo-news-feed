import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { Flex, Heading } from "@chakra-ui/react";

import Header from "../components/Header";
import Layout from "../components/Layout";
import { TPageProps } from "../util/types";
import { filterValidNews } from "../util/filterValidNews";

export default function RandomTopic(props: TPageProps) {
  const { news } = props;
  const detailedNews = filterValidNews(news);
  if (detailedNews.length) return <Layout news={detailedNews} />;
  else
    return (
      <>
        <Header />
        <Flex
          w="100%"
          h="60vh"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Heading>Nothing is here!!</Heading>
          <Link href="/">Take me on homepage</Link>
        </Flex>
      </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking", // can also be true or false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/everything?q=${params.topic}&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();
  return { props: { news: data.articles } };
};
