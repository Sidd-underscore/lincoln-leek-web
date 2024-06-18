"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Link } from "../ui/link";
import { AuthorCard } from "../author/author-card";

export function ArticlesList() {
  // TODO: Add pagination lol
  const [articles, setArticles] = useState([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/articles")
      .then((response) => response.json())
      .then((data) => {
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
    <div className="grid md:space-x-4 md:grid-cols-2 xl:grid-cols-3">
      {articles.length > 0
        ? articles.map((article, index) => (
            <div key={article.id}>
              <h3>
                <Link href={`/articles/${article.id}`}>{article.title}</Link>
              </h3>
              <p className="text-sm text-stone-400 dark:text-stone-500 flex items-center space-x-2">
                <span>{article.date} • by </span><AuthorCard authorId={article.author.id} />
              </p>
              <div className="prose-sm prose-stone relative h-full max-h-24 md:max-h-36 overflow-hidden dark:prose-invert after:absolute after:bottom-0 after:left-0 after:right-0 after:h-24 after:max-h-full after:bg-[linear-gradient(to_bottom,transparent,var(--white)_90%)] after:content-[''] prose-h1:text-xl prose-p:text-xs dark:after:bg-[linear-gradient(to_bottom,transparent,var(--stone-900)_90%)]">
                <Markdown>{article.content}</Markdown>
              </div>
            </div>
          ))
        : [1, 2, 3, 4, 5, 6].map((article, index) => (
            <div key={article}>
              <h3 className="h-[1.5em] w-[75%] animate-pulse rounded-md bg-stone-200/75 dark:bg-stone-800/75 ">
                <span className="sr-only">Loading...</span>
              </h3>
              <p className="h-[0.875rem] w-48 animate-pulse rounded-md bg-stone-200/75 dark:bg-stone-800/75 text-sm text-stone-400 dark:text-stone-500" />
              <div className="prose-sm prose-stone relative h-24 md:h-36 w-full animate-pulse overflow-hidden rounded-md bg-stone-200/75 dark:bg-stone-800/75 dark:prose-invert after:absolute after:bottom-0 after:left-0 after:right-0 after:h-24 after:bg-[linear-gradient(to_bottom,transparent,var(--white)_90%)] after:content-[''] prose-h1:text-xl prose-p:text-xs dark:after:bg-[linear-gradient(to_bottom,transparent,var(--stone-900)_90%)]" />
            </div>
          ))}
    </div>
  );
}
