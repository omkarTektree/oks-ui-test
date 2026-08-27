/**
 * Minimal data table. `columns` = [{ key, header, align?, render?(row) }].
 * Sorting / selection / pagination land in a later pass.
 */
const DataTable = ({ columns, rows, getRowKey }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b border-[color:var(--app-border)]">
          {columns.map((col) => (
            <th
              key={col.key}
              className={`whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)] ${
                col.align === "right" ? "text-right" : "text-left"
              }`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={getRowKey ? getRowKey(row) : i}
            className="border-b border-[color:var(--app-border)] transition-colors last:border-0 hover:bg-[var(--app-surface-2)]"
          >
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
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
