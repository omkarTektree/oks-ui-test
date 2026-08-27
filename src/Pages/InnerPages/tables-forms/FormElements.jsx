import { Button, FormFieldSet, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import FormCard from "../../../Components/ui/FormCard";

const FormElements = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Form elements"
      subtitle="Every field type oks-ui ships, driven through a single <FormFieldSet>."
    />

    <FormCard
      title="Field gallery"
      onSubmit={() => toast.success("Submitted")}
      footer={
        <>
          <Button type="reset" variant="bordered" size="sm">
            Reset
          </Button>
          <Button type="submit" color="primary" size="sm">
            Submit
          </Button>
        </>
      }
    >
      <FormFieldSet name="fullName" label="Full name" placeholder="Jane Doe" />
      <FormFieldSet type="email" name="email" label="Email" placeholder="jane@acme.io" />
      <FormFieldSet type="password" name="password" label="Password" />
      <FormFieldSet type="number" name="seats" label="Seats" placeholder="1" />
      <FormFieldSet
        type="textarea"
        name="bio"
        label="Bio"
        placeholder="A few words…"
      />
      <FormFieldSet
        type="select"
        name="plan"
        label="Plan"
        placeholder="Choose a plan"
        options={[
          { label: "Starter", value: "starter" },
          { label: "Growth", value: "growth" },
          { label: "Enterprise", value: "enterprise" },
        ]}
      />
      <FormFieldSet
        type="radio"
        name="billing"
        label="Billing cycle"
        options={[
          { label: "Monthly", value: "monthly" },
          { label: "Yearly", value: "yearly" },
        ]}
      />
      <FormFieldSet
        type="checkbox"
        name="addons"
        label="Add-ons"
        options={[
          { label: "Priority support", value: "support" },
          { label: "Audit log", value: "audit" },
          { label: "SSO", value: "sso" },
        ]}
      />
      <FormFieldSet type="switch" name="notify" label="Email me about product news" />
      <FormFieldSet type="datepicker" name="startDate" label="Start date" />
      <FormFieldSet type="range" name="budget" label="Monthly budget" min={0} max={100} />
      <FormFieldSet type="phone" name="phone" label="Phone" />
      <FormFieldSet type="otp" name="code" label="Verification code" length={6} />
      <FormFieldSet type="file" name="avatar" label="Avatar" />
    </FormCard>
  </div>
);

export default FormElements;
