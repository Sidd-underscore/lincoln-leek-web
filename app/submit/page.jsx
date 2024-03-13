import { Link } from "@/components/ui/link";
import { SubmitArticleForm } from "@/components/submit/form";

export const metadata = {
  title: "Submit an article",
};

export default function SubmitPage() {
  return (
    <>
    <div className="flex max-w-none p-12 justify-center prose prose-stone dark:prose-invert prose-h1:text-7xl xl:prose-xl mt-24">
        <div className="w-screen">
          <h1 className="font-heading italic">Submit an Article</h1>
          <p>
            Ready to get heard? Make sure you article follows the{" "}
            <Link href="/guidelines">guidelines!</Link>
          </p>
          <SubmitArticleForm />
        </div>
      </div>
    </>
  );
}
