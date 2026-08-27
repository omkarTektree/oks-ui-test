/**
 * KeyValueList — a definition list for detail panels.
 * `items` = [{ label, value }]  (value can be any node)
 * `columns` = 1 | 2  — 2 lays label/value pairs onto a responsive grid.
 */
const KeyValueList = ({ items, columns = 1, className = "" }) => (
  <dl
    className={[
      columns === 2
        ? "grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
        : "divide-y divide-[color:var(--app-border)]",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {items.map((item) => (
      <div
        key={item.label}
        className={
          columns === 2
            ? "flex flex-col gap-0.5"
            : "flex items-start justify-between gap-4 py-2.5 first:pt-0 last:pb-0"
        }
      >
        <dt className="shrink-0 text-sm text-[color:var(--app-fg-subtle)]">
          {item.label}
        </dt>
        <dd
          className={`text-sm text-[var(--app-fg)] ${
            columns === 2 ? "font-medium" : "text-right"
          }`}
        >
          {item.value}
        </dd>
      </div>
    ))}
  </dl>
);

export default KeyValueList;
