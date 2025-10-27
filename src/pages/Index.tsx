import { ContactsHeader } from "@/components/ContactsHeader";
import { ContactsSearch } from "@/components/ContactsSearch";
import { ContactsTable } from "@/components/ContactsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-7xl space-y-6">
        <ContactsHeader />
        <ContactsSearch />
        <ContactsTable />
      </div>
    </div>
  );
};

export default Index;
