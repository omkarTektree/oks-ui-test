import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { SEARCH_RESULTS } from "../../../data/content";

const total = SEARCH_RESULTS.groups.reduce((n, g) => n + g.items.length, 0);

const SearchResults = () => (
  <div className="mx-auto max-w-3xl space-y-6">
    <SectionTitle
      title="Search results"
      subtitle={`${total} results for "${SEARCH_RESULTS.query}"`}
    />

    <div className="flex items-center gap-2 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-surface)] px-4 py-3">
      <Search size={16} className="text-[color:var(--app-fg-subtle)]" />
      <input
        defaultValue={SEARCH_RESULTS.query}
        className="min-w-0 flex-1 bg-transparent text-sm text-[var(--app-fg)] outline-none"
      />
    </div>

    {SEARCH_RESULTS.groups.map((group) => (
      <div key={group.label}>
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
          {group.label}
        </h2>
        <Surface padding="none" className="divide-y divide-[color:var(--app-border)]">
          {group.items.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="flex items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-[var(--app-surface-2)]"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[var(--app-fg)]">{item.title}</p>
                <p className="truncate text-xs text-[color:var(--app-fg-subtle)]">{item.meta}</p>
              </div>
              <ArrowRight size={14} className="shrink-0 text-[color:var(--app-fg-subtle)]" />
            </Link>
          ))}
        </Surface>
      </div>
    ))}
  </div>
);

export default SearchResults;
