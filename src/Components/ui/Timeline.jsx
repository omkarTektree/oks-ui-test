import Surface from "./Surface";
import CardHeader from "./CardHeader";

const TONE = {
  primary: "var(--oks-color-primary-500)",
  success: "var(--oks-color-success-500)",
  warning: "var(--oks-color-warning-500)",
  danger: "var(--oks-color-danger-500)",
};

/**
 * Vertical list with dot markers + a connecting rail.
 * Per item: `title`, optional `meta`, optional `date`, optional `tag`
 * ({ label, tone }), optional `tone` for the marker.
 */
const Timeline = ({ title, subtitle, actions, items }) => (
  <Surface padding="md">
    <CardHeader title={title} subtitle={subtitle} actions={actions} />
    <ol className="relative ml-1.5 space-y-5 border-l border-[color:var(--app-border)] pl-5">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-[1.6rem] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-[var(--app-surface)]"
            style={{ background: TONE[item.tone] ?? TONE.primary }}
          />
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-[var(--app-fg)]">
                {item.title}
              </p>
              {item.meta && (
                <p className="text-xs text-[color:var(--app-fg-subtle)]">
                  {item.meta}
                </p>
              )}
            </div>
            <div className="shrink-0 text-right">
              {item.date && (
                <p className="text-xs text-[color:var(--app-fg-muted)]">
                  {item.date}
                </p>
              )}
              {item.tag && (
                <p
                  className="text-xs font-medium"
                  style={{ color: TONE[item.tag.tone] ?? TONE.primary }}
                >
                  {item.tag.label}
                </p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  </Surface>
);

export default Timeline;
