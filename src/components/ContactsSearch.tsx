import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const ContactsSearch = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search contacts..."
        className="pl-10 bg-white"
      />
    </div>
  );
};
