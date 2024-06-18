import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useEffect, useState } from "react";
import { Link } from "../ui/link";
import Image from "next/image";

export function AuthorCard({ authorId }) {
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
    <HoverCard>
      {authorData ? (
        <HoverCardTrigger className="no-underline group flex items-center space-x-2 w-fit not-prose cursor-pointer">
          <Image src={authorData.avatar} alt={authorData.name + "'s avatar"} width={24} height={24} className="rounded-full"/>
          <Link
            className="border-emerald-400  border-b-2 border-b-transparent text-emerald-400 dark:text-emerald-600 group-hover:border-emerald-500 group-focus:border-b-2 group-focus:border-emerald-500"
            href={`/author/${authorData.id}`}
          >
            {authorData.name}
          </Link>
        </HoverCardTrigger>
      ) : (
        <span className="inline-block h-4 rounded-md -mb-1 w-12 animate-pulse bg-stone-200/75 dark:bg-stone-800/75">
          <span className="sr-only">Loading...</span>
        </span>
      )}
      <HoverCardContent>
        {authorData ? (
          <>
            {authorData.description.short}{" "}
            <Link
              className="border-emerald-400 text-emerald-400 dark:border-emerald-600 dark:text-emerald-600"
              href={`/author/${authorData.id}`}
            >
              More...
            </Link>
          </>
        ) : (
          "Loading..."
        )}{" "}
      </HoverCardContent>
    </HoverCard>
  );
}
