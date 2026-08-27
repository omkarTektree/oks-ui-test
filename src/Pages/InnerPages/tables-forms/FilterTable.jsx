import { useMemo, useState } from "react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import DataTable from "../../../Components/ui/DataTable";
import TableToolbar from "../../../Components/ui/TableToolbar";
import EmptyState from "../../../Components/ui/EmptyState";
import { RICH_COLUMNS } from "./columns";
import { PEOPLE } from "../../../data/people";

const STATUS_FILTERS = [
  { key: "Active", label: "Active" },
  { key: "Pending", label: "Pending" },
  { key: "Archived", label: "Archived" },
];

const FilterTable = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState([]);

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PEOPLE.filter(
      (p) =>
        (active.length === 0 || active.includes(p.status)) &&
        (q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.email.toLowerCase().includes(q) ||
          p.team.toLowerCase().includes(q))
    );
  }, [search, active]);

  const toggle = (key) =>
    setActive((a) => (a.includes(key) ? a.filter((k) => k !== key) : [...a, key]));

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Filter table"
        subtitle="Client-side search and toggleable filter chips."
      />
      <Surface padding="none">
        <TableToolbar
          search={search}
          onSearch={setSearch}
          searchPlaceholder="Search name, email, team…"
          filters={STATUS_FILTERS}
          active={active}
          onFilterToggle={toggle}
        />
        {rows.length === 0 ? (
          <EmptyState
            title="No matches"
            description="Try a different search term or clear the filters."
          />
        ) : (
          <DataTable
            columns={RICH_COLUMNS}
            rows={rows}
            getRowKey={(row) => row.id}
            pageSize={8}
          />
        )}
      </Surface>
    </div>
  );
};

export default FilterTable;
