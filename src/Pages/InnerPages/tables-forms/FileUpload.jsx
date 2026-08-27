import { Button, FormFieldSet, toast } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import FormCard from "../../../Components/ui/FormCard";

const FileUpload = () => (
  <div className="space-y-6">
    <SectionTitle
      title="File upload"
      subtitle="oks-ui FileField — single, multiple, and type-restricted uploads."
    />
    <FormCard
      title="Uploads"
      onSubmit={() => toast.success("Uploaded")}
      footer={
        <Button type="submit" color="primary" size="sm">
          Upload
        </Button>
      }
    >
      <FormFieldSet
        type="file"
        name="avatar"
        label="Profile photo"
        description="A single image, up to 2 MB."
        accept="image/*"
      />
      <FormFieldSet
        type="file"
        name="attachments"
        label="Attachments"
        description="Add as many files as you need."
        multiple
      />
      <FormFieldSet
        type="file"
        name="report"
        label="Report (PDF only)"
        accept="application/pdf"
      />
    </FormCard>
  </div>
);

export default FileUpload;
