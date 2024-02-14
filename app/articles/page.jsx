import { ArticlesList } from "@/components/articles/list";
import { SearchBar } from "@/components/articles/search";

export const metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  return (
    <div className="w-full">
      <h1 className="italic font-heading">Articles</h1>
      <p className="-mt-6">
        Browse our collection of <span className="font-mono">754 432</span>{" "}
        articles.
      </p>

      <div className="mt-12 w-full">
        <div>
          <SearchBar />
        </div>
        <ArticlesList />
      </div>
    </div>
  );
}
