import Image from "next/image";
import { Link } from "@/components/ui/link";
import { FAQ } from "@/components/home/faq";

export default function Home() {
  return (
    <main className="flex relative items-center justify-center p-24 min-h-screen">
      <div className="flex relative items-center justify-center space-x-20 w-full">
        <div className="w-1/3">
          <h1 className="text-6xl">
            Welcome to{" "}
            <span className="font-heading font-bold italic text-7xl">
              the Lincoln Leek
            </span>
          </h1>
          <p className="mt-6 text-xl">
            A newspaper focused on making journalism open, enabling stories from
            anyone to be heard by all.
          </p>
        </div>

        <Image
          alt="the Leek logo"
          className="aspect-square flex justify-center h-auto w-auto max-h-[40vh]"
          src="/brand/leek-logo-main.png"
          width={0}
          height={0}
          sizes="100vw"
        />

        <div className="max-w-1/3 w-1/3">
          <FAQ />
        </div>
      </div>

      <div className="absolute bottom-4  mx-auto text-center flex flex-row space-x-4">
        <div>
          <Link href="/about">About us</Link>
        </div>

        <div>
          <Link href="/articles">View articles</Link>
        </div>

        <div>
          <Link href="/submit">Submit an article</Link>
        </div>

        <div>
          <Link href="/brand">Brand</Link>
        </div>
      </div>
    </main>
  );
}
