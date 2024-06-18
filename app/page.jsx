import Image from "next/image";
import { FAQ } from "@/components/home/faq";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="p-4 md:p-16 w-[calc(100vw_-_16px)] max-w-7xl">
      <div className="min-w-full dark:bg-grid-white/[0.2] bg-grid-stone-950/[0.2] relative -mt-16 flex min-h-screen items-center justify-center space-x-0">
        <div className="max-w-7xl w-full pointer-events-none absolute inset-0 flex items-center justify-start md:justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,rgb(0_0_0))] dark:bg-stone-900" />

        <Spotlight
          className="-top-0 left-0 md:top-24 md:left-16"
        />

        <div className="max-w-xl z-10">
          <h1 className="text-6xl">
            Welcome to{" "}
            <span className="font-heading text-7xl font-bold italic">
              the Lincoln Leek
            </span>
          </h1>
          <p className="mt-6 text-xl">
            A newspaper focused on making journalism open, enabling stories from
            anyone to be heard by all.
          </p>
        </div>
      </div>

      <div className="w-full text-left">
        <FAQ />
      </div>
    </div>
  );
}
