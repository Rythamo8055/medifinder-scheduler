import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        className="pl-10 pr-4 py-2 w-full"
        placeholder="Search for medicines..."
        type="search"
      />
    </div>
  );
};

export default SearchBar;