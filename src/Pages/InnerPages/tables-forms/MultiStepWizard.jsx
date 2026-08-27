import { FormFieldSet, SteppedForm, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";

const STEPS = [
  {
    key: "account",
    title: "Account",
    description: "How you'll sign in",
    fields: ["email", "password"],
    content: (
      <div className="flex flex-col gap-5">
        <FormFieldSet
          type="email"
          name="email"
          label="Work email"
          validation={{
            rules: { required: true, email: true },
            message: { required: "Required", email: "Enter a valid email" },
          }}
        />
        <FormFieldSet
          type="password"
          name="password"
          label="Password"
          validation={{
            rules: { required: true, minLength: 8 },
            message: { required: "Required", minLength: "8+ characters" },
          }}
        />
      </div>
    ),
  },
  {
    key: "workspace",
    title: "Workspace",
    description: "Set up your team",
    fields: ["workspace", "size"],
    content: (
      <div className="flex flex-col gap-5">
        <FormFieldSet
          name="workspace"
          label="Workspace name"
          placeholder="Acme Inc."
          validation={{
            rules: { required: true },
            message: { required: "Required" },
          }}
        />
        <FormFieldSet
          type="select"
          name="size"
          label="Team size"
          placeholder="Select…"
          options={[
            { label: "1–10", value: "s" },
            { label: "11–50", value: "m" },
            { label: "51–200", value: "l" },
            { label: "200+", value: "xl" },
          ]}
        />
      </div>
    ),
  },
  {
    key: "preferences",
    title: "Preferences",
    description: "Optional",
    isOptional: true,
    content: (
      <div className="flex flex-col gap-5">
        <FormFieldSet
          type="checkbox"
          name="topics"
          label="What are you interested in?"
          options={[
            { label: "Product updates", value: "product" },
            { label: "Best practices", value: "practices" },
            { label: "Community events", value: "events" },
          ]}
        />
        <FormFieldSet type="switch" name="digest" label="Send me a weekly digest" />
      </div>
    ),
  },
];

const MultiStepWizard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Multi-step wizard"
      subtitle="oks-ui <SteppedForm> — per-step validation, progress header, one final submit."
    />
    <Surface padding="lg">
      <SteppedForm
        steps={STEPS}
        submitLabel="Create workspace"
        onSubmit={() => toast.success("Workspace created")}
      />
    </Surface>
  </div>
);

export default MultiStepWizard;
