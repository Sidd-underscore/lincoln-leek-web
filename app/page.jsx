import Image from "next/image";
import {Link} from "@/components/ui/link";

export default function Home() {
  return (
    <main className="flex relative items-center justify-center p-24 min-h-screen">
      <Image
        alt="the Leek logo"
        className="aspect-square h-auto w-auto max-h-[50vh]"
        src="/brand/leek-logo-main.png"
        width={0}
        height={0}
        sizes="100vw"
      />

      <div className="flex space-x-4 absolute bottom-4 mx-auto w-auto">
        <div>
          <Link href="/about">About us</Link>
        </div>

        <div>
          <Link href="/articles">View articles</Link>
        </div>

        <div>
          <Link href="/submit">Submit an article</Link>
        </div>
      </div>
    </main>
  );
}
