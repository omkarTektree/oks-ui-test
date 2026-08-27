import { Link } from "react-router-dom";
import { Search, ArrowRight, FileText } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import { HELP_CATEGORIES, HELP_ARTICLES, DOC_SECTIONS } from "../../../data/content";

/** `variant` = "help" | "kb" | "docs" — same layout, different copy + cards. */
const HelpCenter = ({ variant = "help" }) => {
  const copy = {
    help: { title: "Help center", subtitle: "Search our guides or browse by topic.", cats: HELP_CATEGORIES },
    kb: { title: "Knowledge base", subtitle: "In-depth articles maintained by the support team.", cats: HELP_CATEGORIES },
    docs: { title: "Documentation", subtitle: "Everything you need to build on the platform.", cats: DOC_SECTIONS },
  }[variant];

  return (
    <div className="space-y-8">
      <SectionTitle title={copy.title} subtitle={copy.subtitle} />

      <Surface padding="lg" className="text-center">
        <div className="mx-auto flex max-w-xl items-center gap-2 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-bg)] px-4 py-3">
          <Search size={16} className="text-[color:var(--app-fg-subtle)]" />
          <input
            className="min-w-0 flex-1 bg-transparent text-sm text-[var(--app-fg)] outline-none placeholder:text-[color:var(--app-fg-subtle)]"
            placeholder={`Search ${copy.title.toLowerCase()}…`}
          />
        </div>
      </Surface>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.cats.map((c) => (
          <Surface key={c.title} interactive className="cursor-pointer">
            <span className="flex h-10 w-10 items-center justify-center rounded-[var(--oks-radius-lg)] bg-[var(--oks-color-primary-50)] text-[color:var(--oks-color-primary-600)]">
              <c.icon size={18} />
            </span>
            <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-[var(--app-fg)]">
              {c.title}
              {c.count != null && (
                <span className="text-xs font-normal text-[color:var(--app-fg-subtle)]">
                  {c.count}
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-[color:var(--app-fg-muted)]">{c.blurb}</p>
          </Surface>
        ))}
      </div>

      {variant !== "docs" && (
        <Surface padding="none">
          <div className="p-5 pb-0">
            <CardHeader title="Popular articles" subtitle="Most viewed this month" />
          </div>
          <ul className="divide-y divide-[color:var(--app-border)]">
            {HELP_ARTICLES.map((a) => (
              <li key={a}>
                <Link
                  to="#"
                  className="flex items-center justify-between gap-3 px-5 py-3.5 text-sm text-[color:var(--app-fg-muted)] transition-colors hover:bg-[var(--app-surface-2)]"
                >
                  <span className="flex items-center gap-2.5">
                    <FileText size={15} className="text-[color:var(--app-fg-subtle)]" />
                    {a}
                  </span>
                  <ArrowRight size={14} className="text-[color:var(--app-fg-subtle)]" />
                </Link>
              </li>
            ))}
          </ul>
        </Surface>
      )}
    </div>
  );
};

export default HelpCenter;
