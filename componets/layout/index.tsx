import { Box, ChakraProvider } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";
import theme from "../../theme/theme";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Header />
      <Box as="main" m={{ base: 4, md: 10 }}>
        {children}
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
