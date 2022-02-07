import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { VFC } from "react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Nav } from "./Nav";

export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as="header">
      <Flex
        alignItems="center"
        h="80px"
        p={{ base: 4, md: 10 }}
        gap="1em"
        borderBottom="1px"
        borderColor="gray.600"
      >
        <HamburgerIcon w={8} h={8} cursor="pointer" onClick={onOpen} />
        <Text fontSize="2xl">Pick Up News</Text>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.600">
          <DrawerCloseButton
            color="white"
            _hover={{ transform: "scale(1.5)" }}
            _focus={{ outline: "none" }}
          />
          <DrawerBody
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Nav onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
