export default function ArticlesLayout({ children }) {
  return (
    <div className="prose prose-stone mt-24 flex w-screen max-w-7xl justify-center p-6 dark:prose-invert xl:prose-xl prose-h1:text-7xl md:p-12">
      <div className="w-full">{children}</div>
    </div>
  );
}