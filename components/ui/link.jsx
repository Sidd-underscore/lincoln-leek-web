import { cn } from "@/lib/utils";
import { default as NextLink } from "next/link";

export function Link({ className, href, children, ...props }) {
  return (
    <NextLink
      className={cn("border-b border-emerald-500 border-2", className)}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
}
