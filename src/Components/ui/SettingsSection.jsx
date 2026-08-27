import Surface from "./Surface";
import CardHeader from "./CardHeader";

/** A titled card whose children are <SettingRow>s, separated by dividers. */
const SettingsSection = ({ title, subtitle, children }) => (
  <Surface padding="none">
    <div className="border-b border-[color:var(--app-border)] px-6 py-5">
      <CardHeader title={title} subtitle={subtitle} className="mb-0" />
    </div>
    <div className="divide-y divide-[color:var(--app-border)] px-6">
      {children}
    </div>
  </Surface>
);

export default SettingsSection;
