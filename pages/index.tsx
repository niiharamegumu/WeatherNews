import { Box, Grid, Heading } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { VFC } from "react";
import { Article } from "../componets/Article";
import { PrimaryTitle } from "../componets/PrimaryTitle";
import { ArticleType } from "../types/article";

type Props = {
  articles: ArticleType[];
};

const Home: VFC<Props> = (props) => {
  const { articles } = props;

  return (
    <Box>
      <Head>
        <title>News</title>
      </Head>
      <Box>
        <PrimaryTitle>Head News.</PrimaryTitle>
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
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PROJECT_BASE_URL}/api/newsArticles`
  );
  const json = await response.json();
  const articles = json.articles;
  return {
    props: {
      articles,
    },
    revalidate: 100,
  };
};
