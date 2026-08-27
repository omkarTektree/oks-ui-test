import { useState } from "react";
import { Button } from "oks-ui";
import { Plus, Search, Pin } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { NOTE_FOLDERS, NOTES } from "../../../data/apps";

const Notes = () => {
  const [folder, setFolder] = useState("all");
  const [query, setQuery] = useState("");

  const visible = NOTES.filter(
    (n) =>
      (folder === "all" || n.folder === folder) &&
      (query.trim() === "" ||
        (n.title + n.body).toLowerCase().includes(query.trim().toLowerCase()))
  );

  return (
    <div>
      <SectionTitle
        title="Notes"
        subtitle="Quick notes grouped into folders."
        actions={
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New note
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[13rem_1fr]">
        <Surface padding="sm" className="h-max">
          {NOTE_FOLDERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFolder(f.id)}
              className={`flex w-full items-center justify-between rounded-[var(--oks-radius-md)] px-2.5 py-2 text-left text-sm transition-colors hover:bg-[var(--app-surface-2)] ${
                folder === f.id
                  ? "bg-[var(--app-surface-2)] font-medium text-[var(--app-fg)]"
                  : "text-[color:var(--app-fg-muted)]"
              }`}
            >
              <span>{f.label}</span>
              <span className="text-[11px] text-[color:var(--app-fg-subtle)]">{f.count}</span>
            </button>
          ))}
        </Surface>

        <div className="space-y-4">
          <div className="flex items-center gap-2 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-surface)] px-3 py-2">
            <Search size={15} className="text-[color:var(--app-fg-subtle)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-[var(--app-fg)] outline-none placeholder:text-[color:var(--app-fg-subtle)]"
              placeholder="Search notes"
            />
          </div>

          {visible.length === 0 ? (
            <p className="py-10 text-center text-sm text-[color:var(--app-fg-muted)]">
              No notes match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((n) => (
                <Surface
                  key={n.id}
                  padding="sm"
                  interactive
                  className="cursor-pointer border-t-2"
                  style={{ borderTopColor: `var(--oks-color-${n.color}-500)` }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--app-fg)]">{n.title}</p>
                    <Pin size={13} className="shrink-0 text-[color:var(--app-fg-subtle)]" />
                  </div>
                  <p className="mt-1.5 line-clamp-4 text-xs leading-relaxed text-[color:var(--app-fg-muted)]">
                    {n.body}
                  </p>
                  <p className="mt-3 text-[11px] text-[color:var(--app-fg-subtle)]">
                    Updated {n.updated}
                  </p>
                </Surface>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
