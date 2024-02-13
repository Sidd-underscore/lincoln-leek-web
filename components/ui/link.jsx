import { cn } from "@/lib/utils"

export function Link({className, href}) {
    return (
        <Link className={cn("border-b border-emerald-500 border-2", className)} href={href}>Submit an article</Link>
    )
}