import {
  GridItem,
  Text,
  Link,
  Image,
  Tag,
  Stack,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { useState, VFC } from "react";
import moment from "moment";

import { ArticleType } from "../types/article";
import { NotImage } from "./NotImage";

type Props = {
  article: ArticleType;
  title: string;
};

export const Article: VFC<Props> = (props) => {
  const { article, title } = props;
  const [isError, setIsError] = useState(false);

  const articleTime = moment(article.publishedAt || moment.now());
  return (
    <GridItem>
      <Link
        href={article.url}
        isExternal
        _focus={{ outline: "none" }}
        _hover={{ textDecoration: "none" }}
      >
        <Tooltip
          label={`【概要 (${article.source.name})】 ${article.description}`}
          hasArrow
          p={6}
          bg="gray.500"
        >
          <Stack>
            {article.urlToImage && !isError ? (
              <Image
                src={article.urlToImage}
                alt={`${article.title} image`}
                h={220}
                objectFit="cover"
                onError={() => setIsError(true)}
              />
            ) : (
              <NotImage />
            )}
            <Tag
              justifyContent="center"
              alignItems="center"
              py={2}
              bg="gray.400"
            >
              {articleTime.format("YYYY年MM月DD日 HH時mm分")}
              {" : "}
              {articleTime.fromNow().slice(0, 1) === "a"
                ? "1"
                : articleTime.fromNow().slice(0, 1)}
              時間前
            </Tag>
            <Text fontSize="sm">{title}</Text>
          </Stack>
        </Tooltip>
      </Link>
    </GridItem>
  );
};
