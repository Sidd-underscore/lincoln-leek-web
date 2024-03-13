export default function ArticlesLayout({ children }) {
  return (
    <div className="flex max-w-none p-12 justify-center prose prose-stone dark:prose-invert prose-h1:text-7xl xl:prose-xl mt-24">
      <div className="w-screen">{children}</div>
    </div>
  );
}
