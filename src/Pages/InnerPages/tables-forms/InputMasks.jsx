import { Button, FormFieldSet, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import FormCard from "../../../Components/ui/FormCard";

const InputMasks = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Input masks"
      subtitle="Formatted inputs — phone with country code, OTP, and colour."
    />
    <FormCard
      title="Verification"
      onSubmit={() => toast.success("Verified")}
      footer={
        <Button type="submit" color="primary" size="sm">
          Verify
        </Button>
      }
    >
      <FormFieldSet
        type="phone"
        name="phone"
        label="Phone number"
        description="Country code is detected as you type."
      />
      <FormFieldSet
        type="otp"
        name="otp"
        label="One-time code"
        length={6}
        description="Paste the 6-digit code from your authenticator."
      />
      <FormFieldSet
        type="otp"
        name="pin"
        label="PIN"
        length={4}
        format="numeric"
      />
      <FormFieldSet type="color" name="brand" label="Brand colour" />
    </FormCard>
  </div>
);

export default InputMasks;
