import { PageTitle } from "oks-ui";

/** Page-level heading with an optional trailing actions cluster. */
const SectionTitle = ({ as = "h1", title, subtitle, actions, className = "" }) => (
  <div
    className={`mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end ${className}`}
  >
    <PageTitle
      as={as}
      title={title}
      subtitle={subtitle}
      classNames={{
        base: "flex-col items-start gap-1",
        title: "text-xl font-bold tracking-tight text-[var(--app-fg)] sm:text-2xl",
        subtitle: "text-sm text-[color:var(--app-fg-muted)]",
      }}
    />
    {actions ? (
      <div className="flex flex-wrap items-center gap-2">{actions}</div>
    ) : null}
  </div>
);

export default SectionTitle;
