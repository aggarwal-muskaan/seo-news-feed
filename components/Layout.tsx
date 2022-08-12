import Head from "next/head";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import { descendingComparator } from "../util/sortArray";
import { formatDate } from "../util/formatter";
import { TLayoutProps } from "../util/types";
import Header from "./Header";
import Link from "next/link";

function Layout(props: TLayoutProps) {
  const { news } = props;
  const sortedNews = news.sort((a, b) =>
    descendingComparator(a, b, "publishedAt")
  );

  return (
    <>
      <Header />
      <Grid
        w="100%"
        justifyContent="center"
        pb="2rem"
        px={{ base: ".7rem", md: "1.3rem", lg: "2rem" }}
        gap={{ base: "2rem", md: "3rem", lg: "4rem" }}
        gridTemplateColumns={{
          base: "100%",
          md: "repeat(2, 1fr)",
          lg: "repeat(auto-fill, minmax(400px,1fr))",
        }}
      >
        {news.map((item, index: number) => (
          <Flex
            direction="column"
            maxH={{ base: "100%", lg: "380px" }}
            h={{ base: "100%" }}
            maxW="500px"
            key={index}
            justifyContent="space-between"
          >
            <Heading size="md">{item.title}</Heading>
            <Image
              alt="news-image"
              src={item.urlToImage}
              w="100%"
              h="150px"
              py=".5rem"
              objectFit="cover"
              borderRadius="15px"
            />
            <Text cursor="pointer" color="blackAlpha.700" fontSize="14px">
              <Link href={item.url} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  {/* open full article in new tab when clicked on description */}
                  {item.content}
                </a>
              </Link>
            </Text>
            <Text color="gray.500" fontSize="xs">
              {item.author} &nbsp;&bull; &nbsp;
              {item.publishedAt
                ? formatDate(new Date(item.publishedAt))
                : formatDate(new Date())}
            </Text>
          </Flex>
        ))}
      </Grid>
    </>
  );
}

export default Layout;
