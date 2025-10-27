import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactsTable = () => {
  return (
    <div className="border rounded-lg bg-white">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-b">
            <TableHead className="w-12">
              <div className="flex items-center gap-2">
                <Checkbox />
                <span className="text-xs text-muted-foreground">Select<br/>All</span>
              </div>
            </TableHead>
            <TableHead className="text-muted-foreground font-medium">NAME</TableHead>
            <TableHead className="text-muted-foreground font-medium">PHONE</TableHead>
            <TableHead className="text-muted-foreground font-medium">COMPANY</TableHead>
            <TableHead className="text-muted-foreground font-medium">EMAIL</TableHead>
            <TableHead className="text-muted-foreground font-medium">WEBSITE</TableHead>
            <TableHead className="text-muted-foreground font-medium">TAGS</TableHead>
            <TableHead className="text-muted-foreground font-medium">NOTE</TableHead>
            <TableHead className="text-muted-foreground font-medium text-right">
              ACTIONS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={9} className="h-64 text-center">
              <p className="text-muted-foreground">No contacts found</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
