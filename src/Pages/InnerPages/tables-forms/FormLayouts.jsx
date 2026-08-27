import { Button, FormFieldSet, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import FormCard from "../../../Components/ui/FormCard";

const submit = () => toast.success("Saved");

const FormLayouts = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Form layouts"
      subtitle="The same fields arranged three ways — stacked, two-column, and inline."
    />

    <FormCard
      title="Stacked"
      subtitle="One field per row — the default."
      onSubmit={submit}
      footer={
        <Button type="submit" color="primary" size="sm">
          Save
        </Button>
      }
    >
      <FormFieldSet name="s_name" label="Name" placeholder="Jane Doe" />
      <FormFieldSet type="email" name="s_email" label="Email" placeholder="jane@acme.io" />
      <FormFieldSet name="s_company" label="Company" placeholder="Acme Inc." />
    </FormCard>

    <FormCard
      title="Two column"
      subtitle="Fields grouped on a grid for denser forms."
      onSubmit={submit}
      footer={
        <Button type="submit" color="primary" size="sm">
          Save
        </Button>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormFieldSet name="g_first" label="First name" />
        <FormFieldSet name="g_last" label="Last name" />
        <FormFieldSet type="email" name="g_email" label="Email" />
        <FormFieldSet type="phone" name="g_phone" label="Phone" />
        <div className="sm:col-span-2">
          <FormFieldSet type="textarea" name="g_notes" label="Notes" />
        </div>
      </div>
    </FormCard>

    <FormCard
      title="Inline"
      subtitle="A compact row — good for filters and quick-add bars."
      onSubmit={submit}
      footer={null}
    >
      <div className="flex flex-wrap items-end gap-3">
        <div className="w-48">
          <FormFieldSet name="i_email" label="Invite by email" size="sm" />
        </div>
        <div className="w-36">
          <FormFieldSet
            type="select"
            name="i_role"
            label="Role"
            size="sm"
            options={[
              { label: "Member", value: "member" },
              { label: "Admin", value: "admin" },
            ]}
          />
        </div>
        <Button type="submit" color="primary" size="sm">
          Send invite
        </Button>
      </div>
    </FormCard>
  </div>
);

export default FormLayouts;
