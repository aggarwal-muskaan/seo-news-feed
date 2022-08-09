import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Box, Flex, Heading } from "@chakra-ui/react";

function Header() {
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
    </Box>
  );
}

export default Header;
