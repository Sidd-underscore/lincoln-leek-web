import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image
        alt="the Leek logo"
        className="aspect-square h-auto w-auto max-h-[50vh]"
        src="/brand/leek-logo-main.png"
        width={0}
        height={0}
        sizes="100vw"
      />
    </main>
  );
}
