import { cn } from "@/lib/utils";
import { default as NextLink } from "next/link";

export function Link({ className, href, children, ...props }) {
  return (
    <NextLink
      className={cn("hover:border-b focus:border-b-2 text-emerald-500 hover:border-emerald-500 border-transparent transition-all focus:border-emerald-500", className)}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
}
