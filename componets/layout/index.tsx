import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Box, ChakraProvider, Flex, Switch } from "@chakra-ui/react";
import { ReactNode, useState, VFC } from "react";
import { darkTheme, normalTheme } from "../../theme/theme";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  const { children } = props;
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ChakraProvider
      resetCSS={true}
      theme={isDarkTheme ? darkTheme : normalTheme}
    >
      <Header />
      <Flex
        justify="center"
        align="center"
        p={{ base: "20px 0 10px", md: "40px 0 0px" }}
        gap={4}
      >
        {isDarkTheme ? <MoonIcon w={8} h={8} /> : <SunIcon w={8} h={8} />}
        <Switch onChange={() => setIsDarkTheme(!isDarkTheme)} />
      </Flex>
      <Box as="main" m={{ base: 4, md: 10 }}>
        {children}
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
