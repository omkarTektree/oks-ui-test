import { useMemo, useState } from "react";
import { Checkbox } from "oks-ui";
import { ChevronsUpDown, ChevronDown, ChevronUp } from "lucide-react";
import Pagination from "./Pagination";

/**
 * `columns` = [{ key, header, align?, sortable?, sortValue?(row), render?(row) }].
 * Opt-in: `selectable`, `pageSize`, `loading`, `emptyContent`.
 * Sorting/paging are handled internally; without those props it renders a plain
 * table exactly as before.
 */
const DataTable = ({
  columns,
  rows,
  getRowKey = (_row, i) => i,
  selectable = false,
  onSelectionChange,
  pageSize,
  loading = false,
  emptyContent = "Nothing to show",
}) => {
  const [sort, setSort] = useState(null); // { key, dir: "asc" | "desc" }
  const [selected, setSelected] = useState(() => new Set());
  const [page, setPage] = useState(1);

  const sorted = useMemo(() => {
    if (!sort) return rows;
    const col = columns.find((c) => c.key === sort.key);
    if (!col) return rows;
    const val = col.sortValue ?? ((row) => row[col.key]);
    const factor = sort.dir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const av = val(a);
      const bv = val(b);
      if (av === bv) return 0;
      return (av > bv ? 1 : -1) * factor;
    });
  }, [rows, sort, columns]);

  const pageCount = pageSize ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
  const current = Math.min(page, pageCount);
  const visible = pageSize
    ? sorted.slice((current - 1) * pageSize, current * pageSize)
    : sorted;

  const toggleSort = (key) =>
    setSort((s) =>
      s?.key === key
        ? s.dir === "asc"
          ? { key, dir: "desc" }
          : null
        : { key, dir: "asc" }
    );

  const setSelection = (next) => {
    setSelected(next);
    onSelectionChange?.([...next]);
  };
  const toggleRow = (key) => {
    const next = new Set(selected);
    next.has(key) ? next.delete(key) : next.add(key);
    setSelection(next);
  };
  const allVisibleSelected =
    visible.length > 0 &&
    visible.every((row, i) => selected.has(getRowKey(row, i)));
  const toggleAll = () => {
    const next = new Set(selected);
    if (allVisibleSelected) {
      visible.forEach((row, i) => next.delete(getRowKey(row, i)));
    } else {
      visible.forEach((row, i) => next.add(getRowKey(row, i)));
    }
    setSelection(next);
  };

  const colCount = columns.length + (selectable ? 1 : 0);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[color:var(--app-border)]">
              {selectable && (
                <th className="w-10 px-4 py-3">
                  <Checkbox
                    size="sm"
                    aria-label="Select all"
                    checked={allVisibleSelected}
                    onChange={toggleAll}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)] ${
                    col.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {col.sortable ? (
                    <button
                      type="button"
                      onClick={() => toggleSort(col.key)}
                      className={`inline-flex items-center gap-1 transition-colors hover:text-[var(--app-fg)] ${
                        col.align === "right" ? "flex-row-reverse" : ""
                      }`}
                    >
                      {col.header}
                      {sort?.key === col.key ? (
                        sort.dir === "asc" ? (
                          <ChevronUp size={13} />
                        ) : (
                          <ChevronDown size={13} />
                        )
                      ) : (
                        <ChevronsUpDown size={13} className="opacity-40" />
                      )}
                    </button>
                  ) : (
                    col.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading &&
              Array.from({ length: pageSize || 5 }).map((_, r) => (
                <tr
                  key={`skeleton-${r}`}
                  className="border-b border-[color:var(--app-border)]"
                >
                  {Array.from({ length: colCount }).map((__, c) => (
                    <td key={c} className="px-4 py-3.5">
                      <div className="h-3.5 w-2/3 animate-pulse rounded bg-[var(--app-surface-2)]" />
                    </td>
                  ))}
                </tr>
              ))}

            {!loading && visible.length === 0 && (
              <tr>
                <td
                  colSpan={colCount}
                  className="px-4 py-10 text-center text-sm text-[color:var(--app-fg-muted)]"
                >
                  {emptyContent}
                </td>
              </tr>
            )}

            {!loading &&
              visible.map((row, i) => {
                const key = getRowKey(row, i);
                return (
                  <tr
                    key={key}
                    className="border-b border-[color:var(--app-border)] transition-colors last:border-0 hover:bg-[var(--app-surface-2)]"
                  >
                    {selectable && (
                      <td className="px-4 py-3">
                        <Checkbox
                          size="sm"
                          aria-label="Select row"
                          checked={selected.has(key)}
                          onChange={() => toggleRow(key)}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={`px-4 py-3 align-middle text-[color:var(--app-fg-muted)] ${
                          col.align === "right" ? "text-right" : "text-left"
                        }`}
                      >
                        {col.render ? col.render(row) : row[col.key]}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {pageSize && !loading && sorted.length > 0 && (
        <Pagination
          page={current}
          pageCount={pageCount}
          onChange={setPage}
          total={sorted.length}
          pageSize={pageSize}
        />
      )}
    </div>
  );
};

export default DataTable;
