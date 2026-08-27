/**
 * BoardView — horizontal column board (kanban). Presentational only.
 * `columns` = [{ id, title, accent?, items: [...] }]
 * `renderCard(item, column)` returns the card body.
 * `columnMeta(column)` optionally returns a node shown under the column title.
 */
const BoardView = ({ columns, renderCard, columnMeta }) => (
  <div className="flex gap-4 overflow-x-auto pb-2">
    {columns.map((col) => (
      <div
        key={col.id}
        className="flex w-72 shrink-0 flex-col rounded-[var(--oks-radius-xl)] border border-[color:var(--app-border)] bg-[var(--app-surface-2)]"
      >
        <div className="flex items-center gap-2 border-b border-[color:var(--app-border)] px-3 py-2.5">
          {col.accent && (
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: `var(--oks-color-${col.accent}-500)` }}
            />
          )}
          <span className="text-sm font-semibold text-[var(--app-fg)]">{col.title}</span>
          <span className="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--app-surface)] px-1.5 text-[11px] font-medium text-[color:var(--app-fg-muted)]">
            {(col.items ?? []).length}
          </span>
        </div>
        {columnMeta && (
          <div className="border-b border-[color:var(--app-border)] px-3 py-2 text-xs text-[color:var(--app-fg-muted)]">
            {columnMeta(col)}
          </div>
        )}
        <div className="min-h-[6rem] flex-1 space-y-2.5 p-3">
          {(col.items ?? []).map((item, i) => (
            <div
              key={item.id ?? i}
              className="rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-surface)] p-3 shadow-[var(--app-shadow-sm)]"
            >
              {renderCard(item, col)}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default BoardView;
