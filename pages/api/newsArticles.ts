// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ArticleType } from "../../types/article";

type ArticlesType = {
  articles: ArticleType[];
};
type Error = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticlesType | Error>
) {
  const pageSize = 40;
  try {
    const result = await fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`
    );
    const json = await result.json();
    const articles = json.articles;
    res.status(200).send({ articles });
  } catch (err) {
    res.status(500).send({ error: "Failed to retrieve." });
  }
}
