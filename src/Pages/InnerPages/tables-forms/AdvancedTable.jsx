import { useMemo, useState } from "react";
import { Button } from "oks-ui";
import { Download, Trash2 } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import DataTable from "../../../Components/ui/DataTable";
import TableToolbar from "../../../Components/ui/TableToolbar";
import EmptyState from "../../../Components/ui/EmptyState";
import { RICH_COLUMNS } from "./columns";
import { PEOPLE } from "../../../data/people";

const TEAM_FILTERS = [
  { key: "Engineering", label: "Engineering" },
  { key: "Design", label: "Design" },
  { key: "Product", label: "Product" },
  { key: "Sales", label: "Sales" },
];

const AdvancedTable = () => {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState([]);
  const [selected, setSelected] = useState([]);

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PEOPLE.filter(
      (p) =>
        (teams.length === 0 || teams.includes(p.team)) &&
        (q === "" || p.name.toLowerCase().includes(q))
    );
  }, [search, teams]);

  const toggleTeam = (key) =>
    setTeams((t) => (t.includes(key) ? t.filter((k) => k !== key) : [...t, key]));

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Advanced table"
        subtitle="Search, filters, sorting, pagination and a bulk-action bar when rows are selected."
      />
      <Surface padding="none">
        <TableToolbar
          search={search}
          onSearch={setSearch}
          searchPlaceholder="Search by name…"
          filters={TEAM_FILTERS}
          active={teams}
          onFilterToggle={toggleTeam}
          actions={
            <Button
              variant="bordered"
              size="sm"
              startContent={<Download size={15} />}
            >
              Export
            </Button>
          }
        />

        {selected.length > 0 && (
          <div className="flex items-center justify-between bg-[var(--oks-color-primary-50)] px-4 py-2.5 text-sm">
            <span className="font-medium text-[color:var(--oks-color-primary-700)]">
              {selected.length} selected
            </span>
            <div className="flex gap-2">
              <Button size="sm" variant="soft" color="primary">
                Change role
              </Button>
              <Button
                size="sm"
                variant="soft"
                color="danger"
                startContent={<Trash2 size={14} />}
              >
                Remove
              </Button>
            </div>
          </div>
        )}

        {rows.length === 0 ? (
          <EmptyState title="No people match" />
        ) : (
          <DataTable
            columns={RICH_COLUMNS}
            rows={rows}
            getRowKey={(row) => row.id}
            selectable
            onSelectionChange={setSelected}
            pageSize={8}
          />
        )}
      </Surface>
    </div>
  );
};

export default AdvancedTable;
