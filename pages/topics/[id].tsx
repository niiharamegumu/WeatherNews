import { Box, Grid, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { VFC } from "react";
import { Article } from "../../componets/Article";
import { PrimaryTitle } from "../../componets/PrimaryTitle";
import { ArticleType } from "../../types/article";

type Props = {
  articles: ArticleType[];
  title: string;
};

const Topic: VFC<Props> = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { articles, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box>
        <PrimaryTitle>{title}</PrimaryTitle>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            lg: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={{ base: 6, md: 8 }}
        >
          {articles.map((article) => (
            <Article
              key={article.url}
              article={article}
              title={article.title}
            ></Article>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default Topic;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const title = params!.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PROJECT_BASE_URL}/api/articlesByCategory?category=${title}`
  );
  const json = await response.json();
  const articles = json.articles;

  return {
    props: { articles, title },
    revalidate: 60 * 10,
  };
};
