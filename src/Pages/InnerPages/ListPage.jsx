import { useMemo, useState } from "react";
import { Button } from "oks-ui";
import { Plus } from "lucide-react";
import SectionTitle from "../../Components/ui/SectionTitle";
import Surface from "../../Components/ui/Surface";
import DataTable from "../../Components/ui/DataTable";
import TableToolbar from "../../Components/ui/TableToolbar";
import EmptyState from "../../Components/ui/EmptyState";
import StatGroup from "../../Components/ui/StatGroup";
import KpiCard from "../../Components/ui/KpiCard";

/**
 * Generic list screen — the archetype behind ~40 CRUD routes.
 * `config` = { title, subtitle, actionLabel?, columns, rows, getRowKey,
 *   searchKeys?, filters?: [{ key, label, test(row) }], stats?, pageSize? }
 */
const ListPage = ({ config }) => {
  const {
    title,
    subtitle,
    actionLabel,
    columns,
    rows,
    getRowKey = (row) => row.id,
    searchKeys = [],
    filters = [],
    stats = [],
    pageSize = 10,
  } = config;

  const [search, setSearch] = useState("");
  const [active, setActive] = useState([]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((row) => {
      const passSearch =
        q === "" ||
        searchKeys.some((k) => String(row[k] ?? "").toLowerCase().includes(q));
      const passFilters =
        active.length === 0 ||
        active.some((key) => filters.find((f) => f.key === key)?.test(row));
      return passSearch && passFilters;
    });
  }, [rows, search, active, searchKeys, filters]);

  const toggle = (key) =>
    setActive((a) => (a.includes(key) ? a.filter((k) => k !== key) : [...a, key]));

  const showToolbar = searchKeys.length > 0 || filters.length > 0;

  return (
    <div className="space-y-6">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        actions={
          actionLabel && (
            <Button color="primary" size="sm" startContent={<Plus size={15} />}>
              {actionLabel}
            </Button>
          )
        }
      />

      {stats.length > 0 && (
        <StatGroup columns={stats.length === 3 ? 3 : 4}>
          {stats.map((s) => (
            <KpiCard key={s.label} {...s} />
          ))}
        </StatGroup>
      )}

      <Surface padding="none">
        {showToolbar && (
          <TableToolbar
            search={search}
            onSearch={searchKeys.length > 0 ? setSearch : undefined}
            searchPlaceholder={`Search ${title.toLowerCase()}…`}
            filters={filters}
            active={active}
            onFilterToggle={toggle}
          />
        )}
        {filtered.length === 0 ? (
          <EmptyState
            title={`No ${title.toLowerCase()} found`}
            description="Adjust your search or filters."
          />
        ) : (
          <DataTable
            columns={columns}
            rows={filtered}
            getRowKey={getRowKey}
            pageSize={pageSize}
          />
        )}
      </Surface>
    </div>
  );
};

export default ListPage;
