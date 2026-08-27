import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import DataTable from "../../../Components/ui/DataTable";
import { RICH_COLUMNS } from "./columns";
import { PEOPLE } from "../../../data/people";

const DataTablePage = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Data table"
      subtitle="Sortable headers, row selection, and pagination — all on the same component."
    />
    <Surface padding="none">
      <DataTable
        columns={RICH_COLUMNS}
        rows={PEOPLE}
        getRowKey={(row) => row.id}
        selectable
        pageSize={10}
      />
    </Surface>
    <p className="text-sm text-[color:var(--app-fg-muted)]">
      Click a header with the sort arrows to sort; the checkbox column selects
      rows on the current page; the footer pages through all {PEOPLE.length}{" "}
      records.
    </p>
  </div>
);

export default DataTablePage;
