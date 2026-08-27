import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import DataTable from "../../../Components/ui/DataTable";
import { RICH_COLUMNS } from "./columns";
import { PEOPLE } from "../../../data/people";

const ResponsiveTable = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Responsive table"
      subtitle="Wide content scrolls horizontally inside its own container; the page never does."
    />
    <Surface padding="none">
      <DataTable
        columns={[...RICH_COLUMNS, { key: "joined", header: "Joined", align: "right" }]}
        rows={PEOPLE.slice(0, 10)}
        getRowKey={(row) => row.id}
      />
    </Surface>
    <p className="text-sm text-[color:var(--app-fg-muted)]">
      Resize the window — the table gets its own horizontal scrollbar rather than
      pushing the layout.
    </p>
  </div>
);

export default ResponsiveTable;
