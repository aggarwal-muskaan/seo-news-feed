import Head from "next/head";
import Link from "next/link";
import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { formatDate } from "../util/formatter";
import { TLayoutProps } from "../util/types";

function Layout(props: TLayoutProps) {
  const { news } = props;
  const movingLinks = [
    { text: "Bitcoin", page: "/bitcoin" },
    { text: "Weather", page: "/weather" },
    { text: "Tesla", page: "/tesla" },
    { text: "Sports", page: "/sports" },
    { text: "Entertain", page: "/entertain" },
    { text: "Apple", page: "/apple-headlines" },
    { text: "BBC News", page: "/bbc-news" },
    { text: "Sensex", page: "/sensex" },
    { text: "Covid cases", page: "/covid" },
    { text: "Business", page: "/business" },
    { text: "Delhi Pollution", page: "/delhi-pollution" },
    { text: "Economy", page: "/economy" },
    { text: "Fashion Trends", page: "/fashion" },
    { text: "War", page: "/world-war" },
    { text: "Health", page: "/health" },
    { text: "Education", page: "/education" },
    { text: "Financials", page: "/finance" },
  ];

  return (
    <div>
      <Box>
        <Heading>NEWS</Heading>
      </Box>
      <Marquee direction="right" pauseOnHover>
        {movingLinks.map((item, index) => (
          <Flex key={index}>
            <Link href={item.page} passHref>
              <a>{item.text}</a>
            </Link>
            <section>&nbsp;&nbsp;|&nbsp;&nbsp; </section>
          </Flex>
        ))}
      </Marquee>
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
    </div>
  );
}

export default Layout;
