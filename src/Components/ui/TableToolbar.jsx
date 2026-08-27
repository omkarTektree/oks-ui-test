import { Chip } from "oks-ui";
import SearchInput from "./SearchInput";

/**
 * Bar above a table: search on the left, toggleable filter chips in the middle,
 * arbitrary actions on the right.
 * `filters` = [{ key, label }]; `active` = string[]; `onFilterToggle(key)`.
 */
const TableToolbar = ({
  search,
  onSearch,
  searchPlaceholder,
  filters = [],
  active = [],
  onFilterToggle,
  actions,
}) => (
  <div className="flex flex-wrap items-center gap-3 border-b border-[color:var(--app-border)] p-4">
    {onSearch != null && (
      <SearchInput
        value={search}
        onChange={onSearch}
        placeholder={searchPlaceholder}
        className="w-full max-w-xs"
      />
    )}

    {filters.length > 0 && (
      <div className="flex flex-wrap items-center gap-1.5">
        {filters.map((f) => (
          <Chip
            key={f.key}
            size="sm"
            variant={active.includes(f.key) ? "solid" : "bordered"}
            color={active.includes(f.key) ? "primary" : "default"}
            selected={active.includes(f.key)}
            onSelectedChange={() => onFilterToggle?.(f.key)}
          >
            {f.label}
          </Chip>
        ))}
      </div>
    )}

    {actions && <div className="ml-auto flex items-center gap-2">{actions}</div>}
  </div>
);

export default TableToolbar;
