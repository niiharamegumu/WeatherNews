import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { VFC } from "react";

import { HamburgerIcon } from "@chakra-ui/icons";

export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as="header">
      <Flex
        alignItems="center"
        h="80px"
        p="0 20px"
        gap="1em"
        borderBottom="1px"
        borderColor="gray.600"
      >
        <HamburgerIcon w={8} h={8} cursor="pointer" onClick={onOpen} />
        <Text fontSize="2xl">TrendNews</Text>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color="gray.900">
          <DrawerCloseButton
            color="gray.900"
            _hover={{ bg: "gray.900", color: "white" }}
            _focus={{ outline: "none" }}
          />
          <DrawerHeader>Select News</DrawerHeader>
          <DrawerBody>body</DrawerBody>
          <DrawerFooter>footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
