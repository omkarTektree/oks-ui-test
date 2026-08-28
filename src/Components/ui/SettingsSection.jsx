import Surface from "./Surface";

/** A titled card whose children are <SettingRow>s, separated by dividers. */
const SettingsSection = ({ title, subtitle, children }) => (
  <Surface padding="none">
    <div className="px-6 pt-5">
      <h3 className="text-sm font-semibold text-[var(--app-fg)]">{title}</h3>
      {subtitle && (
        <p className="mt-0.5 text-xs text-[color:var(--app-fg-muted)]">{subtitle}</p>
      )}
    </div>
    <div className="mt-2 divide-y divide-[color:var(--app-border)] border-t border-[color:var(--app-border)] px-6">
      {children}
    </div>
  </Surface>
);

export default SettingsSection;
