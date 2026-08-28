/** Label + description on the left, a control on the right. Stack with dividers. */
const SettingRow = ({ title, description, children }) => (
  <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
    <div className="min-w-0 sm:pr-6">
      <p className="text-sm font-medium text-[var(--app-fg)]">{title}</p>
      {description && (
        <p className="mt-0.5 text-sm text-[color:var(--app-fg-muted)]">
          {description}
        </p>
      )}
    </div>
    <div className="shrink-0">{children}</div>
  </div>
);

export default SettingRow;
