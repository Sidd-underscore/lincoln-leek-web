"use client";

import { useEffect, useState } from "react";
import { objectMap } from "../../lib/utils";
import Markdown from "react-markdown";
import { Link } from "../ui/link";

export function ArticlesList() {
  // TODO: Add pagination lol
  const [articles, setArticles] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/fetch-articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        const articlesArray = [];

        Object.keys(data.message).forEach((year) => {
          Object.keys(data.message[year]).forEach((month) => {
            Object.keys(data.message[year][month]).forEach((day) => {
              Object.keys(data.message[year][month][day]).forEach(
                (articleId) => {
                  const article = data.message[year][month][day][articleId];
                  articlesArray.push({
                    ...article,
                    id: article.date + "/" + articleId,
                    date: new Date(article.date).toDateString(),
                  });
                },
              );
            });
          });
        });

        setArticles(articlesArray);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={article.id}>
            <h3>
              <Link href={`/articles/${article.id}`}>{article.title}</Link>
            </h3>
            <p className="text-sm text-stone-400 dark:text-stone-500">
              {article.date}{" "}•{" "}
              <Link className="text-emerald-400 dark:text-emerald-600 border-emerald-400 dark:border-emerald-600" href={`/author/${article.author.id}`}>
                {article.author.name}
              </Link>
            </p>
            <p className="prose-sm prose-stone relative h-full max-h-36 overflow-hidden dark:prose-invert after:absolute after:bottom-0 after:left-0 after:right-0 after:h-24 after:bg-[linear-gradient(to_bottom,transparent,var(--white)_90%)] after:content-[''] prose-h1:text-xl prose-p:text-xs dark:after:bg-[linear-gradient(to_bottom,transparent,var(--stone-950)_90%)]">
              <Markdown>{article.content}</Markdown>
            </p>
          </div>
        ))
      ) : (
        <p className="text-stone-500">Loading...</p>
      )}
    </div>
  );
}
