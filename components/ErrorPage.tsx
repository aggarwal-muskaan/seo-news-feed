import { Box, Flex, Heading, Square } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function ErrorPage() {
  return (
    <Box w="100vw" h="100vh">
      <Box>
        <Heading
          py="1rem"
          px={{ base: ".7rem", md: "1.3rem", lg: "2rem" }}
          color="blue.300"
        >
          <Link href={"/"}>NEWS</Link>
        </Heading>
      </Box>
      <Flex
        w="100%"
        h="80%"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Heading color="red.300" display="block">
          Oops!!
        </Heading>
        <Heading color="red.300" size="lg">
          An error occurred.
        </Heading>
      </Flex>
    </Box>
  );
}

export default ErrorPage;
