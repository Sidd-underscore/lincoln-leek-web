import { Link } from "@/components/ui/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="absolute bottom-4 mx-auto flex w-full justify-center flex-row space-x-4 text-center items-center">
        <Link href="/" className="!border-none"><Image src="/brand/leek-logo-favicon.svg" alt="Go home" title="Home" width={24} height={24}/></Link>

        <Link href="/about">About us</Link>

        <Link href="/articles">View articles</Link>

        <Link href="/submit">Submit an article</Link>

        <Link href="/brand">Brand</Link>
    </div>
  );
}
