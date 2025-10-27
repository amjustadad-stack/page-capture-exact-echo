import { UserPlus, Download, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactsHeader = () => {
  return (
    <div className="flex gap-3">
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <UserPlus className="mr-2 h-4 w-4" />
        Add contact
      </Button>
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <Download className="mr-2 h-4 w-4" />
        Import CSV
      </Button>
      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        <Tag className="mr-2 h-4 w-4" />
        Edit tags
      </Button>
    </div>
  );
};
