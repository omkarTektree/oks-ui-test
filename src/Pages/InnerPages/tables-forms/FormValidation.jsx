import { Button, FormFieldSet, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import FormCard from "../../../Components/ui/FormCard";

const FormValidation = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Form validation"
      subtitle="Declarative rules with per-rule messages; errors surface on blur and on submit."
    />

    <FormCard
      title="Create account"
      onSubmit={() => toast.success("All valid — submitted")}
      footer={
        <Button type="submit" color="primary" size="sm">
          Create account
        </Button>
      }
    >
      <FormFieldSet
        name="username"
        label="Username"
        placeholder="jane_doe"
        description="3–20 characters, letters, numbers and underscores."
        validation={{
          rules: { required: true, minLength: 3, pattern: "^[a-zA-Z0-9_]+$" },
          message: {
            required: "Username is required",
            minLength: "At least 3 characters",
            pattern: "Letters, numbers and underscores only",
          },
        }}
      />
      <FormFieldSet
        type="email"
        name="email"
        label="Email"
        validation={{
          rules: { required: true, email: true },
          message: {
            required: "Email is required",
            email: "Enter a valid email address",
          },
        }}
      />
      <FormFieldSet
        type="password"
        name="password"
        label="Password"
        validation={{
          rules: { required: true, minLength: 8 },
          message: {
            required: "Password is required",
            minLength: "Use at least 8 characters",
          },
        }}
      />
      <FormFieldSet
        type="password"
        name="confirm"
        label="Confirm password"
        validation={{
          rules: { required: true, matchField: "password" },
          message: {
            required: "Please confirm your password",
            matchField: "Passwords do not match",
          },
        }}
      />
      <FormFieldSet
        type="checkbox"
        name="terms"
        options={[{ label: "I agree to the terms of service", value: "agreed" }]}
        validation={{
          rules: { required: true },
          message: { required: "You must accept the terms" },
        }}
      />
    </FormCard>
  </div>
);

export default FormValidation;
