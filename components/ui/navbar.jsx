"use client"

import { useTheme } from "next-themes";
import Image from "next/image";

export function Navbar() {
  const { theme } = useTheme();
  return (
    <div>
      <div>
        <div>
          {theme === "light" ? (
            <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/brand/leek-banner-light.png"
              alt="the Leek logo"
              priority
              width={354}
              height={781.5}
            />
          ) : (
            <Image
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/brand/leek-banner-dark.png"
              alt="the Leek logo"
              priority
              width={354}
              height={781.5}
            />
          )}
        </div>
      </div>
    </div>
  );
}
