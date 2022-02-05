import { Flex, Box } from "@chakra-ui/react";
import { VFC } from "react";

export const Footer: VFC = () => {
  return (
    <Box as="footer">
      <Flex pt="20px" justify="center" borderTop="1px" borderColor="gray.600">
        by niihara megumu.
      </Flex>
    </Box>
  );
};
