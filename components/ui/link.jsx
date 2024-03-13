import { cn } from "@/lib/utils";
import { default as NextLink } from "next/link";

export function Link({ className, href, children, ...props }) {
  return (
    <NextLink
      className={cn(
        "border-transparent text-emerald-500 no-underline transition-all hover:border-b-2 hover:border-emerald-500 focus:border-b-2 focus:border-emerald-500",
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
}
