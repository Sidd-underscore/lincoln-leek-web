import { AuthorDescription } from "@/components/author/author-description";

export default function AuthorPage() {
  return (
    <div className="prose prose-stone relative mt-24 flex max-w-none justify-center p-6 dark:prose-invert xl:prose-xl prose-h1:text-7xl md:p-12">
      <AuthorDescription />

      <svg
        viewBox="0 0 200 200"
        className="absolute -left-24 -top-32 -z-10 w-[36rem] max-w-[95vw] blur-2xl overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-emerald-200 dark:fill-emerald-800"
          d="M43.7,-21.9C47.1,-19.3,33.9,-3.7,23.8,2.9C13.8,9.5,6.9,7,-7.6,11.4C-22.1,15.8,-44.2,27.1,-51.7,22C-59.1,17,-51.9,-4.4,-40.8,-11.5C-29.7,-18.6,-14.9,-11.4,2.6,-12.9C20.1,-14.4,40.2,-24.6,43.7,-21.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}
