"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import {AuthorCard} from '../author/author-card';

export function Article() {
  const { articleId, date } = useParams();

  const [articleData, setArticleData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/api/articles/" + date + "/" + articleId)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticleData(data.message);
      })
      .catch((error) => console.log(error));
  }, [articleId, date]);

  return (
    <>
      {articleData ? (
        <>
        <div>
          <h1>{articleData.title}</h1>
          <p className="!-mt-5 text-base text-stone-300 dark:text-stone-400 flex items-center space-x-2">
                <span>{new Date(articleData.date).toDateString()} • by </span><AuthorCard authorId={articleData.author.id} />
              </p>
              </div>
          <Markdown>{articleData.content}</Markdown>
        </>
      ) : (
        <h1>{articleId}</h1>
      )}
    </>
  );
}
