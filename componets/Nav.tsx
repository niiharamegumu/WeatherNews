import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { VFC } from "react";

export const Nav: VFC = (props) => {
  return (
    <Box as="nav">
      <Wrap>
        <WrapItem>
          <Link href="/">ヘッドニュース</Link>
        </WrapItem>
      </Wrap>
    </Box>
  );
};
