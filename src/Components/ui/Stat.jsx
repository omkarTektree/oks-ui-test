/** Value + label + optional hint. Used standalone or inside a KpiCard. */
const Stat = ({ value, label, hint, className = "" }) => (
  <div className={className}>
    <p className="text-2xl font-semibold tracking-tight text-[var(--app-fg)]">
      {value}
    </p>
    <p className="mt-0.5 text-sm text-[color:var(--app-fg-muted)]">{label}</p>
    {hint ? (
      <p className="mt-1 text-xs text-[color:var(--app-fg-subtle)]">{hint}</p>
    ) : null}
  </div>
);

export default Stat;
