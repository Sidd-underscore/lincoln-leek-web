export default function ArticlesLayout({ children }) {
  return (
    <div className="flex max-w-none min-w-screen justify-center prose prose-stone dark:prose-invert prose-h1:text-7xl p-12">
      <div className="w-[80rem] max-w-screen">{children}</div>
    </div>
  );
}
