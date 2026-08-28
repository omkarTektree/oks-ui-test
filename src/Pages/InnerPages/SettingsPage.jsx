import { Button } from "oks-ui";
import SectionTitle from "../../Components/ui/SectionTitle";
import SettingsSection from "../../Components/ui/SettingsSection";
import SettingRow from "../../Components/ui/SettingRow";

/**
 * Config-driven settings screen.
 * `config` = { title, subtitle, sections: [{ title, subtitle?, rows: [{ title, description?, control }] }], showSave? }
 */
const SettingsPage = ({ config }) => (
  <div className="mx-auto max-w-4xl space-y-6">
    <SectionTitle title={config.title} subtitle={config.subtitle} />

    {config.sections.map((section) => (
      <SettingsSection
        key={section.title}
        title={section.title}
        subtitle={section.subtitle}
      >
        {section.rows.map((row) => (
          <SettingRow
            key={row.title}
            title={row.title}
            description={row.description}
          >
            {row.control}
          </SettingRow>
        ))}
      </SettingsSection>
    ))}

    {config.showSave !== false && (
      <div className="flex justify-end gap-2">
        <Button variant="bordered" size="sm">
          Cancel
        </Button>
        <Button color="primary" size="sm">
          Save changes
        </Button>
      </div>
    )}
  </div>
);

export default SettingsPage;
