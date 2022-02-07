import { Heading } from "@chakra-ui/react";
import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryTitle: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <Heading
      mb={{ base: 5, md: 8 }}
      fontSize={{ base: "xl", md: "4xl" }}
      textTransform="capitalize"
    >
      {children}
    </Heading>
  );
};
