import Head from "next/head";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

import { formatDate } from "../util/formatter";
import { TLayoutProps } from "../util/types";
import Header from "./Header";

function Layout(props: TLayoutProps) {
  const { news } = props;

  return (
    <>
      <Header />
      <Grid
        w="100%"
        justifyContent="center"
        gap="3rem"
        gridTemplateColumns={"repeat(2, auto)"}
      >
        {news.map((item, index: number) => (
          <Box h="380px" w="500px" cursor="pointer" key={index}>
            <Heading size="lg">{item.title}</Heading>
            <Image alt="news-image" src={item.urlToImage} w="100%" h="200px" />
            <Text>{item.content}</Text>
            <Text color="gray.500" fontSize="xs">
              {item.author} &nbsp;&bull; &nbsp;
              {item.publishedAt
                ? formatDate(new Date(item.publishedAt))
                : formatDate(new Date())}
            </Text>
          </Box>
        ))}
      </Grid>
    </>
  );
}

export default Layout;
