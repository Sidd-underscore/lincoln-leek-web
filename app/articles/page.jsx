import { ArticlesList } from "@/components/articles/list";
import { SearchBar } from "@/components/articles/search";

export const metadata = {
  title: "Articles",
};

export default function ArticlesPage() {


  return (
    <div className="w-full">
      <h1 className="font-heading italic">Articles</h1>
      <div className="-mt-10">
        <SearchBar />
      </div>

      <ArticlesList />
    </div>
  );
}
