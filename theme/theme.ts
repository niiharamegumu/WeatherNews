import { extendTheme } from "@chakra-ui/react";

export const darkTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "white",
      },
      a: { color: "gray.100" },
    },
  },
});
export const normalTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "Black",
      },
      a: { color: "gray.100" },
    },
  },
});
