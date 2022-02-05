import { Box, Grid } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { VFC } from "react";
import { Article } from "../componets/Article";
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
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            lg: "repeat(2,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap={{ base: 4, md: 9 }}
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
    "https://weather-news-drdf3xbzc-niiharamegumu.vercel.app/api/newsArticles"
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
