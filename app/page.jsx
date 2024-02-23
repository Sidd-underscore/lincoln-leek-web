import Image from "next/image";
import { Footer } from "@/components/ui/footer";
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

      <Footer />
    </main>
  );
}
