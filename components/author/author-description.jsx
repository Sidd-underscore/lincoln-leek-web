"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function AuthorDescription() {
  const { authorId } = useParams();

  const [authorData, setAuthorData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch("/api/author/" + authorId)
      .then((response) => response.json())
      .then((data) => {
        setAuthorData(data.message);
      })
      .catch((error) => console.log(error));
  }, [authorId]);

  return (
    <div>
      {authorData ? (
        <div className="text-left">
          <sub>Author Spotlight</sub>
          <div>
            <h1>
              {authorData.name}{" "}
              <sub className="-ml-2 text-sm font-normal">
                {authorData.pronouns}
              </sub>
            </h1>
          </div>
          <div>
            <p className="text-base">{authorData.description.long}</p>
          </div>
        </div>
      ) : (
        <div className="text-left">
          <sub>Author Spotlight</sub>
          <div>
            <h1 className="h-[4.5rem] w-24 animate-pulse rounded-md bg-stone-200/50 dark:bg-stone-700/50" />
          </div>
          <div>
            <p className="h-48 w-[calc(100vw_-_64px)] max-w-6xl animate-pulse rounded-md bg-stone-200/50 dark:bg-stone-700/50" />
          </div>
        </div>
      )}
    </div>
  );
}
