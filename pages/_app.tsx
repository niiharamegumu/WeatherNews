import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/theme";
import { Header } from "../componets/Header";
import { Footer } from "../componets/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Header />
      <Box as="main" h="100vh">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
