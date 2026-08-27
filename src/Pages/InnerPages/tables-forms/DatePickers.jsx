import { Button, FormFieldSet, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import FormCard from "../../../Components/ui/FormCard";

const DatePickers = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Date pickers"
      subtitle="oks-ui <DatePickerField> — single date, range, with time, and quick presets."
    />
    <FormCard
      title="Schedule"
      onSubmit={() => toast.success("Scheduled")}
      footer={
        <Button type="submit" color="primary" size="sm">
          Save
        </Button>
      }
    >
      <FormFieldSet type="datepicker" name="date" label="Due date" />
      <FormFieldSet
        type="datepicker"
        name="range"
        label="Reporting period"
        range
        showPresets
      />
      <FormFieldSet
        type="datepicker"
        name="datetime"
        label="Meeting start"
        withTime
      />
    </FormCard>
  </div>
);

export default DatePickers;
