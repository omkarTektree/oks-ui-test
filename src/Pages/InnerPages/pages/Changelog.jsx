import { Chip } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { CHANGELOG } from "../../../data/content";

const TAG_TONE = { Feature: "primary", Fix: "danger", Improvement: "success" };

const Changelog = ({ title = "Changelog", subtitle = "Every notable change, newest first." }) => (
  <div className="mx-auto max-w-3xl space-y-6">
    <SectionTitle title={title} subtitle={subtitle} />

    <ol className="relative space-y-6 border-l border-[color:var(--app-border)] pl-6">
      {CHANGELOG.map((release) => (
        <li key={release.version} className="relative">
          <span className="absolute -left-[1.7rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--app-surface)] bg-[var(--oks-color-primary-500)]" />
          <Surface>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-sm font-semibold text-[var(--app-fg)]">
                v{release.version}
              </span>
              <Chip size="sm" variant="soft" color={TAG_TONE[release.tag] ?? "default"}>
                {release.tag}
              </Chip>
              <span className="ml-auto text-xs text-[color:var(--app-fg-subtle)]">
                {release.date}
              </span>
            </div>
            <ul className="space-y-1.5 text-sm text-[color:var(--app-fg-muted)]">
              {release.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--app-fg-subtle)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Surface>
        </li>
      ))}
    </ol>
  </div>
);

export default Changelog;
