import { Flex } from "@chakra-ui/react";
import { VFC } from "react";

export const NotImage: VFC = () => {
  return (
    <Flex
      h={220}
      w="100%"
      bg="gray.700"
      justify="center"
      align="center"
      fontSize="xl"
      color="gray.500"
    >
      Not Image...
    </Flex>
  );
};
