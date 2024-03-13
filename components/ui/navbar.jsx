"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Link } from "./link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/ui/theme-switcher";
import { Button } from "./button";

export function Navbar() {
  const { theme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 760);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-center border-b border-stone-200 bg-stone-50/50 text-center shadow-md backdrop-blur-md dark:border-white/10 dark:bg-stone-950/75">
      <div className="flex w-full max-w-7xl items-center justify-between px-3">
        <div className="w-full">
          <div className="relative mt-1 block h-[100px] w-[210px] text-center">
            <Link href="/" className="not-prose block !border-none">
              {theme === "dark" ? (
                <Image
                  alt="the Leek logo"
                  className="absolute block"
                  src="/brand/leek-banner-dark.png"
                  width={1255}
                  height={400}
                />
              ) : (
                <Image
                  alt="the Leek logo"
                  className="absolute block"
                  src="/brand/leek-banner-light.png"
                  width={1255}
                  height={400}
                />
              )}
            </Link>
          </div>
        </div>
        {isDesktop ? (
          <>
            <div className="w-full">
              <div className="grid grid-flow-col grid-rows-1 items-center space-x-4 divide-x divide-emerald-200 dark:divide-emerald-800">
                <div className="w-full text-center">
                  <Link href="/about">About us</Link>
                </div>
                <div className="w-full text-center">
                  <Link href="/articles">View articles</Link>
                </div>
                <div className="w-full text-center">
                  <Link href="/submit">Submit an article</Link>
                </div>
                <div className="w-full text-center">
                  <Link href="/brand">Brand</Link>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-end">
              <ModeToggle />
            </div>
          </>
        ) : (
          <div className="w-full space-x-1">
            <ModeToggle className="rounded-r-none" />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                >
                  <HamburgerMenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription className="space-y-4 pt-8 text-lg ">
                    <div className="w-full text-center">
                      <Link href="/about">About us</Link>
                    </div>
                    <div className="w-full text-center">
                      <Link href="/articles">View articles</Link>
                    </div>
                    <div className="w-full text-center">
                      <Link href="/submit">Submit an article</Link>
                    </div>
                    <div className="w-full text-center">
                      <Link href="/brand">Brand</Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </div>
  );
}
