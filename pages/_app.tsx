import Head from "next/head";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="robots" content="all" />
      </Head>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
