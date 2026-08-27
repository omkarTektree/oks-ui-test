import { PageTitle } from "oks-ui";

/** Heading row for the top of a <Surface>. */
const CardHeader = ({ title, subtitle, actions, className = "" }) => (
  <div
    className={`mb-4 flex items-start justify-between gap-3 ${className}`}
  >
    <PageTitle
      as="h3"
      title={title}
      subtitle={subtitle}
      classNames={{
        base: "flex-col items-start gap-0.5",
        title: "text-sm font-semibold text-[var(--app-fg)]",
        subtitle: "text-xs text-[color:var(--app-fg-muted)]",
      }}
    />
    {actions ? (
      <div className="flex shrink-0 items-center gap-1.5">{actions}</div>
    ) : null}
  </div>
);

export default CardHeader;
