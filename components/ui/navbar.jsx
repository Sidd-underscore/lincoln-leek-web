"use client";

import { motion } from "framer-motion";
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
    path: "/about",
  },
  {
    name: "View Articles",
    path: "/articles",
  },
  {
    name: "Submit an Article",
    path: "/submit",
  },
  {
    name: "Brand",
    path: "/brand",
  },
];

export function Navbar() {
  const { theme } = useTheme();
  const pathName = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathName);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 760);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 flex h-20 w-full items-center justify-center border-b border-stone-200 bg-stone-50/50 text-center shadow-md backdrop-blur-md dark:border-white/[.1] dark:bg-stone-800/50">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-3">
        <div className="w-fit">
          <div className="relative mt-1 block h-[100px] w-[210px] text-center">
            <Link href="/" className="not-prose block !border-none">
              <Image
                alt="the Leek logo"
                className="absolute block"
                src={
                  theme === "dark"
                    ? "/brand/leek-banner-dark.png"
                    : "/brand/leek-banner-light.png"
                }
                width={1255}
                height={400}
              />
            </Link>
          </div>
        </div>
        {isDesktop ? (
          <>
            <div className="flex w-full justify-end">
              <nav className="relative flex w-fit items-center z-[100] justify-end rounded-full border border-emerald-800/50 text-sm">
                {links.map((link, index) => {
                  const isActive = link.path
                    .replace("/", "")
                    .includes(pathName.replace("/", ""));
                  
                  return (
                    <Link
                      className={`${index === 0 ? "rounded-l-full !pl-3" : index === links.length - 1 ? "rounded-r-full !pr-3" : ""} relative border-none px-2 py-1.5 text-center transition ${pathName ? (isActive ? "bg-emerald-100 dark:bg-emerald-900 " : "bg-transparent") : ""}`}
                      key={link.path}
                      href={link.path}
                      data-active={isActive}
                      onMouseEnter={() => setHoveredPath(link.path)}
                      onMouseLeave={() => setHoveredPath(pathName)}
                    >
                      {link.name}
                      {link.path === hoveredPath && (
                        <motion.div
                          className={`absolute bottom-0 left-0 -z-10 h-full ${index === 0 ? "rounded-l-full !pl-3" : index === links.length - 1 ? "rounded-r-full !pr-3" : ""} bg-emerald-50 dark:bg-emerald-900/60`}
                          layoutId="navbar"
                          aria-hidden="true"
                          style={{
                            width: "100%",
                          }}
                          transition={{ type: "spring", duration: 0.4 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="ml-2 flex items-center justify-end">
              <ModeToggle />
            </div>
          </>
        ) : (
          <div className="flex w-full items-center justify-end space-x-0">
            <ModeToggle className="h-10 w-10 rounded-r-none" />

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-l-none"
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
                        <Link href={link.path}>{link.name}</Link>
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
