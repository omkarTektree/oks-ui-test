import { Button, FormFieldSet, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import FormCard from "../../../Components/ui/FormCard";

const COUNTRIES = [
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Germany", value: "de" },
  { label: "Japan", value: "jp" },
  { label: "Brazil", value: "br" },
  { label: "Australia", value: "au" },
];

const SelectComponents = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Select components"
      subtitle="oks-ui <SelectField> — single, multiple, searchable, and native."
    />
    <FormCard
      title="Preferences"
      onSubmit={() => toast.success("Saved")}
      footer={
        <Button type="submit" color="primary" size="sm">
          Save
        </Button>
      }
    >
      <FormFieldSet
        type="select"
        name="country"
        label="Country"
        placeholder="Select a country"
        options={COUNTRIES}
      />
      <FormFieldSet
        type="select"
        name="languages"
        label="Languages"
        placeholder="Select all that apply"
        multiple
        options={[
          { label: "English", value: "en" },
          { label: "Spanish", value: "es" },
          { label: "French", value: "fr" },
          { label: "German", value: "de" },
          { label: "Japanese", value: "ja" },
        ]}
      />
      <FormFieldSet
        type="select"
        name="timezone"
        label="Timezone"
        placeholder="Search timezones…"
        showSearch
        options={[
          { label: "UTC−08:00 Pacific", value: "pst" },
          { label: "UTC−05:00 Eastern", value: "est" },
          { label: "UTC+00:00 London", value: "gmt" },
          { label: "UTC+01:00 Berlin", value: "cet" },
          { label: "UTC+09:00 Tokyo", value: "jst" },
        ]}
      />
      <FormFieldSet
        type="select"
        name="theme"
        label="Theme (native)"
        native
        options={[
          { label: "System", value: "system" },
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
        ]}
      />
    </FormCard>
  </div>
);

export default SelectComponents;
