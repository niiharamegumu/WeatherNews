import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { VFC } from "react";
import { NavLinkType } from "../types/navLink";

const navLinks: NavLinkType[] = [
  {
    path: "/",
    title: "Head News",
  },
  {
    path: "/topics/technology",
    title: "Technology",
  },
  { path: "/topics/business", title: "Business" },
  { path: "/topics/science", title: "Science" },
  { path: "/topics/sports", title: "Sports" },
  { path: "/topics/entertainment", title: "Entertainment" },
  { path: "/topics/health", title: "Health" },
];

type Props = {
  onClick?: () => void;
};

export const Nav: VFC<Props> = (props) => {
  const { onClick } = props;
  return (
    <Box as="nav">
      <Flex gap={10} flexWrap="wrap">
        {navLinks.map((navLink) => (
          <Box key={navLink.path} minW="100%" fontSize="3xl" onClick={onClick}>
            <Link href={navLink.path}>{navLink.title}</Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
