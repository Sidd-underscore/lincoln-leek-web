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
import { usePathname } from "next/navigation";

const links = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "View Articles",
    link: "/articles",
  },
  {
    name: "Submit an Article",
    link: "/submit",
  },
  {
    name: "Brand",
    link: "/brand",
  },
];

export function Navbar() {
  const { theme } = useTheme();
  const pathName = usePathname();
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
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-3">
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
              <div className="flex justify-end items-center space-x-1">
                {links.map((link) => (
                  <Link
                    className={`border-none rounded-md px-2 py-1.5 text-center transition ${pathName ? link.link.replace("/", "").includes(pathName.replace("/", "")) ? "bg-emerald-100 dark:bg-emerald-950 " : "bg-transparent dark:hover:bg-emerald-950/60 hover:bg-emerald-50" : undefined}`}
                    key={link.name}
                    href={link.link}
                  >
                      {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-2 flex items-center justify-end">
              <ModeToggle />
            </div>
          </>
        ) : (
          <div className="w-full space-x-0 flex items-center justify-end">
            <ModeToggle className="rounded-r-none h-10 w-10" />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none h-10 w-10"
                >
                  <HamburgerMenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription className="space-y-4 pt-8 text-lg ">
                    {links.map((link) => (
                      <div className="w-full text-center" key={link.name}>
                        <Link href={link.link}>{link.name}</Link>
                      </div>
                    ))}
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
