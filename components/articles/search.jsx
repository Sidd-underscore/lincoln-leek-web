import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
export function SearchBar() {
  return (
    <div class="relative w-full">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon />
      </div>
      <Input className="ps-10 w-full" placeholder="2023 California monkey" />
    </div>
  );
}
