import { Link } from "@/components/ui/link";
import { SubmitArticleForm } from "@/components/submit/form";
import { Footer } from "@/components/ui/footer";

export const metadata= {
    title: "Submit an article"
}

export default function SubmitPage() {
  return (
    <>
      <div className="min-w-screen prose prose-stone flex max-w-none justify-center p-12 dark:prose-invert prose-h1:text-7xl">
        <div>
          <h1 className="font-heading italic">Submit an Article</h1>
          <p>
            Ready to get heard? Make sure you article follows the{" "}
            <Link href="/guidelines">guidelines!</Link>
          </p>
          <SubmitArticleForm slackURL={process.env.SLACK_URL}/>
        </div>
      </div>

      <Footer />
    </>
  );
}
