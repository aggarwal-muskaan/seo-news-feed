import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { THeaderProps } from "../util/types";

function Header(props: THeaderProps) {
  const { mainHeading } = props;
  const [screenWidth, setScreenWidth] = useState(375);

  useEffect(() => {
    const deviceScreenWidth = window.innerWidth;
    setScreenWidth(deviceScreenWidth);
    console.log("screenWidth", screenWidth);
    /* eslint-disable-next-line */
  }, []);

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
    <Box>
      <Box>
        <Heading
          py="1rem"
          px={{ base: ".7rem", md: "1.3rem", lg: "2rem" }}
          color="blue.300"
        >
          <Link href={"/"}>NEWS</Link>
        </Heading>
      </Box>
      <Box pb="2rem">
        <Marquee
          direction="right"
          pauseOnHover
          gradient={screenWidth >= 900 ? true : false}
        >
          {movingLinks.map((item, index) => (
            <Flex key={index} color="orange.400">
              <Link href={item.page}>{item.text}</Link>
              <Box color="gray.600">&nbsp;&nbsp;|&nbsp;&nbsp; </Box>
            </Flex>
          ))}
        </Marquee>
      </Box>
      <Box>
        <Center>
          <Heading size="md" color="red.400">
            {mainHeading}
          </Heading>
        </Center>
      </Box>
    </Box>
  );
}

export default Header;
