import { Button } from "oks-ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Compact pager. `page` is 1-indexed. */
const Pagination = ({ page, pageCount, onChange, total, pageSize }) => {
  if (pageCount <= 1 && total == null) return null;

  const go = (next) => onChange(Math.min(Math.max(next, 1), pageCount));
  const from = total != null ? (page - 1) * pageSize + 1 : null;
  const to = total != null ? Math.min(page * pageSize, total) : null;

  const pages = [];
  for (let p = 1; p <= pageCount; p += 1) {
    if (p === 1 || p === pageCount || Math.abs(p - page) <= 1) pages.push(p);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--app-border)] px-4 py-3 text-sm">
      {total != null ? (
        <p className="text-[color:var(--app-fg-muted)]">
          {from}–{to} of {total.toLocaleString()}
        </p>
      ) : (
        <span />
      )}
      <div className="flex items-center gap-1">
        <Button
          isIconOnly
          size="sm"
          variant="bordered"
          aria-label="Previous page"
          isDisabled={page <= 1}
          onClick={() => go(page - 1)}
        >
          <ChevronLeft size={16} />
        </Button>
        {pages.map((p, i) =>
          p === "…" ? (
            <span
              key={`gap-${i}`}
              className="px-1 text-[color:var(--app-fg-subtle)]"
            >
              …
            </span>
          ) : (
            <Button
              key={p}
              size="sm"
              variant={p === page ? "solid" : "bordered"}
              color={p === page ? "primary" : "default"}
              onClick={() => go(p)}
              className="min-w-9"
            >
              {p}
            </Button>
          )
        )}
        <Button
          isIconOnly
          size="sm"
          variant="bordered"
          aria-label="Next page"
          isDisabled={page >= pageCount}
          onClick={() => go(page + 1)}
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
