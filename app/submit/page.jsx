import { Link } from "@/components/ui/link";
import { SubmitArticleForm } from "@/components/submit/form";

export const metadata = {
  title: "Submit an article",
};

export default function SubmitPage() {
  return (
    <>
      <div className="prose prose-stone mt-24 flex max-w-none justify-center p-6 dark:prose-invert xl:prose-xl prose-h1:text-7xl md:p-12">
        <div>
          <h1 className="font-heading italic">Submit an Article</h1>
          <p>
            Ready to get published? Make sure you article follows the{" "}
            <Link href="/guidelines">guidelines</Link>! 
          </p>
          <SubmitArticleForm />
        </div>
      </div>
    </>
  );
}
