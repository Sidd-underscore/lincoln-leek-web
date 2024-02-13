import { cn } from "@/lib/utils";
import { Link as NextLink } from "next/link";

export function Link({ className, href }) {
  return (
    <NextLink
      className={cn("border-b border-emerald-500 border-2", className)}
      href={href}
    >
      Submit an article
    </NextLink>
  );
}
